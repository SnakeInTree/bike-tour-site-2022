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
    pois: Poi[];
    stats: SegmentStats;
}

export interface SegmentStats {
    totalDist: number;
    elevGain: number;
    elevLost: number;
}

export interface Poi {
    title: string;
    desc: string;
    date: string;
    locationTown: string;
    locationCountry: string;
    cloudflareId: string;
    position: LatLngExpression;
}