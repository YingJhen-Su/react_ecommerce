import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 1500);
    }, [navigate]);

    return <h2 className="page-title">Page Not Found</h2>;
};

export default NotFound;
