import { ImLocation2 } from "react-icons/im";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Estate = ({resort}) => {

    const {segment_name, status, price, estate_title, location, image, facilities, Id} = resort
    return (
        <div>
            <div className="flex">
                <div className="card bg-base-100 border-2 ml-4 mb-3 relative">
                    <figure><img className="h-[500px]" src={image} alt="Shoes" /></figure>
                    <div className="flex justify-between right-5 left-5 top-5 absolute text-white text-lg font-semibold">
                        <p>{segment_name}</p>
                        <p>{status}</p>
                    </div>
                    <p className="absolute text-white top-96 left-3 text-lg font-semibold">{price}</p>
                    <div className="mt-5 p-7 space-y-6">
                        <h2 className="card-title">{estate_title}</h2>
                        <p className="flex items-center gap-3 text-xl"><ImLocation2></ImLocation2>{location}</p>
                        <p className="grid grid-cols-2 items-center space-y-2">
                            {
                                facilities.map((facility, idx) => <p key={idx}>{facility}</p>)
                            }
                        </p>
                        <div className="justify-start">
                            <Link to={`/details/${Id}`}>
                            <button className="btn bg-slate-700 text-white">View Property</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


Estate.propTypes = {
    resort: PropTypes.object
}


export default Estate;