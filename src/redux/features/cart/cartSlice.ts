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
    removeCartItem: (state , action) => {
      state.cartItems = state.cartItems.filter((item) => item.id  !== action.payload);
    },
    removeAllCartItems: (state) => {
     state.cartItems = []
  }
}
});

export const { addToCart, removeCartItem ,removeAllCartItems} = cartSlice.actions;

export default cartSlice.reducer;
