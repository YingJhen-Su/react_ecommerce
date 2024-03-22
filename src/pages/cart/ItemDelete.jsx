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
        <a
            href="#"
            className="link-secondary link-opacity-75-hover d-block"
            onClick={handleDelete}
        >
            Remove
        </a>
    );
};

ItemDelete.propTypes = {
    id: PropTypes.number,
};

export default ItemDelete;
