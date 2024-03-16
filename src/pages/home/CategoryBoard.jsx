import { Link } from "react-router-dom";
import Card from "./Card";

//img
import men from "../../assets/men-unsplash.jpg";
import women from "../../assets/women-unsplash.jpg";
import electronics from "../../assets/electronics-unsplash.jpg";
import jewelery from "../../assets/jewelery-unsplash.jpg";

const CategoryBoard = () => {
    return (
        <section className="category">
            <h1 className="mb-4 text-center logo">CATEGORY</h1>
            <div className="row row-cols-2 row-cols-lg-4 row-cols-xl-5 g-3 justify-content-center">
                <div className="col">
                    <Link
                        className="category-item"
                        to={decodeURI("/category/men's clothing")}
                    >
                        <Card img={men} alt="men's clothing" text="Men's" />
                    </Link>
                </div>

                <div className="col">
                    <Link
                        className="category-item"
                        to={decodeURI("/category/women's clothing")}
                    >
                        <Card
                            img={women}
                            alt="women's clothing"
                            text="Women's"
                        />
                    </Link>
                </div>

                <div className="col">
                    <Link className="category-item" to="/category/electronics">
                        <Card
                            img={electronics}
                            alt="electronics"
                            text="Electronics"
                        />
                    </Link>
                </div>

                <div className="col">
                    <Link className="category-item" to="/category/jewelery">
                        <Card img={jewelery} alt="jewelery" text="Jewelery" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CategoryBoard;
