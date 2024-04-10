import { useEffect, useState } from "react";
import Estate from "./Estate";


const Estates = () => {
    const [resorts, setResorts] = useState([]);

    useEffect(() => {
        fetch('Estate.json')
        .then(res => res.json())
        .then(data => setResorts(data))

    }, [])
    return (
        <div className="mt-10">
            <p className="text-center mb-10 text-black text-5xl font-bold font-poppins">Estates</p>
            <div className="grid grid-cols-3 mr-2 space-y-3 mb-4">
            {
                resorts.map(resort => <Estate key={resort.id} resort={resort}></Estate>)
            }
            </div>
        </div>
    );
};

export default Estates;