import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ProductBoard from "../components/ProductBoard";

const LatestBoard = ({ products }) => {
    return (
        <section className="latest">
            <h1 className="mb-4 text-center logo">LATEST</h1>
            <ProductBoard products={products} />
            <div className="row justify-content-center">
                <div className="col col-md-6 col-lg-4">
                    <Link
                        to="/products"
                        className="btn btn-outline-secondary d-block mt-4 py-2"
                    >
                        See More
                    </Link>
                </div>
            </div>
        </section>
    );
};

LatestBoard.propTypes = {
    products: PropTypes.array,
};

export default LatestBoard;
