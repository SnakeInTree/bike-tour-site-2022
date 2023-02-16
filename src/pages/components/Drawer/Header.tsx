import {MdLocationOn} from "react-icons/md";

const locationString = "EUROPE, VARIOUS COUNTRIES";

const Chevron = () => {
    const before = "before:content-[''] before:border-y-16 before:border-l-16 before:border-l-statblack before:border-y-transparent before:absolute before:-right-4 before:bottom-0 before:w-0 before:h-0";
    const text = "font-mapheader text-slate-50";
    return (
        <div className={`nil:hidden sm:hidden md:hidden lg:flex w-5/12 h-8 bg-statblack -translate-y-4 translate-x-6 flex flex-row justify-center items-center ${text} ${before}`}>
            <MdLocationOn />
            <span className="ml-4">{locationString}</span>
        </div>
    );
};

const Title = () => {
    return (
        <div className="nil:hidden sm:hidden md:hidden lg:flex flex-col text-7xl font-mapheader font-medium text-center text-tan -translate-y-72 pl-80">
            <span>BIKE</span>
            <span>TOUR</span>
            <span>2022</span>
        </div>
    );
};

const CondensedHeader = () => {
    return (
        <div className="sm:flex md:flex lg:hidden xl:hidden 2xl:hidden p-8 justify-evenly flex-col w-full bg-titleGrey text-tan font-mapheader">
            <div className="flex flex-row items-center mb-0.5">
                <MdLocationOn />
                <span>{locationString}</span>
            </div>
            <p className="text-5xl font-semibold">BIKE TOUR 2022</p>
        </div>
    );
};

const Header = () => {
    return (
        <>
            <Chevron />
            <Title />
            <CondensedHeader />
        </>
    );
};

export default Header;