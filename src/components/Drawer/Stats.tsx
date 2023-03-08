import { IconContext } from "react-icons";
import { Statistic } from "@/store/models";

const StatsBlock = ({statList}: {statList: Statistic[]}) => {
    return (
        <IconContext.Provider value={{size: "3.5em", color: "#fff5f5"}}>
            <div className="w-full bg-statgreen flex flex-row justify-center items-center">
                <div className="w-10/12 inline-flex flex-wrap justify-evenly sm:py-4 md:py-4 lg:py-0">
                    {statList.map((stat: Statistic) => <Stat key={stat.name} statType={stat} />)}
                </div>
            </div>
        </IconContext.Provider>
    );
};

const Stat = ({statType}: any) => {
    return (
        <div className="nil:w-full nil:content-start md:content-evenly sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 flex flex-col flex-wrap font-mapheader mb-8">
            <span className="text-md font-semibold text-statgrey">{statType.name.toUpperCase()}</span>
            <div className="align-middle flex flex-row items-center">
                <statType.icon />
                <span className="ml-3 text-statblack font-extrabold text-2xl whitespace-nowrap">{statType.value}</span>
            </div>
        </div>
    );
};

export default StatsBlock;