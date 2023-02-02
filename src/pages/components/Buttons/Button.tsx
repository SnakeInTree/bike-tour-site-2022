import { useDispatch } from "react-redux";
import { IconContext, IconType } from "react-icons";
import { GiDutchBike, GiHamburgerMenu } from "react-icons/gi";
import { GrSettingsOption } from "react-icons/gr";

import { toggleDrawerDisplay } from "@/store/reducers/uiDisplay";

type handleClickFn = () => void;

const Button = ({Icon, iconSize, position, handleClick}: {Icon: IconType,iconSize: number, position: string, handleClick: handleClickFn }) => {
    const size = {size: `${iconSize}rem`};
    return (
        <IconContext.Provider value={size}>
            <div className={`fixed ${position} p-2 z-450 cursor-pointer rounded-xl transition-colors ease-in-out duration-300 hover:bg-red-100`}>
                <Icon onClick={handleClick}/>
            </div>
        </IconContext.Provider>  
    );
};

const HomeButton = () => {
  const position = "top-3 left-3";
  const iconSize = 4.5;
  const handleClick = () => null;
  return (
    <Button Icon={GiDutchBike} iconSize={iconSize} position={position} handleClick={handleClick} />
  );
};

const DrawerButton = () => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(toggleDrawerDisplay(true));
  
  const position = "top-6 right-6";
  const iconSize = 3;
  return (
    <Button Icon={GiHamburgerMenu} iconSize={iconSize} position={position} handleClick={handleClick} />
  );
};

const SettingsButton = () => {
  const position = "bottom-6 left-6";
  const iconSize = 3;
  const handleClick = () => null;
  return (
    <Button Icon={GrSettingsOption} iconSize={iconSize} position={position} handleClick={handleClick} />
  );
};

const Buttons = () => {
  return (
    <>
      <HomeButton />
      <DrawerButton />
      <SettingsButton />
    </>
  );
};

export default Buttons;