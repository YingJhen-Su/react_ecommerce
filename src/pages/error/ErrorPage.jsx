import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <section>
            <h2 className="page-title">Error</h2>
            <p className="fs-5">{error.message}</p>

            <Link to="/" className="fs-5 link-danger link-opacity-75-hover">
                Back to the Homepage{" "}
                <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
        </section>
    );
};

export default ErrorPage;
