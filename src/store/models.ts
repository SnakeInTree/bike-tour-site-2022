import { LatLngBoundsExpression, LatLngExpression } from "leaflet";

export interface UIDisplay {
    showDrawer: boolean;
    showCarousel: boolean;
}

export interface SegmentList {
    activeSegmentId: number;
    hoverSegmentId: number;
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
    color: string;
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
    iconType: iconType;
}

type iconType = "monument" | "nature" | "animal" | "journal" | "mountain" | "camp";