import { IconContext, IconType } from "react-icons";
import { GiDutchBike, GiHamburgerMenu } from "react-icons/gi";
import { GrSettingsOption } from "react-icons/gr";

const Button = ({Icon, iconSize, position}: {Icon: IconType,iconSize: number, position: string}) => {
    const size = {size: `${iconSize}rem`};
    return (
        <IconContext.Provider value={size}>
            <div className={`fixed ${position} p-2 z-450 cursor-pointer rounded-xl transition-colors ease-in-out duration-300 hover:bg-red-100`}>
                <Icon />
            </div>
        </IconContext.Provider>  
    );
};

export const HomeButton = () => {
  const position = "top-3 left-3";
  const iconSize = 4.5;
  return (
    <Button Icon={GiDutchBike} iconSize={iconSize} position={position} />
  );
};

export const DrawerButton = () => {
  const position = "top-6 right-6";
  const iconSize = 3;
  return (
    <Button Icon={GiHamburgerMenu} iconSize={iconSize} position={position} />
  );
};

export const SettingsButton = () => {
  const position = "bottom-6 left-6";
  const iconSize = 3;
  return (
    <Button Icon={GrSettingsOption} iconSize={iconSize} position={position} />
  );
};