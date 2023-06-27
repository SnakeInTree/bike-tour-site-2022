import { useState } from "react";
import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { useSelector } from "react-redux";

import PathSegment from "../PathSegment/PathSegment";
import { SegmentBoundaryMarkers } from "../common/Icons";

import config from "@/config/default.json";
import { RootState } from "@/store/store";
import { Segment } from "@/store/models";
import segmentData from "@/data/segments";
import { updateActiveSegment } from "@/store/reducers/segmentList";

//Handle all map movement (zoom, fitToBounds etc)
const MapController = ({ defaultMapZoom }:{ defaultMapZoom: number }) => {
    const map = useMap();
    const activeSegmentId = useSelector((state:RootState) => state.segmentList.activeSegmentId);
    const [prevActiveSegmentId, setPrevActiveSegmentId] = useState<number>(activeSegmentId);

    if (prevActiveSegmentId !== activeSegmentId) {
        setPrevActiveSegmentId(activeSegmentId);
        if (activeSegmentId === -1) map.flyTo(config.MAP_SETTINGS.MAP_CENTER_LAT_LNG as LatLngExpression, defaultMapZoom);
    }
    return (
        <span className="hidden"></span>
    );
}
const Map = () => {    

    const mapStyle = { height: "100vh", width: "41.666666%" }; //MapContainer needs an explicitly defined height
    const defaultMapZoom = (window && window.innerWidth > 1300) ? 5 : 4;
    const activeSegmentId = useSelector((state:RootState) => state.segmentList.activeSegmentId);
    
    return (
        <MapContainer
            center={config.MAP_SETTINGS.MAP_CENTER_LAT_LNG as LatLngExpression}
            zoom={defaultMapZoom}
            maxZoom={config.MAP_SETTINGS.MAX_ZOOM}
            scrollWheelZoom={true}
            style={mapStyle}
            zoomControl={false}
        >  
            <TileLayer url={config.TILE_LAYER_URL} />     
            <MapController defaultMapZoom={defaultMapZoom}/>
            {activeSegmentId === -1 ? <SegmentBoundaryMarkers startLatLng={config.MAP_SETTINGS.START_MARKER_LAT_LNG as LatLngExpression} endLatLng={config.MAP_SETTINGS.END_MARKER_LAT_LNG as LatLngExpression} /> : null}
            {segmentData.map((segment: Segment) => (
                <PathSegment 
                    key={segment.name} 
                    segment={segment}
                />
            ))}               
        </MapContainer>
    );
};

export default Map;