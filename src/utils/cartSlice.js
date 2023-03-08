import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {

            const cartItems = state.items.find(item => item.id === action.payload.id)
            if (cartItems === undefined) {
                state.items.push({ ...action.payload, quantity: 1 })
            } else {
                state.items = state.items.map(item => {
                    return item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                })
            }

        },

        removeItem: (state, action) => {
            // state.items.filter(item => item.items.id !== action.payload)
            //state.items = state.items.filter(item => item.id !== action.payload)
            //const cartItems = state.items.find(item => item.id === action.payload.id)
            //console.log(action.payload);
            const cartItems = state.items.find(item => item.id === action.payload)
            if (cartItems === undefined || cartItems.quantity === 0) return
            if (cartItems.quantity === 1) {
                state.items = state.items.filter(item => item.id !== action.payload)
            } else {
                state.items = state.items.map(item => {
                    return item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
                })
            }
        },

        clearCart: (state) => {
            state.items = []
        }

    }
})

export const { addItem, clearCart, removeItem } = cartSlice.actions

export default cartSlice.reducer