import Link from "next/link";
import { useState } from "react";

const SVGComponent = ({menuHover}: {menuHover:boolean}) => {

  const [hover, setHover] = useState<boolean>(false);

  return (
    <Link href="/about">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={100}
      height={90}
      viewBox="0 0 940 788"
      xmlSpace="preserve"
      className={`block w-0 delay-700 overflow-hidden cursor-pointer ${menuHover ? "animate-buttonExpand" : ""}`}
    ><g onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <g transform="matrix(10.668 0 0 10.668 467.2783 393.9996)" id="Layer_1" >
        <path
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "340.27 461.244",
            strokeLinecap: "butt",
            strokeDashoffset: 0,
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            fill: "rgb(0,0,0)",
            fillRule: "nonzero",
            opacity: 1,
          }}
          vectorEffect="non-scaling-stroke"
          transform=" translate(-43.755, -19.255)"
          d="m 87.51 1.02 L 4.51 0 h 0 S 0.51 5.01 0.51 5.01 v 0.1 s -0.51 33.4 -0.51 33.4 l 81.5 -0.51 h 0 s 0 0 0 0 l 6 -5 h -1 h 1 V 1.02 Z m -2 1.98 v 28.02 l -3.9 0.05 l 0.41 -25.56 l -75.51 -0.47 v -3.02 l 79 0.98 Z"
          strokeLinecap="round"
        />
      </g>
      <g transform="matrix(10.7801 0 0 10.7801 491.4955 369.1464)" id="Layer_1">
        <polygon
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeDashoffset: 0,
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            fill: hover ? "rgb(196, 123, 67)" : "rgb(223, 140, 76)",
            fillRule: "nonzero",
            opacity: 1,
          }}
          vectorEffect="non-scaling-stroke"
          points="-39.5,-14.985 -39.5,14.985 39.5,14.005 39.5,-14.015 -39.5,-14.985 "
        />
      </g>
      <g transform="matrix(1 0 0 1 499.2489 369.1459)" style={{}} id={"589114"}>
        <path
          xmlSpace="preserve"
          fontFamily="Asap"
          fontSize={191}
          fontStyle="normal"
          fontWeight="bold"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeDashoffset: 0,
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            fill: "rgb(0,0,0)",
            fillRule: "nonzero",
            opacity: 1,
            whiteSpace: "pre",
          }}
          d="M-309.04 60.38L-316.68 60.38Q-328.33 60.38-328.33 56.18L-328.33 56.18Q-328.33 55.42-328.04 54.56Q-327.76 53.70-327.56 52.74L-327.56 52.74L-285.55-70.07Q-284.02-74.08-274.66-74.08L-274.66-74.08L-264.73-74.08Q-255.18-74.08-253.84-70.07L-253.84-70.07L-211.82 52.74Q-211.25 54.65-211.25 56.18L-211.25 56.18Q-211.25 60.38-220.80 60.38L-220.80 60.38L-229.20 60.38Q-233.40 60.38-236.27 59.52Q-239.13 58.66-239.90 56.37L-239.90 56.37L-247.54 33.07L-292.61 33.07L-300.25 56.37Q-301.02 58.47-303.31 59.43Q-305.60 60.38-309.04 60.38L-309.04 60.38ZM-273.13-26.14L-284.40 7.86L-255.75 7.86L-266.64-26.14Q-267.59-29.20-268.26-32.25Q-268.93-35.31-269.50-38.36L-269.50-38.36L-270.26-38.36Q-270.84-35.31-271.41-32.25Q-271.98-29.20-273.13-26.14L-273.13-26.14ZM-148.60 60.00L-189.09 60.00Q-196.73 60.00-196.73 52.36L-196.73 52.36L-196.73-66.06Q-196.73-73.70-189.09-73.70L-189.09-73.70L-151.27-73.70Q-127.02-73.70-116.61-64.34Q-106.20-54.98-106.20-39.89L-106.20-39.89Q-106.20-33.40-108.97-27.67Q-111.74-21.94-116.41-17.64Q-121.09-13.34-126.82-10.86L-126.82-10.86L-126.63-10.10Q-122.05-9.14-118.13-7.04Q-114.22-4.94-110.97-1.98Q-107.72 0.98-105.53 4.71Q-103.33 8.43-102.09 12.63Q-100.85 16.83-100.85 21.23L-100.85 21.23Q-100.85 39.75-112.59 49.88Q-124.34 60.00-148.60 60.00L-148.60 60.00ZM-167.32 4.61L-167.32 34.98L-148.60 34.98Q-140.19 34.98-135.61 30.97Q-131.03 26.96-131.03 19.51L-131.03 19.51Q-131.03 12.06-136.37 8.34Q-141.72 4.61-151.65 4.61L-151.65 4.61L-167.32 4.61ZM-167.32-48.87L-167.32-20.41L-154.14-20.41Q-145.54-20.41-140.96-24.61Q-136.37-28.81-136.37-34.74L-136.37-34.74Q-136.37-41.80-140.67-45.34Q-144.97-48.87-153.75-48.87L-153.75-48.87L-167.32-48.87ZM-28.08 61.53L-28.08 61.53Q-57.49 61.53-73.44 43.86Q-89.39 26.19-89.39-6.85L-89.39-6.85Q-89.39-39.89-73.44-57.56Q-57.49-75.23-28.08-75.23L-28.08-75.23Q1.53-75.23 17.29-57.56Q33.04-39.89 33.04-6.85L33.04-6.85Q33.04 26.19 17.29 43.86Q1.53 61.53-28.08 61.53ZM-28.08 36.51L-28.08 36.51Q-12.80 36.51-4.97 25.33Q2.86 14.16 2.86-6.85L2.86-6.85Q2.86-27.86-4.97-38.94Q-12.80-50.02-28.08-50.02L-28.08-50.02Q-43.36-50.02-51.28-38.94Q-59.21-27.86-59.21-6.85L-59.21-6.85Q-59.21 14.16-51.28 25.33Q-43.36 36.51-28.08 36.51ZM109.63 61.53L109.63 61.53Q83.47 61.53 68.86 49.40Q54.24 37.27 54.24 15.31L54.24 15.31L54.24-67.97Q54.24-74.08 65.70-74.08L65.70-74.08L72.20-74.08Q83.66-74.08 83.66-67.97L83.66-67.97L83.66 13.40Q83.66 20.08 86.91 25.33Q90.15 30.59 96.07 33.55Q101.99 36.51 109.63 36.51L109.63 36.51Q117.47 36.51 123.29 33.55Q129.12 30.59 132.46 25.33Q135.80 20.08 135.80 13.40L135.80 13.40L135.80-67.97Q135.80-74.08 147.26-74.08L147.26-74.08L153.56-74.08Q165.02-74.08 165.02-67.97L165.02-67.97L165.02 15.31Q165.02 37.27 150.41 49.40Q135.80 61.53 109.63 61.53ZM233.40 60.38L226.72 60.38Q215.26 60.38 215.26 54.27L215.26 54.27L215.26-48.68L184.89-48.68Q179.16-48.68 179.16-58.23L179.16-58.23L179.16-64.15Q179.16-73.70 184.89-73.70L184.89-73.70L275.23-73.70Q280.96-73.70 280.96-64.15L280.96-64.15L280.96-58.23Q280.96-48.68 275.23-48.68L275.23-48.68L244.86-48.68L244.86 54.27Q244.86 60.38 233.40 60.38L233.40 60.38Z"
        />
      </g></g>
    </svg></Link>
  );
};
export default SVGComponent;
