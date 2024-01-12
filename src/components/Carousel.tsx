import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {useQuery} from "react-query";
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";
import { IconContext } from "react-icons";
import {AiOutlineLeft, AiOutlineRight, AiOutlineClose} from "react-icons/ai";

import framerVariants from "./common/framerVariants";
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

    const resp = useQuery({
        queryKey: ["fetchImages", cloudflareImageIDs],
        queryFn: () => fetchImages(cloudflareImageIDs)
    });

    return (
        <div className="fixed top-0 left-0 w-full h-full z-450 flex flex-col items-center align-middle bg-black select-none">
            {(resp.isLoading || !resp.data) ? 
                null :
                (<Carousel pois={pois} imageData={resp.data} />)
            }
        </div>
    );
};

const Carousel = ({pois, imageData}: {pois: Poi[], imageData: string[]}) => {

    const dispatch = useDispatch();
    const activePoiId = useSelector((state:RootState) => state.segmentList.activePoiId);    
    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, imageData.length, page);

    const handleClose = () => dispatch(toggleCarouselDisplay(false));
    const handleIncreasePoiIndex = () => {
        if (activePoiId !== pois.length - 1) {
            dispatch(updateActivePoiId(activePoiId + 1));
            setPage([page + 1, 1]);
        }
    };
    const handleDecreasePoiIndex = () => {
        if (activePoiId !== 0) {
            dispatch(updateActivePoiId(activePoiId - 1));
            setPage([page - 1, -1]);
        }
    };

    const handlePoiClick = (poiIndex: number) => {
        if (poiIndex !== activePoiId){
            dispatch(updateActivePoiId(poiIndex));
            setPage([poiIndex, poiIndex < activePoiId ? -1 : 1]);
        } 
    };

    return (
        <div className="relative flex justify-center align-center w-full h-full overflow-hidden">
            <IconContext.Provider value={{ size: "1.5em"}}>
                <div className="absolute z-450 top-0 right-0 m-8 cursor-pointer text-white" onClick={handleClose}><AiOutlineClose /></div>
                <div className="absolute z-450 top-2/5 right-0 m-8 cursor-pointer text-white" onClick={handleIncreasePoiIndex} ><AiOutlineRight /></div>
                <div className="absolute z-450 top-2/5 left-0 m-8 cursor-pointer text-white" onClick={handleDecreasePoiIndex} ><AiOutlineLeft /></div>
            </IconContext.Provider>
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={page}
                    src={config.HTML_IMG_BUFFER_TAG + imageData[imageIndex]}
                    custom={direction}
                    variants={framerVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    className="absolute pb-4"
                />
            </AnimatePresence>
            <div className="absolute flex flex-row justify-evenly w-2/5 bottom-11">
                {pois.map((poi: Poi, index: number) => <CarouselDot key={poi.title} index={index} activePoiId={activePoiId} handlePoiClick={handlePoiClick} /> )}
            </div>
        </div>
    );
};

const CarouselDot = ({ index, activePoiId, handlePoiClick}: { index: number, activePoiId: number, handlePoiClick: (val:number) => void}) => {
    const bgColor = (index === activePoiId) ? "bg-blue-500" : "bg-gray-300";
    return (
        <div className={`w-3 h-3 rounded-full cursor-pointer ${bgColor}`} onClick={() => handlePoiClick(index)}></div>
    );
};

export default CarouselContainer;