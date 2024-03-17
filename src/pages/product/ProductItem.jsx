import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "../../scss/components/productItem.scss";

const ProductItem = () => {
    const productItem = useLoaderData();
    const [quantity, setQuantity] = useState("1");

    const handleChange = (e) => {
        const newQuantity = e.target.value;

        if (newQuantity) {
            const regex = /^[1-9][0-9]*$/;

            if (newQuantity.match(regex) === null) {
                return;
            }
        }

        setQuantity(newQuantity);
    };

    const increment = () => {
        if (quantity === "") {
            setQuantity("1");
        } else {
            setQuantity((prev) => (Number(prev) + 1).toString());
        }
    };

    const decrement = () => {
        if (quantity === "1") {
            return;
        }

        if (quantity === "") {
            setQuantity("1");
        } else {
            setQuantity((prev) => (Number(prev) - 1).toString());
        }
    };

    return (
        <div className="pt-3">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-5 col-xl-4">
                    <section className="p-2 shadow">
                        <img
                            src={productItem.image}
                            alt="product item"
                            className="item-img w-100 object-fit-contain"
                        />
                    </section>
                </div>

                <div className="col-12 col-md-6 col-lg-7 col-xl-8">
                    <section className="mt-3 mt-md-0 ms-md-3">
                        <p className="fs-5 text-uppercase text-secondary mb-1">
                            {productItem.category}
                        </p>
                        <h3 className="mb-3">{productItem.title}</h3>
                        <p className="fs-2 text-danger">${productItem.price}</p>

                        <div className="row row-cols-1 row-cols-md-2 g-2">
                            <div className="col">
                                <div className="input-group">
                                    <button
                                        className="btn btn-outline-secondary"
                                        type="button"
                                        onClick={decrement}
                                    >
                                        <i className="fa-solid fa-minus"></i>
                                    </button>

                                    <input
                                        type="text"
                                        className="item-quantity form-control text-center"
                                        aria-label="Example text with two button addons"
                                        value={quantity}
                                        onChange={handleChange}
                                    />

                                    <button
                                        className="btn btn-outline-secondary"
                                        type="button"
                                        onClick={increment}
                                    >
                                        <i className="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="col">
                                <button className="btn btn-primary w-100">
                                    Add To Cart
                                </button>
                            </div>
                        </div>

                        <hr className="mb-2" />
                        <p className="fs-5 text-secondary mb-1">Description</p>
                        <p>{productItem.description}</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
