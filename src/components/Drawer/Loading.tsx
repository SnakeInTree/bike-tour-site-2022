import { Oval } from "react-loader-spinner";

const Loader = () => {
    return (
        <div className="w-full h-full flex flex-row justify-center overflow-x-hidden overflow-y-scroll">
            <div className="h-full flex flex-col justify-center align-center ">
                <Oval 
                    height={80}
                    width={80}
                    color="#4fa94d"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#4fa94d"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                />
            </div>
        </div>
    );
};

export default Loader;