import { Link } from "react-router-dom";
import { CATEGORY, categorySplit } from "../../helpers/constants";

const NavList = () => {
    return (
        <>
            <Link to="/products">All</Link>
            {CATEGORY.map((item, index) => (
                <Link
                    key={index}
                    to={decodeURI(`/category/${item}`)}
                    className="text-capitalize"
                >
                    {categorySplit(item)}
                </Link>
            ))}
        </>
    );
};

export default NavList;
