import { Link } from 'react-router-dom';
import img from '../../../images/404/404.jpg'
const ErrorPage = () => {
    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <img className='mb-5' src={img} alt="" />

                    <Link to="/home">
                    <button className="btn btn-primary">Go Back To Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;