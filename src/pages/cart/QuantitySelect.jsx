import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateCartQuantity } from "../../app/cartSlice";

const QuantitySelect = ({ product }) => {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const newQuantity = Number(e.target.value);

        const data = {
            id: product.id,
            quantity: newQuantity,
        };

        dispatch(updateCartQuantity(data));
    };

    return (
        <select
            className="form-select"
            aria-label="product quantity select"
            value={product.quantity}
            onChange={handleChange}
        >
            {Array.from(Array(10).keys()).map((i) => (
                <option key={i} value={i + 1}>
                    {i + 1}
                </option>
            ))}
        </select>
    );
};

QuantitySelect.propTypes = {
    product: PropTypes.object,
};

export default QuantitySelect;
