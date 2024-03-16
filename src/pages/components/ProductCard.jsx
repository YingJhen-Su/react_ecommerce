import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../scss/components/productCard.scss";

const ProductCard = ({ product }) => {
    return (
        <Link
            to={`/products/${product.id.toString()}`}
            className="product-link h-100 d-block text-decoration-none"
            title={product.title}
        >
            <div className="card h-100 border-0 rounded-0 p-2">
                <img
                    src={product.image}
                    className="card-img-top rounded-0 object-fit-contain"
                    alt="product image"
                />

                <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title">
                        {product.title.length > 30
                            ? product.title.slice(0, 28) + "..."
                            : product.title}
                    </h5>
                    <p className="card-text fs-5">${product.price}</p>
                </div>
            </div>
        </Link>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object,
};

export default ProductCard;
