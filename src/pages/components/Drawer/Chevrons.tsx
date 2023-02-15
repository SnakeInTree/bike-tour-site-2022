import config from "../../../config/default.json";

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
    HeadshotChevron
}; 