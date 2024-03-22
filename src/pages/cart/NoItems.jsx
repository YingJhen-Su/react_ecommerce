import { Link } from "react-router-dom";

const NoItems = () => {
    return (
        <section className="pt-3">
            <p className="fs-5 mb-2">Your shopping cart is empty.</p>
            <Link
                to="/products"
                className="link-danger link-opacity-75-hover fs-5"
            >
                Start shopping <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
        </section>
    );
};

export default NoItems;
