import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartSelector } from "../../app/cartSlice";

const CartBtn = () => {
    const cart = useSelector(cartSelector);

    return (
        <Link
            to="/cart"
            className="d-flex align-items-center text-decoration-none text-black"
            aria-label="shopping cart"
        >
            <i className="fa-solid fa-cart-shopping fs-5"></i>
            <span className="badge text-bg-danger rounded-pill">
                {Object.keys(cart).length}
                <span className="visually-hidden">
                    products quantity in shopping cart
                </span>
            </span>
        </Link>
    );
};

export default CartBtn;
