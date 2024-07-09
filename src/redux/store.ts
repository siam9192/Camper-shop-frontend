import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import toggleSlice from "./features/toggle/toggleSlice";



const store = configureStore({
reducer:{
[baseApi.reducerPath]:baseApi.reducer,
toggle:toggleSlice
},
middleware:(getDefaultMiddlewares)=>getDefaultMiddlewares().concat(baseApi.middleware)
})



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


export default store