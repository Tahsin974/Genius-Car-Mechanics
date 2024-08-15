import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Service = ({ service }) => {
    const {  _id, serviceName, time, price, description, img } = service;
    return (

        <div className="card bg-white  shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={img}
                    alt="Services"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl">{serviceName}</h2>
                <p>Time: {time}</p>
                <p>{description}</p>
                <h5 className='text-2xl font-semibold'>Price: ${price}</h5>
                <div className="card-actions mt-2">
                    <Link to={`/booking/${_id}`}>
                    <button className="btn btn-primary">Book {serviceName.toLowerCase()}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;

Service.propTypes = {
    service: PropTypes.node,
}