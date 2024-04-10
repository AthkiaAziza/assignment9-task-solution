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
            <p className="mt-4 mb-4 px-44 text-slate-700 text-lg font-semibold">{description}</p>
        </div>
    );
};

export default Details;