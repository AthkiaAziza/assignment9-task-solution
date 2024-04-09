import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <div className="mx-auto mt-6 font-poppins">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;