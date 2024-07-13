import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './api/baseApi';
import toggleSlice from './features/toggle/toggleSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REGISTER,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './features/cart/cartSlice';
import productSlice from './features/Products/product.slice';
const persistConfig = {
  key: 'cart',
  storage,
};
const persistCartReducer = persistReducer(persistConfig, cartReducer);
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    toggle: toggleSlice,
    cart: cartReducer,
    product:productSlice
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PERSIST, PURGE],
      },
    }).concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistore = persistStore(store);
