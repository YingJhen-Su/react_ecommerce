import { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import FilterDropdown from "../components/FilterDropdown";
import ProductBoard from "../components/ProductBoard";

const Products = () => {
    const products = useLoaderData();
    const [filter, setFilter] = useState(products);

    useEffect(() => {
        setFilter(products);
    }, [products]);

    // if search 調整標題
    let title = "All Products";
    const location = useLocation();
    if (location.search) {
        const query = new URLSearchParams(location.search);
        if (query.has("q")) {
            title = `Search result for "${query.get("q")}"`;
        }
    }

    // 分類過濾
    const handleFilter = (category) => {
        if (category === "all") {
            setFilter(products);
        } else {
            const filterProducts = products.filter(
                (item) => item.category === category
            );
            setFilter(filterProducts);
        }
    };

    return (
        <section>
            <h2 className="page-title">{title}</h2>

            <div className="d-flex align-items-center justify-content-between mb-2">
                <p className="fs-5 mb-0">
                    {filter.length === 1
                        ? filter.length + " Item"
                        : filter.length + " Items"}
                </p>

                <FilterDropdown handleFilter={handleFilter} />
            </div>

            <ProductBoard products={filter} />
        </section>
    );
};

export default Products;
