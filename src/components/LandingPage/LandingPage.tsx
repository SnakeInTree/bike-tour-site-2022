import { useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineArrowRight } from "react-icons/ai";

import Link from "next/link";
import Animations from "./Animations";

const LandingPage = () => {
    
    const loadingText = "Loading rivers and valleys...",
        titlePtOne = "BIKE",
        titlePtTwo = "TOURING ABROAD",
        writeUp = "In the Summer of 2022, I bicycled over 4000 kilometers between Holland and Greece.\nIn the process, I visited 10 countries, climed over 30,000 meters of elevation, and ate countless baguettes.";


    const [effect, setEffect] = useState(false);
    const handleClick = () => setEffect(true);

    return (
        <div className="relative w-screen h-screen overflow-hidden bg-green-200">
            <NamePlate />
            <div className="flex flex-col h-full justify-center items-center">
                <TitleSmall titlePtOne={titlePtOne} titlePtTwo={titlePtTwo} />
                <div className={"relative " + (effect ? "lg:animate-landingPageBikeRotate nil:animate-landingPageBikeRotateSmall" : "animate-landingPageBikeRide nil:-top-12 nil:left-4 lg:top-12 lg:-left-80")}>
                    <Animations />
                </div>
                <InfoSmall effect={effect} handleClick={handleClick} writeUp={writeUp} />
                {effect ? (<span className={"relative italic text-xl top-96 animate-landingPageLoading"}>{loadingText}</span>) : null}
            </div>
            <InfoBubble effect={effect} handleClick={handleClick} titlePtOne={titlePtOne} titlePtTwo={titlePtTwo} writeUp={writeUp} />
        </div>
    );
};

const TitleSmall = ({titlePtOne, titlePtTwo}: {titlePtOne: string, titlePtTwo: string}) => {
    
    return (
        <div className="md:block lg:hidden relative -top-36">
            <p className="text-5xl font-extrabold">{titlePtOne} {titlePtTwo}</p>
        </div>
    );
};

const InfoSmall = ({effect, handleClick, writeUp}:{effect:boolean, handleClick:any, writeUp: string}) => {
    return (
        <div className={"lg:hidden nil:flex absolute nil:ml-4 md:ml-0 nil:bottom-4 md:-bottom-4 w-3/4 text-xl font-playfair justify-around items-center " + (effect ? "animate-landingPageInfoSmall" : null)}>
            <p className="my-12 text-center w-2/3 nil:hidden md:block">{writeUp}</p>
            <Link 
                href={"/map"} 
                className="nil:h-32 nil:w-32 md:w-26 md:h-26 flex flex-row items-center justify-center rounded-full transition-colors ease-in-out duration-300 nil:border-4 md:border-2 hover:bg-red-100"
                onClick={handleClick}
            >
                Begin
                <IconContext.Provider value={{size: "1em"}}><AiOutlineArrowRight /></IconContext.Provider>
            </Link>
        </div>
    );
};

const InfoBubble = ({effect, handleClick, writeUp, titlePtOne, titlePtTwo}: {effect:boolean, handleClick: any, titlePtOne: string, titlePtTwo: string, writeUp:string}) => {
    
    return (
        <div 
            className={"fixed right-24 top-0 h-160 w-160 nil:hidden lg:flex flex-col justify-center items-center z-30 text-statblack drop-shadow-xl font-mapheader bg-red-200 rounded-full " + (effect ? "animate-landingPageBubble" : null)}
        >
            <p className="text-5xl font-extrabold mt-10">{titlePtOne}</p>
            <p className="text-5xl font-extrabold">{titlePtTwo}</p>
            <p className="text-2xl w-10/12 my-12 text-center font-playfair">{writeUp}</p>
            <Link 
                href={"/map"} 
                className="w-32 h-32 font-playfair text-xl flex flex-row items-center justify-center rounded-full transition-all ease-in-out duration-300 border-2 hover:drop-shadow-lg hover:bg-green-200"
                onClick={handleClick}
            >
                Begin
                <span className="mt-0.5 ml-4 transition-all ease-in-out duration-300">
                    <IconContext.Provider value={{size: "1em"}}><AiOutlineArrowRight /></IconContext.Provider>
                </span>
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

