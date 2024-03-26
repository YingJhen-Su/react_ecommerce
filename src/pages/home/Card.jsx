import PropTypes from "prop-types";

const Card = ({ img, alt, text }) => {
    return (
        <div className="card w-100 h-100 rounded-0 border-0">
            <img
                src={img}
                className="card-img w-100 h-100 object-fit-cover rounded-0"
                alt={alt}
            />

            <div className="card-img-overlay rounded-0">
                <p className="card-title mb-0 fw-semibold">{text}</p>
            </div>
        </div>
    );
};

Card.propTypes = {
    img: PropTypes.string,
    alt: PropTypes.string,
    text: PropTypes.string,
};

export default Card;
