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

// loader
import {
    categoryLoadder,
    latestLoader,
    productsLoader,
} from "./helpers/loaders";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} loader={latestLoader} />
            <Route path="products">
                <Route index element={<Products />} loader={productsLoader} />
                <Route path=":id" element={<ProductItem />} />
            </Route>
            <Route path="category">
                <Route index element={<NotFound />} />
                <Route
                    path=":id"
                    element={<CategoryItem />}
                    loader={categoryLoadder}
                />
            </Route>
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);
const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
