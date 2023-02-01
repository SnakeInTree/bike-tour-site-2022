import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";

import PathSegment from "../PathSegment/PathSegment";

import { RootState } from "@/store/store";
import { Segment } from "@/store/models";
import config from "../../../config/default.json";

const Map = () => {    

    const segments:Segment[] = useSelector((state:RootState) => state.segmentList.segments);

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
            {segments.map((segment: Segment) => (
                <PathSegment 
                    key={segment.name} 
                    segmentData={segment}
                />
            ))}               
        </MapContainer>
    );
};

export default Map;