import { useEffect } from "react";

// redux
import { useDispatch } from "react-redux";
import { updateWidth } from "./app/widthSlice";

// react router
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from "react-router-dom";

// layout
import RootLayout from "./layouts/RootLayout";

// pages
import Home from "./pages/home/Home";
import Products from "./pages/product/Products";
import ProductItem from "./pages/product/ProductItem";
import CategoryItem from "./pages/category/CategoryItem";
import Cart from "./pages/cart/Cart";
import NotFound from "./pages/error/NotFound";
import ErrorPage from "./pages/error/ErrorPage";

// loaders
import {
    categoryLoader,
    productItemLoader,
    productsLoader,
} from "./helpers/loaders";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="products">
                <Route
                    index
                    element={<Products />}
                    loader={productsLoader}
                    errorElement={<ErrorPage />}
                />
                <Route
                    path=":id"
                    element={<ProductItem />}
                    loader={productItemLoader}
                    errorElement={<ErrorPage />}
                />
            </Route>
            <Route path="category">
                <Route index element={<NotFound />} />
                <Route
                    path=":id"
                    element={<CategoryItem />}
                    loader={categoryLoader}
                    errorElement={<ErrorPage />}
                />
            </Route>
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

const App = () => {
    const dispatch = useDispatch();

    const handleResize = () => {
        dispatch(updateWidth(window.innerWidth));
    };

    // update width when resize
    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    });

    return <RouterProvider router={router} />;
};

export default App;
