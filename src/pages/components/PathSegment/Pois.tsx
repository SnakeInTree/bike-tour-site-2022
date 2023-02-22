import { Icon } from "leaflet";
import { Marker } from "react-leaflet";
// @ts-expect-error Missing type definitions
import MarkerClusterGroup from "@changey/react-leaflet-markercluster";
import { Poi } from "@/store/models";

const icons = {
    "animal": new Icon({
        iconUrl: "/static/paw.svg",
        iconRetinaUrl: "/static/paw.png",
        iconSize: [70, 70],
        iconAnchor: [35, 70],
    }),
    "camp": new Icon({
        iconUrl: "/static/camp.svg",
        iconRetinaUrl: "/static/camp.png",
        iconSize: [70, 70],
        iconAnchor: [35, 70],
    }),
    "monument": new Icon({
        iconUrl: "/static/castle.svg",
        iconRetinaUrl: "/static/castle.png",
        iconSize: [70, 70],
        iconAnchor: [35, 70],
    }),
    "journal": new Icon({
        iconUrl: "/static/journal.svg",
        iconRetinaUrl: "/static/journal.png",
        iconSize: [70, 70],
        iconAnchor: [35, 70],
    }),
    "mountain": new Icon({
        iconUrl: "/static/mountain.svg",
        iconRetinaUrl: "/static/mountain.png",
        iconSize: [70, 70],
        iconAnchor: [35, 70],
    }),
    "nature": new Icon({
        iconUrl: "/static/tree.svg",
        iconRetinaUrl: "/static/tree.png",
        iconSize: [70, 70],
        iconAnchor: [35, 70],
    })
};

const Pois = ({pois} : {pois: Poi[]}) => {
    return (
        <MarkerClusterGroup showCoverageOnHover={false}>
            {pois.map((poi: Poi) => <Marker key={poi.title} position={poi.position} icon={icons[poi.iconType]} />)}
        </MarkerClusterGroup>
    );
};

export default Pois;