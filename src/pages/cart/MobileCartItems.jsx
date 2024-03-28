import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { cartSelector } from "../../app/cartSlice";
import { Link } from "react-router-dom";
import numeral from "numeral";
import QuantitySelect from "./QuantitySelect";
import ItemDelete from "./ItemDelete";

const MobileCartItems = ({ total }) => {
    const cart = useSelector(cartSelector);

    return (
        <section className="py-3 px-2 border rounded">
            {Object.values(cart).map((item) => (
                <div key={item.id}>
                    <div className="row">
                        <div className="col-4">
                            <Link
                                to={`/products/${item.id}`}
                                aria-label={item.title}
                            >
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
                                    <h5>{item.title}</h5>
                                </Link>

                                <p className="fs-5 text-danger mb-3">
                                    {numeral(item.price)
                                        .multiply(item.quantity)
                                        .format("$0,0.00")}
                                </p>

                                <div className="row align-items-center">
                                    <div className="col">
                                        <QuantitySelect product={item} />
                                    </div>

                                    <div className="col">
                                        <ItemDelete id={item.id} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />
                </div>
            ))}

            <div className="row">
                <div className="col">
                    <h5>Total</h5>
                </div>

                <div className="col text-end">
                    <h5>{numeral(total).format("$0,0.00")}</h5>
                </div>
            </div>

            <div className="mt-3">
                <button
                    type="button"
                    className="btn btn-primary w-100 disabled"
                    aria-disabled="true"
                >
                    Checkout
                </button>
            </div>
        </section>
    );
};

MobileCartItems.propTypes = {
    total: PropTypes.number,
};

export default MobileCartItems;
