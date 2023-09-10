import { useDispatch, useSelector } from "react-redux";
import { Icon, LatLngExpression, LeafletEventHandlerFnMap } from "leaflet";
import {Marker, Tooltip} from "react-leaflet";
import { updateActiveSegment } from "@/store/reducers/segmentList";
import { RootState } from "@/store/store";


export const SegmentBoundaryMarkers = ({startLatLng, endLatLng} : {startLatLng: LatLngExpression, endLatLng: LatLngExpression }) => {

    const dispatch = useDispatch();
    const activeSegmentId = useSelector((state:RootState) => state.segmentList.activeSegmentId);
    const icons = {
        "start": new Icon({
            iconUrl: "/static/start8.svg",
            iconRetinaUrl: "/static/start8.svg",
            iconSize: [40, 40],
        }),
        "end": new Icon({
            iconUrl: "/static/end2.svg",
            iconRetinaUrl: "/static/end2.svg",
            iconSize: [75, 75],
        }),
    };
    const eventHandlersStart = {
        click: () => {
            dispatch(updateActiveSegment(0));
        }    
    } as LeafletEventHandlerFnMap;
    const eventHandlersEnd = {
        click: () => {
            dispatch(updateActiveSegment(11));
        }    
    } as LeafletEventHandlerFnMap;

    const isHomeScreen = activeSegmentId === -1;

    return (
        <>
            <Marker position={startLatLng} icon={icons.start} eventHandlers={isHomeScreen ? eventHandlersStart : {}} bubblingMouseEvents={true}>
                {isHomeScreen ? <Tooltip direction="bottom">START: Holland</Tooltip> : null}
            </Marker>
            <Marker position={endLatLng} icon={icons.end} eventHandlers={isHomeScreen ? eventHandlersEnd: {}} bubblingMouseEvents={true}>
                {isHomeScreen ? <Tooltip direction="bottom">END: Southern Balkans</Tooltip> : null}
            </Marker>
        </>
    );
};
