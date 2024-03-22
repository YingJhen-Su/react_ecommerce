import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../pages/components/Header";
import Footer from "../pages/components/Footer";
import BackTop from "../pages/components/BackTop";

const RootLayout = () => {
    return (
        <div className="App d-flex flex-column">
            <Header />

            <main className="main flex-grow-1">
                <div className="container">
                    <Outlet />
                </div>
            </main>

            <Footer />

            <BackTop />
            <ScrollRestoration />
        </div>
    );
};

export default RootLayout;
