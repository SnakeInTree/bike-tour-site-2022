import Animations from "../LandingPage/Animations";

const BikeLoadingAnimation = () => {
    return (
        <div className="flex flex-col h-full justify-center items-center">
            <div className={"relative animate-landingPageBikeRide -top-12 left-4 "}>
                <Animations />
            </div>
            <div className="relative top-20 text-xl font-playfair italic left-4">
                Loading...
            </div>
        </div>
    );
};

export default BikeLoadingAnimation;