"use client";

import React from "react";

type City = {
  name: string;
  x: number;
  y: number;
};

const cities: City[] = [
  { name: "Delhi", x: 45, y: 30 },
  { name: "Mumbai", x: 30, y: 60 },
  { name: "Bangalore", x: 40, y: 80 },
  { name: "Kolkata", x: 70, y: 45 },
];

type IndiaMapProps = {
  width?: number | string;
  height?: number | string;
  className?: string;
};

export default function IndiaMap({
  width = 520,
  height = 320,
  className = "",
}: IndiaMapProps) {
  return (
    <div className={`mx-auto ${className}`} style={{ width, height }}>
      <svg
        fill="none"
        style={{ width: "100%", height: "100%" }}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Simplified India outline path - hand-optimized for visual clarity */}
        <path
          d="M30 20 L45 15 L70 25 L75 35 L85 40 L80 50 L85 60 L80 70 L70 80 L60 85 L45 90 L30 85 L25 75 L20 65 L15 55 L20 45 L25 35 L30 20Z"
          fill="#f8fafc"
          stroke="#050a30"
          strokeWidth="1"
        />

        {/* City markers */}
        {cities.map((city) => (
          <g key={city.name}>
            {/* City dot */}
            <circle
              className="animate-pulse"
              cx={city.x}
              cy={city.y}
              fill="gold"
              r="2"
            />
            {/* City name */}
            <text
              className="font-medium"
              fill="#050a30"
              fontSize="4"
              x={city.x + 3}
              y={city.y - 2}
            >
              {city.name}
            </text>
          </g>
        ))}

        {/* Connection lines between cities */}
        <g stroke="gold" strokeDasharray="1 1" strokeWidth="0.5">
          <path d="M45,30 L30,60" /> {/* Delhi to Mumbai */}
          <path d="M30,60 L40,80" /> {/* Mumbai to Bangalore */}
          <path d="M40,80 L70,45" /> {/* Bangalore to Kolkata */}
        </g>
      </svg>
    </div>
  );
}
