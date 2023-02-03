import { useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineArrowRight } from "react-icons/ai";

import Link from "next/link";
import Animations from "./Animations";

const LandingPage = () => {
    
    const title = "BIKE TOURING ABROAD";
    const writeUp = "In the Summer of 2022, I bicycled over 4000 kilometers between Holland and Greece.\nIn the process, I visited 10 countries, climed over 30,000 meters of elevation, and ate countless baguettes.";

    const [effect, setEffect] = useState(false);
    const handleClick = () => setEffect(true);

    return (
        <>
            <div className="relative flex justify-center items-center w-screen h-screen overflow-hidden bg-green-200">
                <div className={"relative z-10 " + (effect ? "animate-landingPageBikeRotate" : "animate-landingPageBikeRide top-12 -left-80")}>
                    <Animations />
                </div>
            </div>
            
            <div 
                className={"fixed right-24 top-4 h-160 w-160 flex flex-col justify-center items-center z-30 font-sans bg-red-200 rounded-full " + (effect ? "animate-landingPageBubble" : null)}
            >
                <p className="text-5xl font-extrabold">{title}</p>
                <p className="text-2xl w-10/12 my-12 text-center ">{writeUp}</p>
                <Link 
                    href={"/map"} 
                    className="flex flex-row items-center justify-around text-2xl transition-colors ease-in-out duration-300 hover:bg-red-300"
                    onClick={handleClick}
                >
                    See the Map
                    <IconContext.Provider value={{size: "2rem"}}><AiOutlineArrowRight /></IconContext.Provider>
                </Link>
            </div>
        </>
    );
};

/**
 * position: relative;
    top:3rem;
    left: -20rem;
    animation: ride 1s linear infinite;
    z-index: 2;
 */

export default LandingPage;

