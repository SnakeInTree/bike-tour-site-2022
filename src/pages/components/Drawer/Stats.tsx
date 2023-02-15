import { IconContext } from "react-icons";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsSignpostSplit } from "react-icons/bs";
import { GiBread, GiPathDistance } from "react-icons/gi";
import { TbStairsUp, TbMountain } from "react-icons/tb";

const stats = {
    distance: {
        name: "DISTANCE",
        value: "4,000 KM",
        icon: <GiPathDistance />
    },
    days: {
        name: "DAYS",
        value: "90",
        icon: <AiOutlineClockCircle />
    },
    numCountries: {
        name: "# OF COUNTRIES",
        value: "10",
        icon: <BsSignpostSplit />
    },
    ascent: {
        name: "TOTAL ASCENT",
        value: "2,000 M",
        icon: <TbStairsUp />
    },
    highPt: {
        name: "HIGH POINT",
        value: "4,000 M",
        icon: <TbMountain />
    },
    baguette: {
        name: "# OF BAGUETTES",
        value: "INF.",
        icon: <GiBread />
    }
};

const StatsBlock = () => {
    return (
        <IconContext.Provider value={{size: "3.5rem", color: "#fff5f5"}}>
            <div className="w-full bg-statgreen flex flex-row justify-center items-center sm:translate-y-4 md:translate-y-4 lg:-translate-y-52">
                <div className="w-10/12 inline-flex flex-wrap justify-evenly">
                    <Stat statType={stats.distance} />
                    <Stat statType={stats.highPt} />
                    <Stat statType={stats.days} />
                    <Stat statType={stats.ascent} />
                    <Stat statType={stats.baguette} />
                    <Stat statType={stats.numCountries} />
                </div>
            </div>
        </IconContext.Provider>
    );
};

const Stat = ({statType}: any) => {
    return (
        <div className="nil:w-full nil:content-start md:content-evenly sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 flex flex-col flex-wrap font-mapheader mb-8">
            <span className="text-md font-semibold text-statgrey">{statType.name}</span>
            <div className="align-middle flex flex-row items-center">
                {statType.icon}
                <span className="ml-3 text-statblack font-extrabold text-2xl whitespace-nowrap">{statType.value}</span>
            </div>
        </div>
    );
};

export default StatsBlock;