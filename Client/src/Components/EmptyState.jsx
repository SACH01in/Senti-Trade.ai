import React from "react";

const EmptyState = ({ 
  icon: Icon, 
  title, 
  description, 
  color = "cyan", 
  className = "h-full w-full" 
}) => {
  
  // Color configuration map to ensure Tailwind generates necessary classes
  const theme = {
    cyan: "bg-cyan-500/5 text-cyan-500 border-cyan-500/30 bg-cyan-500/10",
    green: "bg-green-500/5 text-green-500 border-green-500/30 bg-green-500/10",
    red: "bg-red-500/5 text-red-500 border-red-500/30 bg-red-500/10",
    zinc: "bg-zinc-500/5 text-zinc-500 border-zinc-500/30 bg-zinc-500/10",
  };

  const selectedTheme = theme[color] || theme.cyan;
  const [bgClass, textClass, borderClass, pingClass] = selectedTheme.split(" ");

  return (
    <div className={`relative backdrop-blur-xl flex flex-col items-center justify-center p-8 border-2 border-dashed ${borderClass} rounded-2xl bg-zinc-900/50 text-center transition-all hover:border-opacity-50 z-6 group ${className}`}>
      
      {/* Decorative Icon Wrapper */}
      <div className={`relative w-16 h-16 rounded-full ${bgClass} flex items-center justify-center mb-6 group-hover:scale-130`}>
        <div className={`absolute inset-0 rounded-full animate-ping ${pingClass} group-hover:scale-130`} />
        {Icon && (
          <Icon className={`text-2xl ${textClass} group-hover:scale-130 transition-transform duration-300`} />
        )}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-white tracking-wide">
          {title}
        </h3>
        <p className="text-sm text-zinc-200 max-w-[200px] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default EmptyState;