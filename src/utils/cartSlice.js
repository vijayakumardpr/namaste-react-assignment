import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)

        },
        
        removeItem: (state, action) => {
            // state.items.filter(item => item.items.id !== action.payload)
            state.items = state.items.filter(item => item.id !== action.payload)
        },

        clearCart: (state) => {
            state.items = []
        }

    }
})

export const { addItem, clearCart, removeItem } = cartSlice.actions

export default cartSlice.reducer