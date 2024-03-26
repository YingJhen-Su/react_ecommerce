import { useLoaderData, useParams } from "react-router-dom";
import ProductBoard from "../components/ProductBoard";

const CategoryItem = () => {
    const products = useLoaderData();
    const { id } = useParams();
    const title = decodeURI(id);

    return (
        <section>
            <h2 className="page-title text-capitalize">{title}</h2>
            <p className="fs-5 mb-2">
                {products.length === 1
                    ? products.length + " Item"
                    : products.length + " Items"}
            </p>

            <ProductBoard products={products} />
        </section>
    );
};

export default CategoryItem;
