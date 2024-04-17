import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {

    const resorts = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const resort = resorts.find(resort => resort.Id === idInt);

    const { image, description } = resort;
    return (
        <div>
            <div className="card card-compact mx-auto">
                <figure><img className="rounded-lg" src={image} /></figure>
            </div>
            <div className="bg-gray-800 mt-5 mb-8">
            <button className="btn btn-outline text-white ml-40 mt-5 font-bold text-lg">Details</button>
            <p className="mt-4 px-40 text-white text-lg font-semibold">{description}</p>
            </div>
        </div>
    );
};

export default Details;