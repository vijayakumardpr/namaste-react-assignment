import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
    name: "favourite",
    initialState: {
        items: []
    },
    reducers: {
        favouriteItem: (state, action) => {
            state.items.push(action.payload)
        }
    }
})

export const { favouriteItem } = favouriteSlice.actions

export default favouriteSlice.reducer