import { createSlice } from '@reduxjs/toolkit';

type TInitialStateCart = {
  id: string;
  quantity: number;
};
type TInitialState = {
  cartItems: TInitialStateCart[];
};

const initialState: TInitialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: ({ cartItems }, action) => {
      cartItems.push(action.payload);
    },
    removeCartItem: ({ cartItems }, action) => {
      cartItems = cartItems.filter((item) => item.id! === action.payload);
    },
  },
});

export const { addToCart, removeCartItem } = cartSlice.actions;

export default cartSlice.reducer;
