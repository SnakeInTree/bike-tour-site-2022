import { LatLngBoundsExpression, LatLngExpression } from "leaflet";
import { Segment, SegmentStats } from "@/store/models";

import holland from "./gpx/holland.json";
import belgium from "./gpx/belgium.json";
import normandy from "./gpx/normandy.json";
import loire from "./gpx/loire.json";
import alsace from "./gpx/alsace.json";  
import forest_switzerland from "./gpx/forest_switzerland.json";
import alpine_switzerland from "./gpx/alpine_switzerland.json";
import lombardy from "./gpx/lombardy.json";
import veneto from "./gpx/veneto.json";
import slovenia from "./gpx/slovenia.json";
import croatia from "./gpx/croatia.json";
import south_balkans from "./gpx/south_balkans.json";
import poiList from "./pois";
 
const segmentData = [
   {
    name: "Holland",
    segmentId: 0,
    desc: "",
    gpx: holland.gpx as unknown as [LatLngExpression],
    kdTree: holland.kdTree,
    zoomCoords: [[50.79, 1.26], [52.74, 8.28]] as LatLngBoundsExpression,
    pois: poiList[0],
    stats: { elevGain: holland.elevGain, elevLost: holland.elevLost, totalDist: holland.totalDist} as SegmentStats,
    color: "#A52A2A"
  },
  {
    name: "Belgium",
    segmentId: 1,
    gpx: belgium.gpx as unknown as [LatLngExpression],
    kdTree: belgium.kdTree,
    zoomCoords: [[51.39, 2.62], [50.72, 4.62]] as LatLngBoundsExpression,
    desc: "temp",
    pois: poiList[1],
    stats: { elevGain: belgium.elevGain, elevLost: belgium.elevLost, totalDist: belgium.totalDist} as SegmentStats,
    color: "#231C07"
  },
  {
    name: "Normandie",
    segmentId: 2,
    gpx: normandy.gpx as unknown as [LatLngExpression],
    kdTree: normandy.kdTree,
    zoomCoords: [[50.74, -2.46], [48.61, 4.95]] as LatLngBoundsExpression,
    desc: "temp",
    pois: poiList[2],
    stats: { elevGain: normandy.elevGain, elevLost: normandy.elevLost, totalDist: normandy.totalDist} as SegmentStats,
    color: "#F78764"
  },
  {
    name: "Pays de la Loire",
    segmentId: 3,
    gpx: loire.gpx as unknown as [LatLngExpression],
    kdTree: loire.kdTree,
    zoomCoords: [[49.45, -4.24], [47.01, 2.41]] as LatLngBoundsExpression,
    desc: "temp",
    pois: poiList[3],
    stats: { elevGain: loire.elevGain, elevLost: loire.elevLost, totalDist: loire.totalDist} as SegmentStats,
    color: "#7E8D85"
  },
  {
    name: "Alsace",
    segmentId: 4,
    gpx: alsace.gpx as unknown as [LatLngExpression],
    kdTree: alsace.kdTree,
    zoomCoords: [[47.00, 6.44], [49.43, 8.14]] as LatLngBoundsExpression,
    desc: "temp",
    pois: poiList[4],
    stats: { elevGain: alsace.elevGain, elevLost: alsace.elevLost, totalDist: alsace.totalDist} as SegmentStats,
    color: "#083D77"
  },
  {
    name: "Bernese Lowlands",
    segmentId: 5,
    gpx: forest_switzerland.gpx as unknown as [LatLngExpression],
    kdTree: forest_switzerland.kdTree,
    zoomCoords: [[47.59, 9.37], [46.45, 6.76]] as LatLngBoundsExpression,
    desc: "temp",
    pois: poiList[5],
    stats: { elevGain: forest_switzerland.elevGain, elevLost: forest_switzerland.elevLost, totalDist: forest_switzerland.totalDist} as SegmentStats,
    color: "#EADAA2"
  },
  {
    name: "Alpine Switzerland",
    segmentId: 6,
    gpx: alpine_switzerland.gpx as unknown as [LatLngExpression],
    kdTree: alpine_switzerland.kdTree,
    zoomCoords: [[46.55, 7.01], [46.17, 9.94]] as LatLngBoundsExpression,
    desc: "temp",
    pois: poiList[6],
    stats: { elevGain: alpine_switzerland.elevGain, elevLost: alpine_switzerland.elevLost, totalDist: alpine_switzerland.totalDist} as SegmentStats,
    color: "#F78764"
 },
  {
    name: "Lombardy",
    segmentId: 7,
    gpx: lombardy.gpx as unknown as [LatLngExpression],
    kdTree: lombardy.kdTree,
    zoomCoords: [[46.29, 7.98], [45.22, 11.66]] as LatLngBoundsExpression,
    desc: "temp",
    pois: poiList[7],
    stats: { elevGain: lombardy.elevGain, elevLost: lombardy.elevLost, totalDist: lombardy.totalDist} as SegmentStats,
    color: "#A52A2A"
  },
  {
    name: "Veneto",
    segmentId: 8,
    gpx: veneto.gpx as unknown as [LatLngExpression],
    kdTree: veneto.kdTree,
    zoomCoords: [[46.26, 10.50], [44.96, 14.39]] as LatLngBoundsExpression,
    desc: "temp",
    pois: poiList[8],
    stats: { elevGain: veneto.elevGain, elevLost: veneto.elevLost, totalDist: veneto.totalDist} as SegmentStats,
    color: "#071013"
  },
  {
    name: "Slovenia",
    segmentId: 9,
    gpx: slovenia.gpx as unknown as [LatLngExpression],
    kdTree: slovenia.kdTree,
    zoomCoords: [[46.51, 12.18], [45.21, 16.53]] as LatLngBoundsExpression,
    desc: "temp",
    pois: poiList[9],
    stats: { elevGain: slovenia.elevGain, elevLost: slovenia.elevLost, totalDist: slovenia.totalDist} as SegmentStats,
    color: "#00A676"
  },
  {
    name: "Croatia",
    segmentId: 10,
    gpx: croatia.gpx as unknown as [LatLngExpression],
    kdTree: croatia.kdTree,
    zoomCoords: [[45.76, 12.87], [43.24, 19.99]] as LatLngBoundsExpression,
    desc: "temp",
    pois: poiList[10],
    stats: { elevGain: croatia.elevGain, elevLost: croatia.elevLost, totalDist: croatia.totalDist} as SegmentStats,
    color: "#C5EBC3"
  },
  {
    name: "Montenegro and Albania",
    segmentId: 11,
    gpx: south_balkans.gpx as unknown as [LatLngExpression],
    kdTree: south_balkans.kdTree,
    zoomCoords: [[43.00, 17.14], [39.26, 25.86]] as LatLngBoundsExpression,
    desc: "temp",
    pois: poiList[11],
    stats: { elevGain: south_balkans.elevGain, elevLost: south_balkans.elevLost, totalDist: south_balkans.totalDist} as SegmentStats,
    color: "#FFD046"
  }
] as Segment[];

export default segmentData;