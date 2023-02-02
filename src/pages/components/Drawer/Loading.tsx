import {Oval} from "react-loader-spinner";

// const LoadingContainer = styled.div`
//     position: fixed;
//     top: 20%;
//     left: 45%;
//     opacity: 0.7;
//     z-index: 5000;
// `;

const Loading = () => {
    return (
        <div className="fixed h-full w-full flex flex-col justify-center align-middle">
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
    );
};

export default Loading;