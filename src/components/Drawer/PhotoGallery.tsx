import { useDispatch, useSelector } from "react-redux";
import { IconContext } from "react-icons";
import {AiOutlineLeft, AiOutlineRight, AiOutlineFullscreen} from "react-icons/ai";
import config from "@/config/default.json";
import { Poi } from "@/store/models";
import { RootState } from "@/store/store";
import { toggleCarouselDisplay } from "@/store/reducers/uiDisplay";
import { updateActivePoiId } from "@/store/reducers/segmentList";

const PhotoGallery = ({poiList, images}: {poiList: Poi[], images: string[]}) => {

    const dispatch = useDispatch();
    const activePoiId = useSelector((state:RootState) => state.segmentList.activePoiId);
    const handleIncreasePoiIndex = () => (activePoiId === poiList.length - 1) ? null : dispatch(updateActivePoiId(activePoiId + 1));
    const handleDecreasePoiIndex = () => (activePoiId === 0) ? null : dispatch(updateActivePoiId(activePoiId - 1));
    const handleCarouselTrigger = () => dispatch(toggleCarouselDisplay(true));

    return (
        <div className="w-full flex flex-col items-center bg-titleGrey drop-shadow-lg">
            <IconContext.Provider value={{ size: "2em"}}>
                <div className="absolute z-450 top-88 right-0 m-12 cursor-pointer text-white" onClick={handleIncreasePoiIndex}><AiOutlineRight /></div>
                <div className="absolute z-450 top-88 left-0 m-12 cursor-pointer text-white" onClick={handleDecreasePoiIndex}><AiOutlineLeft /></div>
                <div className="absolute z-450 top-0 right-0 m-16 cursor-pointer text-white" onClick={handleCarouselTrigger}><AiOutlineFullscreen /></div>
            </IconContext.Provider>
            <TitleChevron />
            <div className="p-8">
                <img src={config.HTML_IMG_BUFFER_TAG + images[activePoiId]} />
            </div>
            <ImgCaption poi={poiList[activePoiId]} />
            <div className="flex flex-row justify-between w-3/5 py-6">
                {poiList.map((poi: Poi, index: number) => <CarouselDot key={poi.title} index={index} activePoiId={activePoiId} /> )}
            </div>
        </div>
    );
};

const ImgCaption = ({poi}: {poi:Poi}) => {
    return (
        <div className="flex flex-col w-9/12 px-6 text-tan font-playfair overflow-y-scroll">
            <div className="flex flex-row space-around justify-between text-xl font-semibold pb-2">
                <span>{poi.title}</span>
                <span>{poi.location}</span>
            </div>
            <p>{poi.desc}</p>
        </div>
    );
};

const CarouselDot = ({ index, activePoiId}: { index: number, activePoiId: number,}) => {
    const dispatch = useDispatch();
    const bgColor = (index === activePoiId) ? "bg-blue-500" : "bg-gray-300";
    const handleClick = () => (index !== activePoiId) ? dispatch(updateActivePoiId(index)) : null;
    return (
        <div className={`w-3 h-3 rounded-full cursor-pointer ${bgColor}`} onClick={handleClick}></div>
    );
};

const TitleChevron = () => {
    const before = "before:content-[''] before:border-y-22 before:border-l-22 before:border-l-statblack before:border-y-transparent before:absolute before:-right-5.5 before:bottom-0 before:w-0 before:h-0";
    const after = "after:content-[''] after:border-y-22 after:border-r-22 after:border-r-statblack after:border-y-transparent after:absolute after:-left-5.5 after:bottom-0 after:w-0 after:h-0";
    const text = "font-mapheader text-slate-50"; 
    
    return (
        <div id="poi_chevron" className={`absolute top-0 w-1/3 h-11 bg-statblack -translate-y-5.5 flex flex-row justify-center items-center drop-shadow-md ${text} ${before} ${after}`}>
            <span className="text-lg">POINTS OF INTEREST</span>
        </div>
    );
};

export default PhotoGallery;