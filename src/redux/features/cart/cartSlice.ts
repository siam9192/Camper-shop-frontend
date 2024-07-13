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
    updateCartQuantity:(state,action)=>{
   state.cartItems =  state.cartItems.map((cart,index)=>{
      if(cart.id === action.payload.id){
        return {
          id:cart.id,
          quantity:action.payload.quantity
        }
      }
      return cart
     })
    },
    removeCartItem: (state , action) => {
      state.cartItems = state.cartItems.filter((item) => item.id  !== action.payload);
    },
    removeAllCartItems: (state) => {
     state.cartItems = []
  }
}
});

export const { addToCart, updateCartQuantity,removeCartItem ,removeAllCartItems} = cartSlice.actions;

export default cartSlice.reducer;
