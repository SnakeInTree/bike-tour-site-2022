import { LeafletEventHandlerFnMap, Icon, divIcon, point } from "leaflet";
import { Marker, Tooltip} from "react-leaflet";
// @ts-expect-error Missing type definitions
import MarkerClusterGroup from "@changey/react-leaflet-markercluster";
import { Poi } from "@/store/models";
import { useDispatch } from "react-redux";
import { updateActivePoiId } from "@/store/reducers/segmentList";

const icons = {
    "animal": new Icon({
        iconUrl: "/static/paw.svg",
        iconRetinaUrl: "/static/paw.svg",
        iconSize: [70, 70],
        iconAnchor: [35, 70],
    }),
    "camp": new Icon({
        iconUrl: "/static/camp.svg",
        iconRetinaUrl: "/static/camp.svg",
        iconSize: [70, 70],
        iconAnchor: [35, 70],
    }),
    "monument": new Icon({
        iconUrl: "/static/castle.svg",
        iconRetinaUrl: "/static/castle.svg",
        iconSize: [70, 70],
        iconAnchor: [35, 70],
    }),
    "journal": new Icon({
        iconUrl: "/static/journal.svg",
        iconRetinaUrl: "/static/journal.svg",
        iconSize: [70, 70],
        iconAnchor: [35, 70],
    }),
    "mountain": new Icon({
        iconUrl: "/static/mtn.svg",
        iconRetinaUrl: "/static/mtn.svg",
        iconSize: [70, 70],
        iconAnchor: [35, 70],
    }),
    "nature": new Icon({
        iconUrl: "/static/tree.svg",
        iconRetinaUrl: "/static/tree.svg",
        iconSize: [70, 70],
        iconAnchor: [35, 70],
    })
};

const Pois = ({pois} : {pois: Poi[]}) => {
    return (
        <MarkerClusterGroup showCoverageOnHover={false} iconCreateFunction={createClusterCustomIcon}>
            {pois.map((poi: Poi, index: number) => <PoiMarker key={poi.title} poi={poi} index={index} />)}
        </MarkerClusterGroup>
    );
};

const PoiMarker = ({poi, index}: {poi:Poi, index:number}) => {
    
    const dispatch = useDispatch();
    const eventHandlers = {       
        click: () => {
            dispatch(updateActivePoiId(index));
            const element = document.getElementById("poi_chevron");
            if (element) element.scrollIntoView({ behavior: "smooth" });
        }
    } as LeafletEventHandlerFnMap;

    return (
        <Marker position={poi.position} icon={icons[poi.iconType]} eventHandlers={eventHandlers}>
            <Tooltip direction="bottom">{poi.title}</Tooltip>
        </Marker>
    );
};

const createClusterCustomIcon = (cluster: any) => {
    return divIcon({
        html: `<span>${cluster.getChildCount()}</span>`,
        className: "bg-[#A23D3B] bg-opacity-100 text-white font-bold !flex items-center justify-center rounded-3xl border-white border-4 border-opacity-50",
        iconSize: point(40, 40, true),
    });
};

export default Pois;