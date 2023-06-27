import { useDispatch, useSelector } from "react-redux";
import {LatLngExpression} from "leaflet";
// import { AreaChart, ResponsiveContainer, Area, CartesianGrid, Tooltip, XAxis, YAxis, Label } from "recharts";
import { RootState } from "@/store/store";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Legend,
    Filler,
    Tooltip
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useEffect, useRef, useState } from "react";
import { updateDisplayHoverCircle, updateHoverCircleCoordinates } from "@/store/reducers/segmentList";

// const CustomTooltip = (props: any) => {
//     const { active, payload, label } = props;
//     return (
//     <div className=" flex flex-col justify-center items-center p-4 h-20 w-20 bg-white">
//         <span>This is content</span>
//     </div>
//     );
// };

// const ElevationGraph = ({gpx, distance, elevation}: {gpx: LatLngExpression[], distance: number[], elevation:number[]}) => {
//     const { displayHoverCircle, hoverCircleGpxIndex} = useSelector((state:RootState) => state.segmentList);

//     const data = distance.map((numKm, index) => {
//         return {
//             distance: numKm,
//             elevation: elevation[index]
//         }
//     });
//     const position = displayHoverCircle && hoverCircleGpxIndex && data[hoverCircleGpxIndex] ? 
//         {
//             x: hoverCircleGpxIndex,
//             y: data[hoverCircleGpxIndex].elevation
//         } : null;


//     return (
//     <div className="h-60">
//         <ResponsiveContainer width="98%" height="98%">
//             <AreaChart
//             width={500}
//             height={400}
//             data={data}
//             margin={{
//                 top: 10,
//                 right: 20,
//                 left: 20,
//                 bottom: 5,
//             }}
//             >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="distance" domain={[0, 'dataMax']} style={{fontSize: '12px'}}>
//                     <Label value="distance (km)" offset={-3} position="insideBottom" style={{ textAnchor: 'middle', fontFamily: 'arial, sans-serif', fontSize: '80%', fill: 'rgba(0, 0, 0, 0.87)' }} />
//                 </XAxis>
//                 <YAxis>
//                     <Label value="ele (m)" offset={0} angle={-90} position="insideLeft" style={{textAnchor: 'middle', fontFamily: 'arial, sans-serif', fontSize: '80%', fill: 'rgba(0, 0, 0, 0.87)' }} />
//                 </YAxis>
//                 {position ? <Tooltip content={<CustomTooltip />} wrapperStyle={{ visibility: "visible" }} active={true} position={position} /> : null}
//                 <Area type="monotone" dataKey="elevation" stroke="#8884d8" fill="#8884d8" />
//             </AreaChart>
//         </ResponsiveContainer>
//     </div>
    
//     );
// };  

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Legend,
    Filler,
    Tooltip
);

const ElevationGraph = ({gpx, distance, elevation}: {gpx: LatLngExpression[], distance: number[], elevation:number[]}) => {
    
    const {activeSegmentId, displayHoverCircle, hoverCircleGpxIndex} = useSelector((state:RootState) => state.segmentList);

    const dispatch = useDispatch();
    const chartRef = useRef<any>(null);
    const [hoverState, setHoverState] = useState(false); 

    const tooltipLine = {
        id: "tooltipLine",
        beforeDraw: (chart : any) => {
            if (chart.ctx && chart?.tooltip?._active?.length) {
                chart.ctx.save();
                const activePoint = chart.tooltip._active[0];
                dispatch(updateHoverCircleCoordinates(activePoint.index));
                dispatch(updateDisplayHoverCircle(true));
                drawTracker(chart, activePoint.element.x, activePoint.element.y);
            } 
        }
    };

    const drawTracker = (chart: any, x: number, y: number) => {
        const {ctx} = chart;
        ctx.beginPath();
        ctx.setLineDash([]);
        ctx.moveTo(x, chart.chartArea.top);
        ctx.lineTo(x, chart.chartArea.bottom);
        ctx.lineWidth = 1;
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.restore();

        ctx.beginPath();
        ctx.moveTo(chart.chartArea.left, y);
        ctx.lineTo(chart.chartArea.right, y);
        ctx.lineWidth = 1;
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.restore();
    };

    const data = {
        labels: distance,
        datasets: [
            {
                label: "Elevation (m)",
                data: elevation,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgb(255, 99, 132)",
                pointRadius: 0,
                fill: 'origin',
                spanGaps: true,
                lineTension: 0.4
            }
        ]
    };

    const options = {
        interaction: {
            intersect: false
        },
        animation: {
            duration: 0
        },
        maintainAspectRatio: false,
        plugins: {
            customCanvasBackgroundColor: {
                color: hoverState ? "rgb(222, 222, 222, 1)" : "rgb(255, 255, 255, 0.25)", 
            },
            legend: {
                display: false
            },
            tooltip: {
                enabled: true
            }
        },
        scales: {
            x: {
                grid: {display: false},
                title: {
                    text: "distance (km)",
                    display: true
                },
                ticks: {
                    stepSize: 10,
                    autoSkip: true
                },
                type: "linear" as any
            },
            y: {
                grid: {display: false},
                title: {
                    text: "ele (m)",
                    display: true
                },
                suggestedMin: 0,
            }
        },
        elements: {
            line: {
                tension: 0.9
            }
        }
    }; 

    useEffect(() => {
        if (displayHoverCircle && hoverCircleGpxIndex && chartRef?.current?.ctx) {            
            const activePoint = chartRef.current.getDatasetMeta(0)?.data[hoverCircleGpxIndex];
            if (activePoint && activePoint.x && activePoint.y) drawTracker(chartRef.current, activePoint.x, activePoint.y);
        }
    }, [displayHoverCircle, hoverCircleGpxIndex]);

    useEffect(() => {
        if (chartRef?.current) chartRef.current.update();
    }, [activeSegmentId]);

    const customBackgroundPlugin = {
        id: "customCanvasBackgroundColor",
        beforeDraw: (chart: any, args: any, options: any) => {
            const {ctx} = chart;
            ctx.save();
            ctx.globalCompositeOperation = "destination-over";
            ctx.fillStyle = options.color;
            ctx.fillRect(0, 0, chart.width, chart.height);
            ctx.restore();
        }
    };

    return (
        <div className="w-full">
            <Line ref={chartRef} options={options} data={data} plugins={[customBackgroundPlugin, tooltipLine]} />
        </div>
    );
};

export default ElevationGraph;