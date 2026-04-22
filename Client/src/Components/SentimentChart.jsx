import React, { useMemo } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const QuantumGlowDoughnut = ({ chartData }) => {
  const total = useMemo(() => chartData.values.reduce((a, b) => a + b, 0), [chartData]);
  const bullishPercent = ((chartData.values[0] / total) * 100).toFixed(0);
  const bearishPercent = ((chartData.values[1] / total) * 100).toFixed(0);

  const visualEnhancerPlugin = {
    id: 'visualEnhancer',
    beforeDraw: (chart) => {
      const { ctx, chartArea } = chart;
      const { datasets } = chart.data;
      datasets.forEach((dataset, i) => {
        const meta = chart.getDatasetMeta(i);
        meta.data.forEach((element, index) => {
          element.round = { radius: 15 };
          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          if (index === 0) {
            gradient.addColorStop(0, 'rgba(6, 182, 212, 0.2)');
            gradient.addColorStop(1, 'rgba(34, 197, 94, 0.8)');
          } else if (index === 1) {
            gradient.addColorStop(0, 'rgba(239, 68, 68, 0.2)');
            gradient.addColorStop(1, 'rgba(249, 115, 22, 0.8)');
          } else {
            gradient.addColorStop(0, 'rgba(113, 113, 122, 0.1)');
            gradient.addColorStop(1, 'rgba(59, 130, 246, 0.5)');
          }
          dataset.backgroundColor[index] = gradient;
        });
      });
    }
  };

  const data = {
    labels: chartData.labels,
    datasets: [{
      data: chartData.values,
      backgroundColor: [],
      borderWidth: 0,
      spacing: 15,
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '75%', // Larger, bolder ring
    layout: { padding: 0 },
    plugins: { legend: { display: false }, tooltip: { enabled: false } },
    animation: { duration: 800, easing: 'easeOutQuart' }
  };

  return (
    // Larger Container (h-96 w-96)
    <div className="relative h-80 w-80 flex items-center justify-center p-6">
      
      {/* Bloom Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none scale-105" style={{ filter: 'blur(30px) opacity(0.4)' }}>
        <Doughnut data={data} options={{...options, animation: false}} plugins={[visualEnhancerPlugin]} />
      </div>

      {/* Foreground Layer */}
      <div className="relative z-10 h-full w-full">
        <Doughnut data={data} options={options} plugins={[visualEnhancerPlugin]} />
      </div>

      {/* Overlay Data */}
      <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
        
        {/* Bullish: Top-Left Diagonal */}
        <div className="absolute top-[5%] left-[1%] flex flex-col items-center">
          <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Bullish</span>
          <span className="text-3xl font-black text-white">{bullishPercent}%</span>
        </div>

        {/* Center: Total */}
        <div className="flex flex-col items-center">
          <span className="text-4xl font-black text-white drop-shadow-lg">{total}</span>
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Total News weightage</span>
        </div>

        {/* Bearish: Bottom-Right Diagonal */}
        <div className="absolute bottom-[5%] right-[1%] flex flex-col items-center">
          <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">Caution</span>
          <span className="text-3xl font-black text-white">{bearishPercent}%</span>
        </div>
      </div>
    </div>
  );
};

export default QuantumGlowDoughnut;