import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";

import PathSegment from "../PathSegment/PathSegment";
import { Segment } from "@/store/models";
import config from "../../../config/default.json";
import segmentData from "@/data/segments";

const Map = () => {    

    //MapContainer needs an explicitly defined height
    const mapStyle = { height: "100vh" };
    return (
        <MapContainer
            center={config.MAP_SETTINGS.START_LAT_LNG as LatLngExpression}
            zoom={config.MAP_SETTINGS.START_ZOOM}
            maxZoom={config.MAP_SETTINGS.MAX_ZOOM}
            minZoom={config.MAP_SETTINGS.MIN_ZOOM}
            scrollWheelZoom={true}
            style={mapStyle}
            zoomControl={false}
        >  
            <TileLayer url={config.TILE_LAYER_URL} />     
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