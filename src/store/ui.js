import { createSlice } from "@reduxjs/toolkit";
import bg from '../bg';

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        items: bg
    },
    reducers: {
        changeItemsByFilter(state, action) {
            if(action.payload === 'all') {
                state.items = bg;
            }
            else {
                const gg = action.payload;
                let filtered_items = bg.filter(a => a[gg] === true);
                state.items = filtered_items;
            }
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;