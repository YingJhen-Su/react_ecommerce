import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AddCartButtons from "./AddCartButtons";
import "../../scss/components/productItem.scss";

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
                <div className="col-12 col-md-6 col-lg-5 col-xl-4">
                    <section className="p-2 shadow">
                        <img
                            src={productItem.image}
                            alt="product image"
                            className="item-img w-100 object-fit-contain"
                        />
                    </section>
                </div>

                <div className="col-12 col-md-6 col-lg-7 col-xl-8">
                    <section className="mt-3 mt-md-0 ms-md-3 position-relative">
                        <p className="fs-5 text-uppercase text-secondary mb-1">
                            {productItem.category}
                        </p>
                        <h3 className="mb-3">{productItem.title}</h3>
                        <p className="fs-2 text-danger mb-2">
                            ${productItem.price}
                        </p>

                        <p
                            className={`mb-2 text-secondary ${
                                limitShow ? "" : "invisible"
                            }`}
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
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
