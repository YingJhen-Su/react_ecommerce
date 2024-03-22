import { useSelector } from "react-redux";
import { widthSelector } from "../../app/widthSlice";
import MenuBar from "./MenuBar";
import MobileMenu from "./MobileMenu";

const Header = () => {
    const width = useSelector(widthSelector);

    const menu = width >= 992 ? <MenuBar /> : <MobileMenu />;

    return <>{menu}</>;
};

export default Header;
