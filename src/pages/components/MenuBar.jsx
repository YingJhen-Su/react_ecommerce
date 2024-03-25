import { Form, Link } from "react-router-dom";
import NavList from "./NavList";
import SearchBar from "./SearchBar";
import CartBtn from "./CartBtn";

const MenuBar = () => {
    return (
        <header className="header w-100 position-fixed top-0 start-0">
            <div className="bg-white shadow-sm">
                <div className="container py-3 d-flex align-items-center justify-content-between">
                    <h1 className="logo fs-2 mb-0">
                        <Link
                            to="/"
                            className="text-primary text-decoration-none fw-semibold"
                        >
                            ESHOP
                        </Link>
                    </h1>

                    {/* desktop menu */}
                    <nav className="menu d-flex fs-5">
                        <NavList />
                    </nav>

                    {/* desktop 功能鍵 */}
                    <div className="d-flex gap-2">
                        <Form
                            className="search-form"
                            method="GET"
                            action="/products"
                            role="search"
                        >
                            <SearchBar />
                        </Form>

                        <CartBtn />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default MenuBar;
