import { useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineArrowRight } from "react-icons/ai";

import Link from "next/link";
import Animations from "./Animations";

const LandingPage = () => {
    
    const loadingText = "Loading rivers and valleys...";

    const [effect, setEffect] = useState(false);
    const handleClick = () => setEffect(true);

    return (
        <div className="relative w-screen h-screen overflow-x-hidden bg-green-200">
            <NamePlate />
            <div className="flex flex-col h-full justify-center items-center">
                <TitleSmall />
                <div className={"relative " + (effect ? "animate-landingPageBikeRotate" : "animate-landingPageBikeRide nil:-top-12 nil:left-4 lg:top-12 lg:-left-80")}>
                    <Animations />
                </div>
                <InfoSmall handleClick={handleClick} />
                {effect ? (<span className={"relative italic text-xl top-96 animate-landingPageLoading"}>{loadingText}</span>) : null}
            </div>
            <InfoBubble effect={effect} handleClick={handleClick} />
        </div>
    );
};

const TitleSmall = () => {
    
    const titlePtOne = "BIKE",
    titlePtTwo = "TOURING ABROAD";

    return (
        <div className="md:block lg:hidden relative -top-36">
            <p className="text-5xl font-extrabold">{titlePtOne} {titlePtTwo}</p>
        </div>
    );
};

const InfoSmall = ({handleClick}:{handleClick:any}) => {
    const writeUp = "In the Summer of 2022, I bicycled over 4000 kilometers between Holland and Greece.\nIn the process, I visited 10 countries, climed over 30,000 meters of elevation, and ate countless baguettes.";
    return (
        <div className="lg:hidden nil:flex absolute nil:ml-4 md:ml-0 nil:bottom-4 md:-bottom-4 w-3/4 text-xl font-playfair justify-around items-center">
            <p className="my-12 text-center w-2/3 nil:hidden md:block">{writeUp}</p>
            <Link 
                href={"/"} 
                className="nil:h-32 nil:w-32 md:w-26 md:h-26 flex flex-row items-center justify-center rounded-full transition-colors ease-in-out duration-300 nil:border-4 md:border-2 hover:bg-red-100"
                onClick={handleClick}
            >
                Begin
                <IconContext.Provider value={{size: "1em"}}><AiOutlineArrowRight /></IconContext.Provider>
            </Link>
        </div>
    );
};

const InfoBubble = ({effect, handleClick}: {effect:boolean, handleClick: any}) => {
    
    const writeUp = "In the Summer of 2022, I bicycled over 4000 kilometers between Holland and Greece.\nIn the process, I visited 10 countries, climed over 30,000 meters of elevation, and ate countless baguettes.",
        titlePtOne = "BIKE",
        titlePtTwo = "TOURING ABROAD";
    
    return (
        <div 
            className={"fixed right-24 top-4 h-160 w-160 nil:hidden lg:flex flex-col justify-center items-center z-30 text-statblack drop-shadow-xl font-mapheader bg-red-200 rounded-full " + (effect ? "animate-landingPageBubble" : null)}
        >
            <p className="text-5xl font-extrabold">{titlePtOne}</p>
            <p className="text-5xl font-extrabold">{titlePtTwo}</p>
            <p className="text-2xl w-10/12 my-12 text-center font-playfair">{writeUp}</p>
            <Link 
                href={"/"} 
                className="flex flex-row items-center justify-around text-2xl text-tan bg-statblack p-4 rounded-2xl font-playfair font-bold drop-shadow-xl transition-colors ease-in-out duration-300 hover:bg-gray-800"
                onClick={handleClick}
            >
                Begin
                <IconContext.Provider value={{size: "1em"}}><AiOutlineArrowRight /></IconContext.Provider>
            </Link>
        </div>
    );
};

const NamePlate = () => {
    
    const name = "KEES VANDENBERG";
    return (
        <div 
            className="
                absolute text-3xl font-extrabold flex flex-row bg-red-200 justify-around drop-shadow-lg
                lg:left-0 lg:top-0 lg:pt-4 lg:pb-5 lg:pl-4 lg:pr-12 lg:rounded-br-full lg:w-112
                nil: w-full nil:py-8 
            ">
            {name.split("").map((char: string, index: number) => (<p key={index}>{char}</p>))}
        </div>
    );
};

export default LandingPage;

