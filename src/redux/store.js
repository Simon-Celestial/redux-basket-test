import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./features/counter.js"
import basketReducer from "./features/basket.js";
export const store = configureStore({
    reducer: {
        // counter: counterReducer,
        basket: basketReducer,
    },
})
