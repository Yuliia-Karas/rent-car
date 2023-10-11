import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./advertSlice";

export const store = configureStore({
    reducer: {
    
        cars: carsReducer
}})