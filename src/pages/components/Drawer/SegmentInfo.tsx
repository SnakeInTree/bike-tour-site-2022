import { useQuery } from "react-query";

import Loader from "./Loading";

import { fetchImages } from "@/apiUtil/cloudflare";
import segmentData from "@/data/segments";
import { Poi, Segment } from "@/store/models";
import config from "@/config/default.json";
import { MdLocationOn } from "react-icons/md";

const SegmentInfo = ({activeSegmentId}: {activeSegmentId: number}) => {
    
    const segment:Segment = segmentData[activeSegmentId];
    const cloudflareIds = segment.pois.map((poi:Poi) => poi.cloudflareId);

    const { isLoading, isError, data } = useQuery({
        queryKey: ["fetchImages", cloudflareIds],
        queryFn: () => fetchImages(cloudflareIds)
    });

    return (
        <>
            {(isLoading || !data) ? 
                <Loader />
                :
                <div>
                    <img className="relative" src={config.HTML_IMG_BUFFER_TAG + data[0]}/>
                    <Chevron location={segment.location} />
                    <Title text={segment.displayTitle} activeSegmentId={activeSegmentId} />
                </div>
            }   
        </>

    );        
};

const Chevron = ({location}: {location:string}) => {
    const before = "before:content-[''] before:border-y-16 before:border-l-16 before:border-l-statblack before:border-y-transparent before:absolute before:-right-4 before:bottom-0 before:w-0 before:h-0";
    const text = "font-mapheader text-slate-50";
    const width = location.length > 19 ? "7/12" : "5/12";
    
    return (
        <div className={`nil:hidden sm:hidden md:hidden -translate-y- lg:flex w-${width} h-8 bg-statblack -translate-y-4 translate-x-6 flex flex-row justify-center items-center ${text} ${before}`}>
            <MdLocationOn />
            <span className="ml-4">{location.toUpperCase()}</span>
        </div>
    );
};

//TO-DO: Refactor this plz
const styles = [
    "pl-8 -translate-y-36 text-7xl",
    "pl-10 -translate-y-36 text-6xl",
    "pl-8 -translate-y-36 text-7xl",
    "pl-8 -translate-y-36 text-7xl",
    "pl-8 -translate-y-72 text-7xl",
    "pl-8 -translate-y-40 text-7xl",
    "pl-8 -translate-y-36 text-7xl",
    "pl-8 -translate-y-36 text-7xl",
    "pl-8 -translate-y-36 text-7xl",
    "pl-8 -translate-y-36 text-6xl",
    "pl-8 -translate-y-44 text-7xl",
    "pl-8 -translate-y-36 text-7xl"
];

const Title = ({text, activeSegmentId}: {text: string, activeSegmentId:number}) => {    
    return (
        <div className={`nil:hidden sm:hidden md:hidden lg:flex flex-row font-mapheader font-medium text-center text-tan ${styles[activeSegmentId]}`}>
                {text.toUpperCase()}
        </div>
    );
};

export default SegmentInfo;