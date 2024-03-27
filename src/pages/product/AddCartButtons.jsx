import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, cartSelector } from "../../app/cartSlice";

const AddCartButtons = ({ product, handleAlert, handleLimit }) => {
    const [quantity, setQuantity] = useState("1");

    const cart = useSelector(cartSelector);
    const dispatch = useDispatch();

    // quantity input check
    const handleChange = (e) => {
        const newQuantity = e.target.value;

        if (newQuantity) {
            const regex = /^[1-9][0-9]*$/;

            if (newQuantity.match(regex) === null) {
                return;
            }

            // quantity limit
            if (Number(newQuantity) > 10) {
                setQuantity("10");
                handleLimit();
                return;
            }
        }

        setQuantity(newQuantity);
    };

    // quantity increment
    const increment = () => {
        // max quantity limit
        if (quantity === "10") {
            return;
        }

        if (quantity === "") {
            setQuantity("1");
        } else {
            setQuantity((prev) => (Number(prev) + 1).toString());
        }
    };

    // quantity decrement
    const decrement = () => {
        // min quantity limit
        if (quantity === "1") {
            return;
        }

        if (quantity === "") {
            setQuantity("1");
        } else {
            setQuantity((prev) => (Number(prev) - 1).toString());
        }
    };

    // add to cart
    const handleAddCart = () => {
        let qty;
        if (quantity === "") {
            qty = 1;
            setQuantity("1");
        } else {
            qty = Number(quantity);
        }

        // cart quantity limit
        if (product.id in cart && cart[product.id].quantity + qty > 10) {
            handleLimit();
            return;
        }

        const data = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: qty,
        };

        dispatch(addToCart(data));

        handleAlert();
    };

    return (
        <div className="row row-cols-1 row-cols-md-2 g-2">
            <div className="col">
                <div className="input-group">
                    <button
                        className={`btn btn-outline-secondary ${
                            quantity === "1" ? "disabled" : ""
                        }`}
                        type="button"
                        onClick={decrement}
                        aria-label="decrement"
                    >
                        <i className="fa-solid fa-minus"></i>
                    </button>

                    <input
                        type="text"
                        className="form-control text-center"
                        aria-label="buy quantity"
                        value={quantity}
                        onChange={handleChange}
                    />

                    <button
                        className={`btn btn-outline-secondary ${
                            quantity === "10" ? "disabled" : ""
                        }`}
                        type="button"
                        onClick={increment}
                        aria-label="increment"
                    >
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>

            <div className="col">
                <button
                    className="btn btn-primary w-100"
                    onClick={handleAddCart}
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

AddCartButtons.propTypes = {
    product: PropTypes.object,
    handleAlert: PropTypes.func,
    handleLimit: PropTypes.func,
};

export default AddCartButtons;
