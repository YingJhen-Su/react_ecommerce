import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import numeral from "numeral";
import AddCartButtons from "./AddCartButtons";
import "../../scss/pages/productItem.scss";

const ProductItem = () => {
    const productItem = useLoaderData();
    const [alertShow, setAlertShow] = useState(false);
    const [limitShow, setLimitShow] = useState(false);

    // alert show
    const handleAlert = () => {
        setAlertShow(true);

        setTimeout(() => {
            setAlertShow(false);
        }, 1500);
    };

    // purchase limit show
    const handleLimit = () => {
        setLimitShow(true);
    };

    return (
        <div className="pt-3">
            <div className="row">
                <section className="col-12 col-md-6 col-lg-5 col-xl-4">
                    <div className="p-2 shadow">
                        <img
                            src={productItem.image}
                            alt="product image"
                            className="item-img w-100 object-fit-contain"
                        />
                    </div>
                </section>

                <section className="col-12 col-md-6 col-lg-7 col-xl-8">
                    <div className="mt-3 mt-md-0 ms-md-3 position-relative">
                        <p className="fs-5 text-uppercase text-secondary mb-1">
                            {productItem.category}
                        </p>
                        <h3 className="mb-3">{productItem.title}</h3>
                        <p className="fs-2 text-danger mb-2">
                            {numeral(productItem.price).format("$0,0.00")}
                        </p>

                        <p
                            className={`mb-2 text-secondary ${
                                limitShow ? "" : "invisible"
                            }`}
                            role="alert"
                        >
                            <i className="fa-solid fa-circle-info"></i> Purchase
                            Limit 10
                        </p>

                        <AddCartButtons
                            product={productItem}
                            handleAlert={handleAlert}
                            handleLimit={handleLimit}
                        />

                        <hr className="mb-2" />
                        <p className="fs-5 text-secondary mb-1">Description</p>
                        <p>{productItem.description}</p>

                        <span
                            className={`cart-alert alert alert-primary position-absolute mb-0 z-3 ${
                                alertShow ? "" : "d-none"
                            }`}
                            role="alert"
                        >
                            <i className="fa-regular fa-circle-check"></i>{" "}
                            Success
                        </span>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ProductItem;
