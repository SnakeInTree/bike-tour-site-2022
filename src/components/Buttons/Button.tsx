import { IconContext } from "react-icons";
import { GiDutchBike } from "react-icons/gi";
import { useState } from "react";
import HomeButton from "./HomeButton";
import AboutButton from "./AboutButton";

const Buttons = () => {
  const [hover, setHover] = useState<boolean>(false);
  return (
      <IconContext.Provider value={{size: "4.5em"}}>
        <div className={"fixed flex flex-row justify-around top-3 left-3 w-20  p-2 z-450 rounded-xl transition-colors ease-in-out duration-300 align-center hover:animate-homeButtonMove"} 
          onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          <HomeButton menuHover={hover} />
          <AboutButton menuHover={hover} />
          <GiDutchBike className="self-center"/>
        </div>
      </IconContext.Provider>  
  );
};

export default Buttons;