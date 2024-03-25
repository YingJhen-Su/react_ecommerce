import { useEffect, useRef, useState } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import CartBtn from "./CartBtn";
import SearchBar from "./SearchBar";
import NavList from "./NavList";

const MobileMenu = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    // toggle open
    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    // 切換頁面 關閉menu
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // background lock && focus trap
    useEffect(() => {
        if (isOpen) {
            // background lock
            document.body.style.overflow = "hidden";

            // focus trap
            const menu = menuRef.current;
            const focusableElements = menu.querySelectorAll(
                "button, [href], input"
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            // use tab || tab + shift
            const handleTabKeyPress = (event) => {
                if (event.key === "Tab") {
                    if (
                        event.shiftKey &&
                        document.activeElement === firstElement
                    ) {
                        event.preventDefault();
                        lastElement.focus();
                    } else if (
                        !event.shiftKey &&
                        document.activeElement === lastElement
                    ) {
                        event.preventDefault();
                        firstElement.focus();
                    }
                }
            };

            // use esc
            const handleEscapeKeyPress = (event) => {
                if (event.key === "Escape") {
                    setIsOpen(false);
                }
            };

            menu.addEventListener("keydown", handleTabKeyPress);
            menu.addEventListener("keydown", handleEscapeKeyPress);
            firstElement.focus();

            // clean
            return () => {
                document.body.style = null;
                menu.removeEventListener("keydown", handleTabKeyPress);
                menu.removeEventListener("keydown", handleEscapeKeyPress);
            };
        }
    }, [isOpen, setIsOpen]);

    // if is first page back to home
    let prevPage = -1;
    if (location.key === "default") {
        prevPage = "/";
    }

    return (
        <header
            className={`header w-100 position-fixed top-0 start-0 ${
                isOpen ? "overlay" : ""
            }`}
            ref={menuRef}
        >
            <div className="bg-white shadow-sm">
                <div className="container py-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-1">
                            <button
                                type="button"
                                className="back-btn border-0 bg-transparent"
                                onClick={() => navigate(prevPage)}
                                aria-label="back to previous page"
                            >
                                <i className="fa-solid fa-angle-left"></i>
                            </button>

                            <h1 className="logo fs-2 mb-0">
                                <Link
                                    to="/"
                                    className="text-primary text-decoration-none fw-semibold"
                                >
                                    ESHOP
                                </Link>
                            </h1>
                        </div>

                        {/* mobile 功能鍵 */}
                        <div className="mobile-buttons d-flex align-items-center gap-1">
                            <CartBtn />

                            <button
                                type="button"
                                className="menu-btn border-0 bg-transparent"
                                onClick={toggleMenu}
                                aria-label="toggle menu"
                                aria-haspopup="menu"
                                aria-controls="mobileMenu"
                                aria-expanded={isOpen ? "true" : "false"}
                            >
                                <i
                                    className={
                                        isOpen
                                            ? "fs-5 fa-solid fa-xmark"
                                            : "fs-5 fa-solid fa-bars"
                                    }
                                ></i>
                            </button>
                        </div>
                    </div>

                    <div
                        id="mobileMenu"
                        role="menu"
                        className={`mobile-menu text-center mt-3 flex-column gap-3 ${
                            isOpen ? "d-flex" : "d-none"
                        }`}
                    >
                        <Form method="GET" action="/products" role="search">
                            <SearchBar />
                        </Form>

                        <nav className="d-flex flex-column gap-2 fs-5">
                            <NavList />
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default MobileMenu;
