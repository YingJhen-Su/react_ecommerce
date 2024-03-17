import { useEffect, useState } from "react";

const BackTop = () => {
    const [buttonShow, setButtonShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setButtonShow(true);
        } else {
            setButtonShow(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <div
            className={`back-top btn btn-light position-fixed ${
                buttonShow ? "" : "d-none"
            }`}
            onClick={scrollTop}
        >
            <i className="fa-solid fa-chevron-up"></i>
            <p className="d-none d-lg-block mb-0">TOP</p>
        </div>
    );
};

export default BackTop;
