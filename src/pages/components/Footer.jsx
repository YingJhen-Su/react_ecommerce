import { Link } from "react-router-dom";
import NavList from "./NavList";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer bg-primary text-center p-2 d-flex flex-column align-items-center">
            <h1 className="logo fw-semibold mb-md-3">ESHOP</h1>

            <nav className="footer-nav d-flex flex-column flex-md-row mb-3 fs-5">
                <Link to="/">Home</Link>
                <NavList />
            </nav>

            <p className="mb-3">&copy; {year} ESHOP</p>

            {/* 開發聲明 */}
            <div className="footer-attribution mb-0">
                <p className="mb-0">
                    Frontend side project code by{" "}
                    <a
                        href="https://github.com/YingJhen-Su/react_ecommerce"
                        target="_blank"
                    >
                        Vivian Su <i className="fa-brands fa-github"></i>
                    </a>
                </p>
                <p className="mb-0">
                    E-Commerce data come from{" "}
                    <a href="https://fakestoreapi.com/" target="_blank">
                        Fake Store API
                    </a>
                </p>
                <p className="mb-0">
                    Photos come from{" "}
                    <a href="https://unsplash.com/" target="_blank">
                        Unsplash
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
