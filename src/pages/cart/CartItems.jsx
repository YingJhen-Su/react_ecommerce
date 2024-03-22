import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { cartSelector } from "../../app/cartSlice";
import { Link } from "react-router-dom";
import numeral from "numeral";
import QuantitySelect from "./QuantitySelect";
import ItemDelete from "./ItemDelete";

const CartItems = ({ total }) => {
    const cart = useSelector(cartSelector);

    return (
        <section className="py-3">
            <div className="row">
                <div className="col-6">Detail</div>
                <div className="col-2">Quantity</div>
                <div className="col-2">Total</div>
                <div className="col-2">Remove</div>
            </div>

            <hr className="my-2 border-2" />

            {Object.values(cart).map((item) => (
                <div key={item.id}>
                    <div className="row align-items-center">
                        <div className="col-6">
                            <div className="row align-items-center">
                                <div className="col-4">
                                    <Link to={`/products/${item.id}`}>
                                        <img
                                            src={item.image}
                                            alt="product image"
                                            className="cart-img w-100 object-fit-contain"
                                        />
                                    </Link>
                                </div>

                                <div className="col-8">
                                    <div className="ps-2">
                                        <Link
                                            to={`/products/${item.id}`}
                                            className="cart-link link-dark"
                                        >
                                            <h5 className="mb-3">
                                                {item.title}
                                            </h5>
                                        </Link>

                                        <p className="mb-0">
                                            {numeral(item.price).format(
                                                "$0,0.00"
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-2">
                            <QuantitySelect product={item} />
                        </div>

                        <div className="col-2">
                            <p className="fs-5 text-danger mb-0">
                                {numeral(item.price)
                                    .multiply(item.quantity)
                                    .format("$0,0.00")}
                            </p>
                        </div>

                        <div className="col-2">
                            <ItemDelete id={item.id} />
                        </div>
                    </div>

                    <hr className="my-2" />
                </div>
            ))}

            <div className="row align-items-center mt-3">
                <div className="col-8">
                    <h5 className="mb-0">Total Cost</h5>
                </div>

                <div className="col-2">
                    <h5 className="mb-0">{numeral(total).format("$0,0.00")}</h5>
                </div>

                <div className="col-2">
                    <button
                        type="button"
                        className="btn btn-primary w-100 disabled"
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </section>
    );
};

CartItems.propTypes = {
    total: PropTypes.number,
};

export default CartItems;
