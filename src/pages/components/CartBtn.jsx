import { Link } from "react-router-dom";

const CartBtn = () => {
    return (
        <Link
            to="/cart"
            className="d-flex align-items-center text-decoration-none text-black"
        >
            <i className="fa-solid fa-cart-shopping fs-5"></i>
            <span className="badge text-bg-danger rounded-pill">0</span>
        </Link>
    );
};

export default CartBtn;
