import React, { useState, useEffect, useRef } from "react";

const SentiTradePulse = ({ value, assetName, isLoading, isSearched }) => {
  const [radius, setRadius] = useState(175);
  const [displayValue, setDisplayValue] = useState(value || 0);
  const directionRef = useRef(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        const mobileRadius = Math.min(130, (width - 100) / 2);
        setRadius(mobileRadius);
      } else if (width < 1024) {
        setRadius(155);
      } else {
        setRadius(175);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let interval;
    if (isLoading) {
      interval = setInterval(() => {
        setDisplayValue((prev) => {
          let nextValue = prev + directionRef.current * 4;
          if (nextValue >= 100) {
            nextValue = 100;
            directionRef.current = -1;
          } else if (nextValue <= 0) {
            nextValue = 0;
            directionRef.current = 1;
          }
          return nextValue;
        });
      }, 50);
    } else {
      setDisplayValue(Math.round(value));
    }
    return () => clearInterval(interval);
  }, [isLoading, value]);

  // 1. Dynamic Calculations
  const strokeWidth = 18;
  const cx = radius + strokeWidth;
  const cy = radius + strokeWidth;
  const viewBoxSize = (radius + strokeWidth) * 2;

  const trackPath = `M ${cx - radius} ${cy} A ${radius} ${radius} 0 0 1 ${cx + radius} ${cy}`;
  const redArcPath = `M ${cx - radius} ${cy} A ${radius} ${radius} 0 0 1 ${cx} ${cy - radius}`;
  const greenArcPath = `M ${cx} ${cy - radius} A ${radius} ${radius} 0 0 1 ${cx + radius} ${cy}`;

  // Needle Logic - Updated to use displayValue
  const rotation = displayValue * 1.8 - 90;
  const dustRotation = displayValue * 1.8 - 90;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 shadow-inner">
      <div className="absolute top-5 left-6 w-[90%] flex justify-between items-center text-sm">
        <p className="font-semibold uppercase tracking-wider text-zinc-100">
          SENTI-TRADE PULSE: <span className="text-cyan-300">{assetName}</span>
        </p>
      </div>

      {/* 2. --- Dynamic Gauge SVG --- */}
      <div
        className="relative flex items-center justify-center mt-12 mb-3"
        style={{ width: viewBoxSize, height: cy }}
      >
        <svg
          width={viewBoxSize}
          height={cy}
          viewBox={`0 0 ${viewBoxSize} ${cy}`}
          className="z-10"
        >
          <defs>
            <filter id="arcGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="7" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d={trackPath}
            fill="none"
            stroke="#252536"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d={redArcPath}
            fill="none"
            stroke="#ef4444"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            filter="url(#arcGlow)"
          />
          <path
            d={greenArcPath}
            fill="none"
            stroke="#22c55e"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            filter="url(#arcGlow)"
          />
        </svg>

        {/* 3. --- New Arc Points (0, 50, 100) --- */}
        <span
          className="absolute text-[15px] font-bold text-zinc-500"
          style={{ left: `${cx - radius - 5}px`, top: `${cy}px` }}
        >
          0
        </span>
        <span
          className="absolute text-[15px] font-bold text-zinc-500"
          style={{ left: `${cx - 5}px`, top: `${cy - radius - 45}px` }}
        >
          50
        </span>
        <span
          className="absolute text-[15px] font-bold text-zinc-500"
          style={{ left: `${cx + radius - 15}px`, top: `${cy}px` }}
        >
          100
        </span>

        {/* 4. --- Vertical Text --- */}
        <div
          className="absolute text-red-500 font-bold tracking-widest uppercase -rotate-90 origin-center text-lgsm opacity-80"
          style={{ left: `${cx - radius - 75}px`, top: `${cy - 50}px` }}
        >
          Bearish
        </div>
        <div
          className="absolute text-green-500 font-bold tracking-widest uppercase rotate-90 origin-center text-sm opacity-80"
          style={{ left: `${cx + radius + 5}px`, top: `${cy - 40}px` }}
        >
          Bullish
        </div>

        {/* Dynamic Value Display - Uses displayValue */}
        <div className="absolute top-[50px] z-20 text-center font-black">
          <div className="text-[76px] leading-[70px] font-black text-cyan-300">
            {displayValue}
          </div>
        </div>

        {/* Needle */}
        {isSearched && (
          <div
            className="absolute z-30 transition-transform duration-75 ease-linear origin-bottom shadow-[0_0_15px_white]"
            style={{
              bottom: "0px",
              left: `${cx - 2}px`,
              width: "4px",
              height: `${radius - 5}px`,
              backgroundColor: "white",
              transform: `rotate(${rotation}deg)`,
            }}
          />
        )}

        {/* Particle Tail */}
        <div
          className="absolute z-0 opacity-80 transition-transform duration-75 ease-linear"
          style={{
            transform: `rotate(${dustRotation}deg)`,
            bottom: "0px",
            left: `${cx}px`,
          }}
        ></div>
      </div>

      {/* Labels & Footer */}
      {isSearched ? (
        <div className="relative z-10 text-center mt-3">
          <p
            className={`text-xl font-bold ${displayValue < 40 ? "text-red-500" : displayValue < 60 ? "text-zinc-200" : "text-green-500"} uppercase tracking-wider`}
          >
            {isLoading
              ? "Analyzing..."
              : displayValue < 40
                ? "Bearish"
                : displayValue < 60
                  ? "Neutral"
                  : "Bullish"}
          </p>
          <p className="text-[13px] capitalize text-zinc-400 font-medium mt-2 tracking-wide">
            {isLoading
              ? "Fetching Market Data"
              : displayValue < 40
                ? "Do not Buy"
                : displayValue < 60
                  ? "Market is normal"
                  : "You can Buy"}
          </p>
        </div>
      ) : (
        <p className={`text-md capitalize fonr-smeibold`}>No data searched</p>
      )}

      {/* Blinking Dot */}
      {isLoading && (
        <div className="absolute top-10 flex items-center space-x-2.5 px-3 py-1.5 bg-[#0f172a] rounded-full border border-zinc-800">
          <div className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_10px_#dc2626] animate-pulse" />
          <p className="text-[10px] font-semibold text-zinc-100 uppercase tracking-widest">
            Neural Stream Active
          </p>
        </div>
      )}
    </div>
  );
};

export default SentiTradePulse;
