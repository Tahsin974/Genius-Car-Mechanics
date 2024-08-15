import { useEffect } from "react";
import { useState } from "react";
import Service from "../Service/Service";
import './Services.css'

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    console.log(services)
    
    return (
        <div id="services">
            <h1 className="text-blue-600 text-4xl font-bold text-center">Our Services</h1>
            <div className="service-container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 m-3 justify-center">
            
            
            {
                services.map(service => <Service
                key={service.id}
                service ={service}
                ></Service>)
            }
            
        </div>
        </div>
        
    );
};

export default Services;