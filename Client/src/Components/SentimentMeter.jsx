import React from "react";
import "../index.css";
import {
  CircularGaugeComponent,
  Inject,
  AxesDirective,
  AxisDirective,
  RangesDirective,
  RangeDirective,
  PointersDirective,
  PointerDirective,
  AnnotationsDirective,
  AnnotationDirective,
  Annotations,
} from "@syncfusion/ej2-react-circulargauge";

const SentimentMeter = ({ newValue }) => {
  const getColor = (newValue) => {
    return newValue < 60 ? (newValue > 40 ? "#c7bfb3" : "#ef4444") : "#22c55e";
  };
  const getUpdate = (newValue) => {
    return newValue < 60 ? (newValue > 40 ? "Neutral" : "Sell") : "Buy";
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      {/* 1. Absolute Glowing Background (Behind Gauge) */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-slate-950/80" />
        <div className="absolute top-[20%] left-[20%] w-1.5 h-1.5 rounded-full bg-purple-500 animate-twinkle shadow-[0_0_15px_2px_rgba(168,85,247,0.8)]" />
        <div
          className="absolute top-[60%] right-[25%] w-2 h-2 rounded-full bg-cyan-400 animate-twinkle shadow-[0_0_15px_2px_rgba(34,211,238,0.8)]"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-[40%] right-[10%] w-1 h-1 rounded-full bg-pink-500 animate-twinkle shadow-[0_0_15px_2px_rgba(236,72,153,0.8)]"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-[80%] left-[40%] w-1.5 h-1.5 rounded-full bg-blue-500 animate-twinkle shadow-[0_0_15px_2px_rgba(59,130,246,0.8)]"
          style={{ animationDelay: "0.5s" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
      </div>

      <CircularGaugeComponent
        width="100%"
        height="100%"
        background="transparent"
      >
        <Inject services={[Annotations]} />
        <AxesDirective>
          <AxisDirective
            startAngle={220}
            endAngle={140}
            minimum={0}
            maximum={100}
            radius="90%"
            majorTicks={{
              color: "#e9e6e2",
              height: 10,
              width: 2,
              position: "Outside",
            }}
            minorTicks={{
              color: "#9ca3af",
              height: 5,
              width: 1,
              position: "Outside",
            }}
            lineStyle={{ width: 2, color: "#4b5563" }}
            labelStyle={{
              font: { color: "#e9e6e2", size: "14px", fontWeight: "bold" },
              position: "Outside",
            }}
          >
            <RangesDirective>
              <RangeDirective
                start={0}
                end={40}
                color="#ef4444"
                radius="100%"
                startWidth={20}
                endWidth={20}
              />
              <RangeDirective
                start={40}
                end={60}
                color="#c7bfb3"
                radius="100%"
                startWidth={20}
                endWidth={20}
              />
              <RangeDirective
                start={60}
                end={100}
                color="#22c55e"
                radius="100%"
                startWidth={20}
                endWidth={20}
              />
            </RangesDirective>

            <PointersDirective>
              <PointerDirective
                type="Needle"
                value={newValue}
                color="#ffffff"
                needleStartWidth={2}
                needleEndWidth={5}
                animation={{ enable: true, duration: 2000 }}
                cap={{
                  radius: 35,
                  color: "#000000",
                  border: { color: `${getColor(newValue)}`, width: 5 },
                }}
              />
            </PointersDirective>

            <AnnotationsDirective>
              <AnnotationDirective
                content={`<div style="font-size: 32px; font-weight: 800; color: white;">${newValue}</div>`}
                angle={0}
                radius="0%"
                zIndex="1"
              />
            </AnnotationsDirective>
          </AxisDirective>
        </AxesDirective>
      </CircularGaugeComponent>

      {/* 3. Bottom Text Section */}
      <div className="absolute bottom-10 flex flex-col items-center">
        <p
          className={`text-3xl font-bold capitalize ${newValue > 60 ? "text-green-500" : newValue > 40 ? "text-zinc-200" : "text-red-500"} mb-15`}
        >
          {getUpdate(newValue)}
        </p>

        <p className="text-white text-sm font-medium uppercase tracking-widest opacity-80">
          Market Sentiment
        </p>
      </div>
    </div>
  );
};

export default SentimentMeter;
