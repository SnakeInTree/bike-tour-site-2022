import { LatLngBoundsExpression, LatLngExpression } from "leaflet";

export interface UIDisplay {
    showDrawer: boolean;
}

export interface SegmentList {
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