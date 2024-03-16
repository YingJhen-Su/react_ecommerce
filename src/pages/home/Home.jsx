import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import CategoryBoard from "./CategoryBoard";
import LatestBoard from "./LatestBoard";
import "../../scss/pages/home.scss";

//img
import hero from "../../assets/banner-unsplash.jpg";

const Home = () => {
    const latestProducts = useLoaderData();

    return (
        <div className="home d-flex flex-column">
            <section className="hero">
                <Card img={hero} alt="banner image" text="NEW IN" />
            </section>

            <CategoryBoard />

            <LatestBoard products={latestProducts} />
        </div>
    );
};

export default Home;
