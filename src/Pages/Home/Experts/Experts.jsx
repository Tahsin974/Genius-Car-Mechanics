import { useEffect, useState } from "react";
import Expert from "../Expert/Expert";

const Experts = () => {
    const [experts, setExperts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/trainers')
        .then(res => res.json())
        .then(data => setExperts(data))
    },[])
    return (
        <div id="experts">
            <h1 className="text-blue-600 text-4xl font-bold text-center">Our Experts</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 m-3 justify-center">

            {
                experts.map(expert => <Expert
                key={expert.id}
                expert ={expert}
                ></Expert>)
            }
            </div>
            
            
        </div>
    );
};

export default Experts;