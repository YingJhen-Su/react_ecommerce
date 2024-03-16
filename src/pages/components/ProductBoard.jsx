import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

const ProductBoard = ({ products }) => {
    return (
        <div className="row row-cols-2 row-cols-md-3 row-cols-xl-5 g-3">
            {products.map((item) => (
                <div className="col" key={item.id}>
                    <ProductCard product={item} />
                </div>
            ))}
        </div>
    );
};

ProductBoard.propTypes = {
    products: PropTypes.array,
};

export default ProductBoard;
