import { LatLngBoundsExpression, LatLngExpression } from "leaflet";
import { IconType } from "react-icons";

export interface UIDisplay {
    showDrawer: boolean;
    showCarousel: boolean;
}

export interface SegmentList {
    activeSegmentId: number;
    activePoiId: number;
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
    location: string;
    displayTitle: string;
    headerImageIndex: number;
    icon: IconType;
    elevation: number[];
    dist: number[];
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
    location: string;
    cloudflareId: string;
    position: LatLngExpression;
    iconType: iconType;
}

//TO DO - refactor this to be named better
type iconType = "monument" | "nature" | "animal" | "journal" | "mountain" | "camp";

export interface InfoPanelSection {
    sectionId: number;
    title: string;
    Icon: IconType;
    content: SectionContent[]
}

export interface SectionContent {
    header: string;
    content: string;
}

export interface Statistic {
    name: string;
    value: string;
    icon: IconType;
}

export interface SegmentText {
    header: string;
    paragraphs: string[];
}