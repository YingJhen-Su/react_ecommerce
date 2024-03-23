import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductBoard from "../components/ProductBoard";

const LatestBoard = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [fetchError, setFetchError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // latest 5 products
                const res = await fetch(
                    "https://fakestoreapi.com/products?limit=5"
                );

                if (!res.ok) {
                    throw Error("Could not fetch data.");
                }

                const data = await res.json();

                setProducts(data);
                setFetchError(null);
            } catch (err) {
                setFetchError(`Error: ${err.message}`);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="latest">
            <h1 className="mb-4 text-center logo">LATEST</h1>

            {isLoading && (
                <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}

            {!isLoading && fetchError && (
                <p className="text-center">{fetchError}</p>
            )}

            {!isLoading && !fetchError && (
                <>
                    <ProductBoard products={products} />
                    <div className="row justify-content-center">
                        <div className="col col-md-6 col-lg-4">
                            <Link
                                to="/products"
                                className="btn btn-outline-secondary d-block mt-4 py-2"
                            >
                                See More
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
};

export default LatestBoard;
