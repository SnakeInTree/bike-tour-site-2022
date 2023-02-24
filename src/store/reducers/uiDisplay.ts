/**
 * Reducer to handle display of UI elements (Drawer, Settings etc.)
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UIDisplay } from "../models";

const initialState : UIDisplay = {
    showDrawer: true,
    showCarousel: false
};
  
export const displaySlice = createSlice({
    name: "uiDisplay",
    initialState,
    reducers: {
        toggleDrawerDisplay: (state: UIDisplay, action: PayloadAction<boolean>) => {
            return {...state, showDrawer: action.payload};
        },
        toggleCarouselDisplay: (state: UIDisplay, action: PayloadAction<boolean>) => {
            return {...state, showCarousel: action.payload};
        },
    },
});

export const { toggleDrawerDisplay, toggleCarouselDisplay } = displaySlice.actions;
export default displaySlice.reducer;