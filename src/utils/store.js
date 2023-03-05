import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice"
import favouriteSlice from "./favouriteSlice"

const store = configureStore({
    reducer: {
        cart: cartSlice,
        favourite: favouriteSlice
    }
})

export default store