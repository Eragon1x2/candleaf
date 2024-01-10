import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalPrice += newItem.price * newItem.count;
      if (!existingItem) {
        state.items.push({
          ...newItem,
          total: newItem.price * newItem.count
        });
      } else {
        existingItem.count += newItem.count;
        existingItem.total = existingItem.total + newItem.price * newItem.count;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalPrice -= existingItem.price;
      if (existingItem.count === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.count--;
        existingItem.total = existingItem.total - existingItem.price;
      }
    },
    updateItemInCart(state,action) {
      const [a, id] = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if(a === '+') {
        existingItem.count += 1;
        existingItem.total = existingItem.total + existingItem.price * 1;
        state.totalPrice += existingItem.price;
      }
      else {
        existingItem.count -= 1;
        existingItem.total = existingItem.total - existingItem.price * 1;
        state.totalPrice -= existingItem.price;
      }
        
    }
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;