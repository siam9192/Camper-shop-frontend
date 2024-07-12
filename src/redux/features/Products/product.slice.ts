import { TProduct } from '@/types';
import { createSlice } from '@reduxjs/toolkit/react';

type TInitialState = {
  updatableProduct:TProduct | null
};
const initialState: TInitialState = {
    updatableProduct: null
};
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    insertUpdateProduct: (state,action) => {
    state.updatableProduct = action.payload
    }
  },
});

export const {insertUpdateProduct} = productSlice.actions
export default productSlice.reducer;
