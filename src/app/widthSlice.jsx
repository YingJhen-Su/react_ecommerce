import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    width: window.innerWidth,
};

const widthSlice = createSlice({
    name: "width",
    initialState,
    reducers: {
        // update width when resize
        updateWidth: (state, action) => {
            state.width = action.payload;
        },
    },
});

export default widthSlice.reducer;

export const widthSelector = (state) => state.width.width;

export const { updateWidth } = widthSlice.actions;
