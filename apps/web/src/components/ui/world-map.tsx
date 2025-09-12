"use client";

import DottedMap from "dotted-map";
import Image from "next/image";
import { useRef } from "react";

type MapProps = {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
};

export default function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const mapWidth = 60;
  const mapHeight = 60;
  const map = new DottedMap({
    width: mapWidth,
    height: mapHeight,
    grid: "diagonal",
    countries: ["IND"],
  });

  const svgMap = map.getSVG({
    radius: 0.22,
    color: "#00000040",
    shape: "circle",
    backgroundColor: "transparent",
  });

  const projectPoint = (lat: number, lng: number) => {
    // Manual projection for India coordinates
    // India bounds: lat 8-37, lng 68-97
    const indiaBounds = {
      north: 37.1,
      south: 8,
      east: 97.4,
      west: 68.1,
    };

    const x =
      ((lng - indiaBounds.west) / (indiaBounds.east - indiaBounds.west)) *
      mapWidth;
    const y =
      ((indiaBounds.north - lat) / (indiaBounds.north - indiaBounds.south)) *
      mapHeight;

    return { x, y };
  };

  //   const createCurvedPath = (
  //     start: { x: number; y: number },
  //     end: { x: number; y: number }
  //   ) => {
  //     const midX = (start.x + end.x) / 2;
  //     const midY = Math.min(start.y, end.y) - 50;
  //     return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  //   };
  return (
    <div className="relative w-full rounded-lg bg-white font-sans dark:bg-black">
      <Image
        alt="india map"
        className="pointer-events-none h-auto w-full select-none"
        draggable={false}
        height={mapHeight}
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        width={mapWidth}
      />
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full select-none"
        ref={svgRef}
        viewBox={`0 0 ${mapWidth} ${mapHeight}`}
      >
        <title>India Map</title>

        {/* Jammu region dots to match existing map dots */}
        {[
          { lat: 36.22, lng: 73.6 }, // Top left center
          { lat: 36.22, lng: 74.1 }, // Top left upper
          { lat: 36.22, lng: 74.6 }, // Top left Jammu
          { lat: 36.22, lng: 75.1 }, // Top left center
          { lat: 36.22, lng: 75.6 }, // Top left upper
          { lat: 36.22, lng: 76.1 }, // Top left Jammu
          { lat: 36.22, lng: 76.6 }, // Top left center
          { lat: 36.65, lng: 72.9 }, // Top left upper
          { lat: 36.65, lng: 73.4 }, // Top left Jammu
          { lat: 36.65, lng: 73.9 }, // Top left center
          { lat: 36.65, lng: 74.4 }, // Top left upper
          { lat: 36.65, lng: 74.9 }, // Top left Jammu
          { lat: 37.09, lng: 72.7 },
          { lat: 37.09, lng: 73.2 }, // Top left upper
          { lat: 37.09, lng: 73.7 }, // Top left Jammu
          { lat: 37.09, lng: 74.2 }, // Top left center
          { lat: 37.09, lng: 74.7 }, // Top left upper

          { lat: 35.45, lng: 79.1 }, // Top left Jammu
          { lat: 35.85, lng: 78.85 }, // Top left Jammu
          { lat: 36.25, lng: 78.6 }, // Top left Jammu
          { lat: 36.25, lng: 79.1 }, // Top left Jammu
          { lat: 36.65, lng: 78.4 }, // Top left Jammu
          { lat: 36.65, lng: 78.9 }, // Top left center
          { lat: 36.65, lng: 79.4 }, // Top left upper
          { lat: 37.05, lng: 77.7 }, // Top left Jammu
          { lat: 37.05, lng: 78.2 }, // Top left Jammu
          { lat: 37.05, lng: 78.7 }, // Top left upper
          { lat: 37.05, lng: 79.2 }, // Top left Jammu
          { lat: 37.05, lng: 79.7 },
        ].map((jammuDot, i) => {
          const point = projectPoint(jammuDot.lat, jammuDot.lng);
          return (
            <g key={`jammu-${i}`}>
              <circle cx={point.x} cy={point.y} fill="#00000040" r="0.22" />
            </g>
          );
        })}

        {/* {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                animate={{
                  pathLength: 1,
                }}
                // d={createCurvedPath(startPoint, endPoint)}
                // fill="none"
                // initial={{
                //   pathLength: 0,
                // }}
                // key={`start-upper-${i}`}
                // stroke="url(#path-gradient)"
                // strokeWidth="1"
                // transition={{
                //   duration: 1,
                //   delay: 0.5 * i,
                //   ease: "easeOut",
                // }}
              />
            </g>
          );
        })} */}

        <defs>
          <linearGradient id="path-gradient" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            <g key={`start-${i}`}>
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                fill={lineColor}
                r="1"
                stroke="white"
                strokeWidth="1"
              />
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                fill={lineColor}
                opacity="0.5"
                r="1"
              >
                <animate
                  attributeName="r"
                  begin="0s"
                  dur="1.5s"
                  from="0"
                  repeatCount="indefinite"
                  to="4"
                />
                <animate
                  attributeName="opacity"
                  begin="0s"
                  dur="1.5s"
                  from="0.5"
                  repeatCount="indefinite"
                  to="0"
                />
              </circle>
            </g>
            <g key={`end-${i}`}>
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                fill={lineColor}
                r="1"
                stroke="white"
                strokeWidth="1"
              />
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                fill={lineColor}
                opacity="0.5"
                r="1"
              >
                <animate
                  attributeName="r"
                  begin="0s"
                  dur="1.5s"
                  from="0"
                  repeatCount="indefinite"
                  to="4"
                />
                <animate
                  attributeName="opacity"
                  begin="0s"
                  dur="1.5s"
                  from="0.5"
                  repeatCount="indefinite"
                  to="0"
                />
              </circle>
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}
