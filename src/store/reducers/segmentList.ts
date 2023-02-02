import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { LatLngBoundsExpression, LatLngExpression } from "leaflet";

import { SegmentList, Segment } from "../models";

import holland from "../../data/gpx/holland.json";
import belgium from "../../data/gpx/belgium.json";
import normandy from "../../data/gpx/normandy.json";
import loire from "../../data/gpx/loire.json";
import alsace from "../../data/gpx/alsace.json";  
import forest_switzerland from "../../data/gpx/forest_switzerland.json";
import alpine_switzerland from "../../data/gpx/alpine_switzerland.json";
import lombardy from "../../data/gpx/lombardy.json";
import veneto from "../../data/gpx/veneto.json";
import slovenia from "../../data/gpx/slovenia.json";
import croatia from "../../data/gpx/croatia.json";
import south_balkans from "../../data/gpx/south_balkans.json";

 
const segmentData = [
   {
    name: "Holland",
    segmentId: 0,
    desc: "",
    gpx: holland.gpx as unknown as [LatLngExpression],
    kdTree: holland.kdTree,
    zoomCoords: [[50.79, 1.26], [52.74, 8.28]] as LatLngBoundsExpression,
  },
  {
    name: "Belgium",
    segmentId: 1,
    gpx: belgium.gpx as unknown as [LatLngExpression],
    kdTree: belgium.kdTree,
    zoomCoords: [[51.39, 2.62], [50.72, 4.62]] as LatLngBoundsExpression,
    desc: "temp"
  },
  {
    name: "Normandie",
    segmentId: 2,
    gpx: normandy.gpx as unknown as [LatLngExpression],
    kdTree: normandy.kdTree,
    zoomCoords: [[50.74, -2.46], [48.61, 4.95]] as LatLngBoundsExpression,
    desc: "temp"
  },
  {
    name: "Pays de la Loire",
    segmentId: 3,
    gpx: loire.gpx as unknown as [LatLngExpression],
    kdTree: loire.kdTree,
    zoomCoords: [[49.45, -4.24], [47.01, 2.41]] as LatLngBoundsExpression,
    desc: "temp"
  },
  {
    name: "Alsace",
    segmentId: 4,
    gpx: alsace.gpx as unknown as [LatLngExpression],
    kdTree: alsace.kdTree,
    zoomCoords: [[47.00, 6.44], [49.43, 8.14]] as LatLngBoundsExpression,
    desc: "temp"
  },
  {
    name: "Bernese Lowlands",
    segmentId: 5,
    gpx: forest_switzerland.gpx as unknown as [LatLngExpression],
    kdTree: forest_switzerland.kdTree,
    zoomCoords: [[47.59, 9.37], [46.45, 6.76]] as LatLngBoundsExpression,
    desc: "temp"
  },
  {
    name: "Alpine Switzerland",
    segmentId: 6,
    gpx: alpine_switzerland.gpx as unknown as [LatLngExpression],
    kdTree: alpine_switzerland.kdTree,
    zoomCoords: [[46.55, 7.01], [46.17, 9.94]] as LatLngBoundsExpression,
    desc: "temp"
 },
  {
    name: "Lombardy",
    segmentId: 7,
    gpx: lombardy.gpx as unknown as [LatLngExpression],
    kdTree: lombardy.kdTree,
    zoomCoords: [[46.29, 7.98], [45.22, 11.66]] as LatLngBoundsExpression,
    desc: "temp"
  },
  {
    name: "Veneto",
    segmentId: 8,
    gpx: veneto.gpx as unknown as [LatLngExpression],
    kdTree: veneto.kdTree,
    zoomCoords: [[46.26, 10.50], [44.96, 14.39]] as LatLngBoundsExpression,
    desc: "temp"
  },
  {
    name: "Slovenia",
    segmentId: 9,
    gpx: slovenia.gpx as unknown as [LatLngExpression],
    kdTree: slovenia.kdTree,
    zoomCoords: [[46.51, 12.18], [45.21, 16.53]] as LatLngBoundsExpression,
    desc: "temp"
  },
  {
    name: "Croatia",
    segmentId: 10,
    gpx: croatia.gpx as unknown as [LatLngExpression],
    kdTree: croatia.kdTree,
    zoomCoords: [[45.76, 12.87], [43.24, 19.99]] as LatLngBoundsExpression,
    desc: "temp"
  },
  {
    name: "Montenegro and Albania",
    segmentId: 11,
    gpx: south_balkans.gpx as unknown as [LatLngExpression],
    kdTree: south_balkans.kdTree,
    zoomCoords: [[43.00, 17.14], [39.26, 25.86]] as LatLngBoundsExpression,
    desc: "temp"
  }
 ] as Segment[];


const initialState : SegmentList = {
  segments: segmentData, 
  activeSegmentId: -1,
};

export const segmentSlice = createSlice({
  name: "segmentList",
  initialState,
  reducers: {
    updateActiveSegment: (state: SegmentList, action: PayloadAction<number>) => {
      return {...state, activeSegmentId: action.payload};
    },
  },
});

export const { updateActiveSegment } = segmentSlice.actions;
export default segmentSlice.reducer;