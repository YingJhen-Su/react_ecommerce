import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: {},
};

// action.payload
// {
//     id: 1,
//     title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
//     price: 109.95,
//     image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
//     quantity: 3
// }

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // add to cart
        addToCart: (state, action) => {
            const id = action.payload.id;

            if (id in state.cart) {
                state.cart[id].quantity += action.payload.quantity;
            } else {
                state.cart[id] = action.payload;
            }
        },

        // update item quantity
        updateCartQuantity: (state, action) => {
            const id = action.payload.id;

            if (!(id in state.cart)) {
                return;
            }

            state.cart[id].quantity = action.payload.quantity;
        },

        // delete cart item
        deleteCartItem: (state, action) => {
            const id = action.payload.id;

            if (!(id in state.cart)) {
                return;
            }

            delete state.cart[id];
        },
    },
});

export default cartSlice.reducer;

export const cartSelector = (state) => state.cart.cart;

export const { addToCart, updateCartQuantity, deleteCartItem } =
    cartSlice.actions;
