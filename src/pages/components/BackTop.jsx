import { useCallback, useEffect, useState } from "react";

const BackTop = () => {
    const [buttonShow, setButtonShow] = useState(false);

    const handleScroll = useCallback(() => {
        if (window.scrollY > 100) {
            setButtonShow(true);
        } else {
            setButtonShow(false);
        }
    }, []);

    // if scroll show back to top button
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            className={`back-top btn btn-light position-fixed ${
                buttonShow ? "" : "d-none"
            }`}
            onClick={scrollTop}
            aria-label="back to top"
        >
            <i className="fa-solid fa-chevron-up"></i>
            <p className="d-none d-lg-block mb-0">TOP</p>
        </button>
    );
};

export default BackTop;
