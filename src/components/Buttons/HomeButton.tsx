import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateActiveSegment } from "@/store/reducers/segmentList";

const SVGComponent = ({menuHover}: {menuHover: boolean}) => {

  const [hover, setHover] = useState<boolean>(false);
  const dispatch = useDispatch();
  const handleClick = () => dispatch(updateActiveSegment(-1));
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={100}
      height={90}
      viewBox="9.27 18.08 31.46 13.84"
      xmlSpace="preserve"
      className={` w-0 delay-700 overflow-hidden cursor-pointer ${menuHover ? "animate-buttonExpand" : ""}`}
    >
      <g transform="matrix(0.035 0 0 0.035 25 25)" id={"694674"} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={handleClick}>
        <g vectorEffect="non-scaling-stroke">
          <g transform="matrix(10.2711 0 0 10.2711 0.002 0.0009)" id="Layer_1">
            <path
              style={{
                stroke: "none",
                strokeWidth: 1,
                strokeDasharray: "340.27px, 461.244px",
                strokeLinecap: "butt",
                strokeDashoffset: 0,
                strokeLinejoin: "miter",
                strokeMiterlimit: 4,
                fill: "rgb(0, 0, 0)",
                fillRule: "nonzero",
                opacity: 1,
              }}
              vectorEffect="non-scaling-stroke"
              transform=" translate(-43.755, -19.255)"
              d="m 87.51 1.02 L 4.51 0 h 0 S 0.51 5.01 0.51 5.01 v 0.1 s -0.51 33.4 -0.51 33.4 l 81.5 -0.51 h 0 s 0 0 0 0 l 6 -5 h -1 h 1 V 1.02 Z m -2 1.98 v 28.02 l -3.9 0.05 l 0.41 -25.56 l -75.51 -0.47 v -3.02 l 79 0.98 Z"
              strokeLinecap="round"
            />
          </g>
          <g
            transform="matrix(10.2711 0 0 10.2711 23.1634 -23.0064)"
            id="Layer_1"
          >
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
          <g transform="matrix(1 0 0 1 18.0196 -26.8596)" id={"658917"}>
            <path
              style={{
                stroke: "none",
                strokeWidth: 0,
                strokeDasharray: "none",
                strokeLinecap: "butt",
                strokeDashoffset: 0,
                strokeLinejoin: "miter",
                strokeMiterlimit: 4,
                fill: "rgb(0, 0, 0)",
                fillRule: "nonzero",
                opacity: 1,
              }}
              transform=" translate(-2.67, 6.385)"
              d="M -223.3 56.27 L -229.53 56.27 Q -240.21 56.27 -240.21 50.58 L -240.21 50.58 L -240.21 -63.34 Q -240.21 -69.04 -229.53 -69.04 L -229.53 -69.04 L -223.3 -69.04 Q -212.62 -69.04 -212.62 -63.34 L -212.62 -63.34 L -212.62 -19.38 L -164.56 -19.38 L -164.56 -63.34 Q -164.56 -69.04 -153.88 -69.04 L -153.88 -69.04 L -147.65 -69.04 Q -136.97 -69.04 -136.97 -63.34 L -136.97 -63.34 L -136.97 50.58 Q -136.97 56.27 -147.65 56.27 L -147.65 56.27 L -153.88 56.27 Q -164.56 56.27 -164.56 50.58 L -164.56 50.58 L -164.56 4.12 L -212.62 4.12 L -212.62 50.58 Q -212.62 56.27 -223.3 56.27 L -223.3 56.27 Z M -58.3 57.34 L -58.3 57.34 Q -85.71 57.34 -100.57 40.88 Q -115.43 24.41 -115.43 -6.38 L -115.43 -6.38 Q -115.43 -37.18 -100.57 -53.64 Q -85.71 -70.11 -58.3 -70.11 L -58.3 -70.11 Q -30.71 -70.11 -16.02 -53.64 Q -1.34 -37.18 -1.34 -6.38 L -1.34 -6.38 Q -1.34 24.41 -16.02 40.88 Q -30.71 57.34 -58.3 57.34 Z M -58.3 34.02 L -58.3 34.02 Q -44.06 34.02 -36.76 23.61 Q -29.46 13.2 -29.46 -6.38 L -29.46 -6.38 Q -29.46 -25.96 -36.76 -36.29 Q -44.06 -46.61 -58.3 -46.61 L -58.3 -46.61 Q -72.54 -46.61 -79.92 -36.29 Q -87.31 -25.96 -87.31 -6.38 L -87.31 -6.38 Q -87.31 13.2 -79.92 23.61 Q -72.54 34.02 -58.3 34.02 Z M 84.28 26.19 L 79.12 26.19 Q 74.49 26.19 72 22.81 L 72 22.81 L 50.11 -16.35 Q 49.04 -18.13 48.06 -19.82 Q 47.08 -21.51 46.19 -23.29 L 46.19 -23.29 L 45.48 -23.12 Q 45.48 -20.98 45.48 -18.84 Q 45.48 -16.71 45.48 -14.39 L 45.48 -14.39 L 45.48 50.58 Q 45.48 56.27 34.8 56.27 L 34.8 56.27 L 29.64 56.27 Q 18.96 56.27 18.96 50.58 L 18.96 50.58 L 18.96 -63.34 Q 18.96 -69.04 29.64 -69.04 L 29.64 -69.04 L 39.07 -69.04 Q 42.99 -69.04 45.92 -67.97 Q 48.86 -66.9 50.28 -64.23 L 50.28 -64.23 L 79.83 -11.55 Q 80.19 -10.83 80.72 -10.12 Q 81.26 -9.41 81.61 -8.52 L 81.61 -8.52 Q 81.97 -9.41 82.41 -10.12 Q 82.86 -10.83 83.21 -11.55 L 83.21 -11.55 L 113.3 -64.23 Q 114.72 -66.9 117.66 -67.97 Q 120.59 -69.04 124.51 -69.04 L 124.51 -69.04 L 133.77 -69.04 Q 144.45 -69.04 144.45 -63.34 L 144.45 -63.34 L 144.45 50.58 Q 144.45 56.27 133.77 56.27 L 133.77 56.27 L 128.6 56.27 Q 117.92 56.27 117.92 50.58 L 117.92 50.58 L 117.92 -14.39 Q 117.92 -16.71 117.92 -18.84 Q 117.92 -20.98 117.92 -23.12 L 117.92 -23.12 L 117.21 -23.29 Q 116.32 -21.51 115.34 -19.82 Q 114.36 -18.13 113.3 -16.35 L 113.3 -16.35 L 91.4 22.81 Q 88.91 26.19 84.28 26.19 L 84.28 26.19 Z M 240.21 55.92 L 177.55 55.92 Q 170.43 55.92 170.43 48.8 L 170.43 48.8 L 170.43 -61.56 Q 170.43 -68.68 177.55 -68.68 L 177.55 -68.68 L 240.03 -68.68 Q 245.37 -68.68 245.37 -59.78 L 245.37 -59.78 L 245.37 -54.27 Q 245.37 -45.37 240.03 -45.37 L 240.03 -45.37 L 197.85 -45.37 L 197.85 -19.56 L 235.23 -19.56 Q 240.57 -19.56 240.57 -10.66 L 240.57 -10.66 L 240.57 -5.14 Q 240.57 3.76 235.23 3.76 L 235.23 3.76 L 197.85 3.76 L 197.85 32.6 L 240.21 32.6 Q 245.55 32.6 245.55 41.5 L 245.55 41.5 L 245.55 47.02 Q 245.55 55.92 240.21 55.92 L 240.21 55.92 Z"
              strokeLinecap="round"
            />
          </g>
        </g>
      </g>
    </svg>);
};

export default SVGComponent;
    