import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);

    return (
        <div className="text-center mt-56 space-y-16">
            <h2 className="text-red-700 text-6xl font-extrabold">404</h2>
            {
                error.status === 404 && <div>
                    <h2 className="mb-10 text-red-700 text-4xl font-bold">Page Not Found</h2>
                    <Link to='/'><button className="btn bg-red-950 text-white text-3xl font-bold">Go Back</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;