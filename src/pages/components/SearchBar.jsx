import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
    const location = useLocation();
    const inputRef = useRef();

    // 切換頁面 清空搜尋
    useEffect(() => {
        if (inputRef.current.value) {
            inputRef.current.value = "";
            inputRef.current.blur();
        }
    }, [location]);

    return (
        <label className="search-bar position-relative">
            <i className="fa-solid fa-magnifying-glass search-bar-icon fs-6 position-absolute text-secondary"></i>
            <input
                className="border border-secondary rounded-pill"
                type="search"
                placeholder="Search..."
                aria-label="Search"
                name="q"
                ref={inputRef}
            />
        </label>
    );
};

export default SearchBar;
