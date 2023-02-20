import { Dispatch, SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";
import { IconContext } from "react-icons";
import {AiOutlineLeft, AiOutlineRight, AiOutlineFullscreen} from "react-icons/ai";
import { Poi } from "@/store/models";
import config from "@/config/default.json";
import { toggleCarouselDisplay } from "@/store/reducers/uiDisplay";

const PhotoGallery = ({poiList, images}: {poiList: Poi[], images: string[]}) => {

    const dispatch = useDispatch();
    const [activePoiId, setActivePoiId] = useState<number>(0);
    const handleIncreasePoiIndex = () => (activePoiId === poiList.length - 1) ? null : setActivePoiId(activePoiId + 1);
    const handleDecreasePoiIndex = () => (activePoiId === 0) ? null : setActivePoiId(activePoiId - 1);
    const handleCarouselTrigger = () => dispatch(toggleCarouselDisplay(true));

    return (
        <div className="relative w-12/12 h-102 flex flex-col items-center pt-10 pb-8 bg-titleGrey drop-shadow-lg sm:translate-y-24 md:translate-y-24 lg:-translate-y-24">
            <IconContext.Provider value={{ size: "2rem"}}>
                <div className="absolute z-450 top-1/3 right-0 m-8 cursor-pointer text-white" onClick={handleIncreasePoiIndex}><AiOutlineRight /></div>
                <div className="absolute z-450 top-1/3 left-0 m-8 cursor-pointer text-white" onClick={handleDecreasePoiIndex}><AiOutlineLeft /></div>
                <div className="absolute z-450 top-0 right-0 m-4 cursor-pointer text-white" onClick={handleCarouselTrigger}><AiOutlineFullscreen /></div>
            </IconContext.Provider>
            <TitleChevron />
            <img className="h-fit h-min-50 max-h-120 pointer-events-none" src={config.HTML_IMG_BUFFER_TAG + images[activePoiId]} />
            <p className="text-tan font-playfair text-lg p-8 h-20 w-10/12"><strong>{poiList[activePoiId].date}</strong> - {poiList[activePoiId].location} - {poiList[activePoiId].desc}</p>
            <div className="absolute bottom-4 h-4 flex flex-row justify-between w-3/5">
                {poiList.map((poi: Poi, index: number) => <CarouselDot key={poi.title} index={index} activePoiId={activePoiId} setActivePoiId={setActivePoiId} /> )}
            </div>
        </div>
    );
};

const CarouselDot = ({ index, activePoiId, setActivePoiId}: { index: number, activePoiId: number, setActivePoiId: Dispatch<SetStateAction<number>>}) => {
    const bgColor = (index === activePoiId) ? "bg-blue-500" : "bg-gray-300";
    const handleClick = () => (index !== activePoiId) ? setActivePoiId(index) : null;
    return (
        <div className={`w-3 h-3 rounded-full cursor-pointer ${bgColor}`} onClick={handleClick}></div>
    );
};

const TitleChevron = () => {
    const before = "before:content-[''] before:border-y-22 before:border-l-22 before:border-l-statblack before:border-y-transparent before:absolute before:-right-5.5 before:bottom-0 before:w-0 before:h-0";
    const after = "after:content-[''] after:border-y-22 after:border-r-22 after:border-r-statblack after:border-y-transparent after:absolute after:-left-5.5 after:bottom-0 after:w-0 after:h-0";
    const text = "font-mapheader text-slate-50"; 
    
    return (
        <div className={`absolute top-0 w-1/3 h-11 bg-statblack -translate-x-0.5 -translate-y-5.5 flex flex-row justify-center items-center drop-shadow-md ${text} ${before} ${after}`}>
            <span className="text-lg">POINTS OF INTEREST</span>
        </div>
    );
};

export default PhotoGallery;