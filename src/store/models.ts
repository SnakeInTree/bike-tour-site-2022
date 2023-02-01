import { LatLngBoundsExpression, LatLngExpression } from "leaflet";

export interface SegmentList {
    segments: Segment[]; 
    activeSegmentId: number;
}

export interface KDTree {
    p: number[];
    i: number[];
}

export interface Segment {
    name: string;
    desc: string;
    segmentId: number;
    gpx: [LatLngExpression];
    zoomCoords: LatLngBoundsExpression,
    kdTree: KDTree;
}