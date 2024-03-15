import { configureStore } from '@reduxjs/toolkit';
import Slider from "./reducers/slice"

export const Store = configureStore({
    reducer: {
        // Add your reducers here.
        rock: Slider
    }
});

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch;