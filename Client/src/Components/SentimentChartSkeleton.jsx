import React from 'react';

const QuantumGlowSkeleton = () => {
  return (
    <div className="relative h-80 w-80 flex items-center justify-center p-6 animate-pulse">
      
      {/* The Doughnut Ring Skeleton */}
      <div className="absolute h-64 w-64 rounded-full border-[15px] border-zinc-800/50" />

      {/* Overlay Skeleton Data */}
      <div className="absolute inset-0 flex items-center justify-center">
        
        {/* Bullish: Top-Left Placeholder */}
        <div className="absolute top-[15%] left-[5%] flex flex-col items-center gap-1">
          <div className="h-2 w-12 bg-zinc-800 rounded-full" />
          <div className="h-6 w-16 bg-zinc-700 rounded-lg" />
        </div>

        {/* Center: Total Placeholder */}
        <div className="flex flex-col items-center">
          <div className="h-10 w-20 bg-zinc-700 rounded-lg" />
          <div className="h-2 w-16 bg-zinc-800 rounded-full mt-2" />
        </div>

        {/* Bearish: Bottom-Right Placeholder */}
        <div className="absolute bottom-[15%] right-[5%] flex flex-col items-center gap-1">
          <div className="h-2 w-12 bg-zinc-800 rounded-full" />
          <div className="h-6 w-16 bg-zinc-700 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default QuantumGlowSkeleton;