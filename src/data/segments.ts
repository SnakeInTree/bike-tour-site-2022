import { LatLngExpression } from "leaflet";
import {
  GiWindmill, GiBelgium, GiFrance, GiCastle, GiForest, GiSwitzerland, 
  GiMountainRoad, GiItalia, GiSailboat, GiMountainClimbing, GiBeachBucket, GiSunset
} from "react-icons/gi";

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

import { Segment, SegmentStats } from "@/store/models";
 
const segmentData = [
   {
    name: "Holland",
    segmentId: 0,
    desc: "",
    gpx: holland.gpx as unknown as [LatLngExpression],
    kdTree: holland.kdTree,
    zoomCoords: [51.890036, 4.044651] as LatLngExpression,
    pois: poiList[0],
    stats: { elevGain: holland.elevGain, elevLost: holland.elevLost, totalDist: holland.totalDist} as SegmentStats,
    color: "#A52A2A",
    location: "South Holland / Zeeland, the Netherlands",
    displayTitle: "The Low Sky",
    headerImageIndex: 3,
    icon: GiWindmill,
    elevation: holland.elevation,
    dist: holland.dist,
    zoomLevel: 8
  },
  {
    name: "Belgium",
    segmentId: 1,
    gpx: belgium.gpx as unknown as [LatLngExpression],
    kdTree: belgium.kdTree,
    zoomCoords: [50.920917, 3.208951] as LatLngExpression,
    desc: "temp",
    pois: poiList[1],
    stats: { elevGain: belgium.elevGain, elevLost: belgium.elevLost, totalDist: belgium.totalDist} as SegmentStats,
    color: "#231C07",
    location: "Flanders, Belgium",
    displayTitle: "Biking by Belfries",
    headerImageIndex: 6,
    icon: GiBelgium,
    elevation: belgium.elevation,
    dist: belgium.dist,
    zoomLevel: 9
  },
  {
    name: "Normandie",
    segmentId: 2,
    gpx: normandy.gpx as unknown as [LatLngExpression],
    kdTree: normandy.kdTree,
    zoomCoords: [49.425703, 1.097649] as LatLngExpression,
    desc: "temp",
    pois: poiList[2],
    stats: { elevGain: normandy.elevGain, elevLost: normandy.elevLost, totalDist: normandy.totalDist} as SegmentStats,
    color: "#F78764",
    location: "Hautes-de-France / Normandy, France",
    displayTitle: "Pilgrimage",
    headerImageIndex: 10,
    icon: GiFrance,
    elevation: normandy.elevation,
    dist: normandy.dist,
    zoomLevel: 7
  },
  {
    name: "Pays de la Loire",
    segmentId: 3,
    gpx: loire.gpx as unknown as [LatLngExpression],
    kdTree: loire.kdTree,
    zoomCoords: [47.805678, -0.421150] as LatLngExpression,
    desc: "temp",
    pois: poiList[3],
    stats: { elevGain: loire.elevGain, elevLost: loire.elevLost, totalDist: loire.totalDist} as SegmentStats,
    color: "#7E8D85",
    location: "Pays de la Loire, France",
    displayTitle: "Valley of Kings",
    headerImageIndex: 6,
    icon: GiCastle,
    elevation: loire.elevation,
    dist: loire.dist,
    zoomLevel: 8
  },
  {
    name: "Alsace",
    segmentId: 4,
    gpx: alsace.gpx as unknown as [LatLngExpression],
    kdTree: alsace.kdTree,
    zoomCoords: [48.023417, 7.361685] as LatLngExpression,
    desc: "temp",
    pois: poiList[4],
    stats: { elevGain: alsace.elevGain, elevLost: alsace.elevLost, totalDist: alsace.totalDist} as SegmentStats,
    color: "#083D77",
    location: "Grand-Est / Franche-Comté, France",
    displayTitle: "Woods",
    headerImageIndex: 1,
    icon: GiForest,
    elevation: alsace.elevation,
    dist: alsace.dist,
    zoomLevel: 9
  },
  {
    name: "Bernese Lowlands",
    segmentId: 5,
    gpx: forest_switzerland.gpx as unknown as [LatLngExpression],
    kdTree: forest_switzerland.kdTree,
    zoomCoords: [46.956461, 7.406951] as LatLngExpression,
    desc: "temp",
    pois: poiList[5],
    stats: { elevGain: forest_switzerland.elevGain, elevLost: forest_switzerland.elevLost, totalDist: forest_switzerland.totalDist} as SegmentStats,
    color: "#EADAA2",
    location: "Jura / Bern, Switzerland",
    displayTitle: "Jura Explorer",
    headerImageIndex: 7,
    icon: GiSwitzerland,
    elevation: forest_switzerland.elevation,
    dist: forest_switzerland.dist,
    zoomLevel: 9
  },
  {
    name: "Alpine Switzerland",
    segmentId: 6,
    gpx: alpine_switzerland.gpx as unknown as [LatLngExpression],
    kdTree: alpine_switzerland.kdTree,
    zoomCoords: [46.356115, 8.609115] as LatLngExpression,
    desc: "temp",
    pois: poiList[6],
    stats: { elevGain: alpine_switzerland.elevGain, elevLost: alpine_switzerland.elevLost, totalDist: alpine_switzerland.totalDist} as SegmentStats,
    color: "#F78764",
    location: "Bernese Highlands / Ticino, Switzerland",
    displayTitle: "Alpine Crossing",
    headerImageIndex: 2,
    icon: GiMountainRoad,
    elevation: alpine_switzerland.elevation,
    dist: alpine_switzerland.dist,
    zoomLevel: 9
 },
  {
    name: "Lombardy",
    segmentId: 7,
    gpx: lombardy.gpx as unknown as [LatLngExpression],
    kdTree: lombardy.kdTree,
    zoomCoords: [45.538911, 10.213378] as LatLngExpression,
    desc: "temp",
    pois: poiList[7],
    stats: { elevGain: lombardy.elevGain, elevLost: lombardy.elevLost, totalDist: lombardy.totalDist} as SegmentStats,
    color: "#A52A2A",
    location: "Lombardy, Italy",
    displayTitle: "Dolomiti",
    headerImageIndex: 7,
    icon: GiItalia,
    elevation: lombardy.elevation,
    dist: lombardy.dist,
    zoomLevel: 8
  },
  {
    name: "Veneto",
    segmentId: 8,
    gpx: veneto.gpx as unknown as [LatLngExpression],
    kdTree: veneto.kdTree,
    zoomCoords: [45.455056, 12.332917] as LatLngExpression,
    desc: "temp",
    pois: poiList[8],
    stats: { elevGain: veneto.elevGain, elevLost: veneto.elevLost, totalDist: veneto.totalDist} as SegmentStats,
    color: "#071013",
    location: "Veneto, Italy",
    displayTitle: "The Most Serene",
    headerImageIndex: 0,
    icon: GiSailboat,
    elevation: veneto.elevation,
    dist: veneto.dist,
    zoomLevel: 8
  },
  {
    name: "Slovenia",
    segmentId: 9,
    gpx: slovenia.gpx as unknown as [LatLngExpression],
    kdTree: slovenia.kdTree,
    zoomCoords: [46.044934, 14.490116] as LatLngExpression,
    desc: "temp",
    pois: poiList[9],
    stats: { elevGain: slovenia.elevGain, elevLost: slovenia.elevLost, totalDist: slovenia.totalDist} as SegmentStats,
    color: "#00A676",
    location: "Primorska / Gorenjska, Slovenia",
    displayTitle: "A Realm Unto Itself",
    headerImageIndex: 8,
    icon: GiMountainClimbing,
    elevation: slovenia.elevation,
    dist: slovenia.dist,
    zoomLevel: 8
  },
  {
    name: "Croatia",
    segmentId: 10,
    gpx: croatia.gpx as unknown as [LatLngExpression],
    kdTree: croatia.kdTree,
    zoomCoords: [43.547849, 16.451630] as LatLngExpression,
    desc: "temp",
    pois: poiList[10],
    stats: { elevGain: croatia.elevGain, elevLost: croatia.elevLost, totalDist: croatia.totalDist} as SegmentStats,
    color: "#C5EBC3",
    location: "Kvarner / Dalmatia, Croatia",
    displayTitle: "Karstic Coast",
    headerImageIndex: 4,
    icon: GiBeachBucket,
    elevation: croatia.elevation,
    dist: croatia.dist,
    zoomLevel: 7
  },
  {
    name: "Southern Balkans",
    segmentId: 11,
    gpx: south_balkans.gpx as unknown as [LatLngExpression],
    kdTree: south_balkans.kdTree,
    zoomCoords: [41.325553, 19.778508] as LatLngExpression,
    desc: "temp",
    pois: poiList[11],
    stats: { elevGain: south_balkans.elevGain, elevLost: south_balkans.elevLost, totalDist: south_balkans.totalDist} as SegmentStats,
    color: "#FFD046",
    location: "Coastal Montenegro/Albania, Epirus, Greece",
    displayTitle: "Tour's End",
    headerImageIndex: 5,
    icon: GiSunset,
    elevation: south_balkans.elevation,
    dist: south_balkans.dist,
    zoomLevel: 7
  }
] as Segment[];

export default segmentData;