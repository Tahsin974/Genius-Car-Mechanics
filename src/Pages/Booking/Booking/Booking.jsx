import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Booking = () => {
  const [service, setService] = useState({});
  const { serviceID } = useParams();
  const baseURL = 'https://genius-car-mechanics-server-jet.vercel.app';
  const url = `${baseURL}/services/${serviceID}`;

  //   axios.get(url).then((res) => setService(res.data));

  useEffect(() => {
    axios.get(url).then((res) => setService(res.data));
  }, []);

  const { serviceName, img, price, description } = service;
  return (
    <div className="flex justify-center my-9 px-8">
      
      <div className="card lg:card-side md:card-side bg-white shadow-xl">
        <figure>
        <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
        <h2 className="card-title">{serviceName}</h2>
          <p>{description}</p>
          <h5 className="text-2xl font-semibold">Price: ${price}</h5>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
