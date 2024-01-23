
import HashLoader
    from "react-spinners/HashLoader";

const Loading = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            <HashLoader

                size={150}
                color={"#36D7B7"}
                loading={true}
            />
        </div>
    );
};

export default Loading;
