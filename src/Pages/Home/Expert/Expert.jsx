import PropTypes from 'prop-types'
const Expert = ({expert}) => {
    const {name,img,phone,expertize,description} = expert;
    return (
        <div className="card bg-white w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={img}
                    alt="Services"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl">{name}</h2>

                <p>Expertize in {expertize}</p>
                <p><small>Phone: {phone}</small></p>
                <p>{description}</p>
                
            </div>
        </div>
    );
};

export default Expert;
Expert.propTypes = {
    expert: PropTypes.node,
}