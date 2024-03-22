import { configureStore } from "@reduxjs/toolkit";
import widthReducer from "./widthSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
    reducer: {
        width: widthReducer,
        cart: cartReducer,
    },
});
