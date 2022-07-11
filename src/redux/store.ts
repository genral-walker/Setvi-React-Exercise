import { configureStore, Action } from '@reduxjs/toolkit';
import { PostsApi } from './queries/posts';

const store = configureStore({
  reducer: {
    [PostsApi.reducerPath]: PostsApi.reducer,
  },

  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(PostsApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
