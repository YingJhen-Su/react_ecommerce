import { useEffect, useState } from "react";
import { Form, Link, useLocation } from "react-router-dom";
import NavList from "./NavList";
import SearchBar from "./SearchBar";
import CartBtn from "./CartBtn";

const Header = () => {
    const location = useLocation();
    const [open, setOpen] = useState(false);

    // 切換頁面 關閉menu
    useEffect(() => {
        setOpen(false);
    }, [location]);

    const toggleMenu = () => {
        setOpen((open) => !open);
    };

    return (
        <>
            <header className="header bg-white shadow-sm z-2">
                <div className="container py-3 d-lg-flex align-items-lg-center justify-content-lg-between">
                    <div className="d-flex align-items-center justify-content-between">
                        <h1 className="logo fs-2 mb-0">
                            <Link
                                to="/"
                                className="text-primary text-decoration-none fw-semibold"
                            >
                                ESHOP
                            </Link>
                        </h1>

                        {/* mobile 功能鍵 */}
                        <div className="mobile-buttons d-flex align-items-center gap-1 d-lg-none">
                            <CartBtn />

                            <button
                                type="button"
                                className="menu-btn"
                                onClick={toggleMenu}
                            >
                                <i
                                    className={`fs-5 ${
                                        open
                                            ? "fa-solid fa-xmark"
                                            : "fa-solid fa-bars"
                                    }`}
                                ></i>
                            </button>
                        </div>
                    </div>

                    {/* mobile menu */}
                    <div
                        className={`mobile-menu text-center mt-3 flex-column gap-3 ${
                            open ? "d-flex" : "d-none"
                        }`}
                    >
                        <Form method="GET" action="/products" role="search">
                            <SearchBar />
                        </Form>

                        <nav className="d-flex flex-column gap-2 fs-5">
                            <NavList />
                        </nav>
                    </div>

                    {/* desktop menu */}
                    <nav className="menu d-none d-lg-flex fs-5">
                        <NavList />
                    </nav>

                    {/* desktop 功能鍵 */}
                    <div className="d-none d-lg-flex gap-2">
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
            </header>

            {/* 背景遮罩 */}
            <div className={`overlay z-1 ${open ? "d-block" : "d-none"}`}></div>
        </>
    );
};

export default Header;
