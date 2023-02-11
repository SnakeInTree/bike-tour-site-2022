import { MdLocationOn } from "react-icons/md";
import config from "../../../config/default.json";

const Chevron = () => {
    const after = "after:content-[''] after:border-y-16 after:border-l-16 after:border-l-transparent after:border-y-transparent after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0";
    const before = "before:content-[''] before:border-y-16 before:border-l-16 before:border-l-statblack before:border-y-transparent before:absolute before:-right-4 before:bottom-0 before:w-0 before:h-0";
    const text = "font-mapheader text-slate-50";
    const content = "EUROPE, VARIOUS COUNTRIES";
    return (
        <div className={`w-5/12 h-8 bg-statblack -translate-y-4 translate-x-6 flex flex-row justify-center items-center ${text} ${before} ${after}`}>
            <MdLocationOn />
            <span className="ml-4">{content}</span>
        </div>
    );
};

const HeadshotChevron = ({ headshotString }: { headshotString:string }) => {
    return (
        <div className="flex flex-col justify-center align-middle text-center w-1/4 bg-tan p-4">
            <span className="text-statblack font-bold border-b-4 border-b-contributeborder pb-1">CONTRIBUTED BY</span>
            <img className="max-w-xxs max-h-40 my-4" src={config.HTML_IMG_BUFFER_TAG + headshotString} />
            <span className="text-statblack font-bold text-xl">KEES VANDENBERG</span>
        </div>
    );
};

export {
    Chevron,
    HeadshotChevron
}; 