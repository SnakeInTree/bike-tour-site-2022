import {useDispatch, useSelector} from "react-redux";
import {useQuery} from "react-query";
import { Oval } from "react-loader-spinner";
import { IconContext } from "react-icons";
import {AiOutlineLeft, AiOutlineRight, AiOutlineClose} from "react-icons/ai";


import { fetchImages } from "@/apiUtil/cloudflare";
import segmentData from "@/data/segments";
import { Poi } from "@/store/models";
import { RootState } from "@/store/store";
import { toggleCarouselDisplay } from "@/store/reducers/uiDisplay";
import { updateActivePoiId } from "@/store/reducers/segmentList";
import config from "@/config/default.json";

const CarouselContainer = () => {
    
    const activeSegmentId = useSelector((state:RootState) => state.segmentList.activeSegmentId);
    const pois = segmentData[activeSegmentId].pois;
    const cloudflareImageIDs = pois.map((poi: Poi) => poi.cloudflareId);

    const { isLoading, isError, data } = useQuery({
        queryKey: ["fetchImages", cloudflareImageIDs],
        queryFn: () => fetchImages(cloudflareImageIDs)
    });

    return (
        <div className="fixed top-0 left-0 w-full h-full z-450 flex flex-col items-center align-middle bg-black select-none">
            {(isLoading || !data) ? 
                (<Oval 
                    height={80}
                    width={80}
                    color="#4fa94d"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#4fa94d"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                />) :
                (<Carousel pois={pois} imageData={data} />)
            }
        </div>
    );
};

const Carousel = ({pois, imageData}: {pois: Poi[], imageData: string[]}) => {

    const dispatch = useDispatch();
    const activePoiId = useSelector((state:RootState) => state.segmentList.activePoiId);
    
    const handleClose = () => dispatch(toggleCarouselDisplay(false));
    const handleIncreasePoiIndex = () => (activePoiId === pois.length - 1) ? null : dispatch(updateActivePoiId(activePoiId + 1));
    const handleDecreasePoiIndex = () => (activePoiId === 0) ? null : dispatch(updateActivePoiId(activePoiId - 1));

    return (
        <>
            <IconContext.Provider value={{ size: "2rem"}}>
                <div className="absolute z-450 top-0 right-0 m-8 cursor-pointer text-white" onClick={handleClose}><AiOutlineClose /></div>
                <div className="absolute z-450 top-2/5 right-0 m-8 cursor-pointer text-white" onClick={handleIncreasePoiIndex} ><AiOutlineRight /></div>
                <div className="absolute z-450 top-2/5 left-0 m-8 cursor-pointer text-white" onClick={handleDecreasePoiIndex} ><AiOutlineLeft /></div>
            </IconContext.Provider>
            <img className="h-94/100 w-fit pointer-events-none" src={config.HTML_IMG_BUFFER_TAG + imageData[activePoiId]} />
            <div className="flex flex-row justify-evenly w-2/5 mt-4">
                {pois.map((poi: Poi, index: number) => <CarouselDot key={poi.title} index={index} activePoiId={activePoiId} /> )}
            </div>
        </>
    );
};

const CarouselDot = ({ index, activePoiId}: { index: number, activePoiId: number}) => {
    const dispatch = useDispatch();
    const bgColor = (index === activePoiId) ? "bg-blue-500" : "bg-gray-300";
    const handleClick = () => (index !== activePoiId) ? dispatch(updateActivePoiId(index)) : null;
    return (
        <div className={`w-3 h-3 rounded-full cursor-pointer ${bgColor}`} onClick={handleClick}></div>
    );
};

export default CarouselContainer;