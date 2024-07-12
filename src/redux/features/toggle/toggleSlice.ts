import { createSlice } from '@reduxjs/toolkit/react';

type TInitialState = {
  isProductCreateFormOpen: boolean;
};
const initialState: TInitialState = {
  isProductCreateFormOpen: false,
};
const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    
    toggleProductCreateForm: (state,action) => {
      state.isProductCreateFormOpen = action.payload
    },
  },
});

export const {toggleProductCreateForm } = toggleSlice.actions;

export default toggleSlice.reducer;
