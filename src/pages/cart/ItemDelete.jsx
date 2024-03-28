import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteCartItem } from "../../app/cartSlice";

const ItemDelete = ({ id }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        const data = {
            id: id,
        };

        dispatch(deleteCartItem(data));
    };

    return (
        <button
            type="button"
            className="btn btn-link link-secondary link-opacity-75-hover"
            onClick={handleDelete}
        >
            Remove
        </button>
    );
};

ItemDelete.propTypes = {
    id: PropTypes.number,
};

export default ItemDelete;
