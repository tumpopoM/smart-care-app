import { configureStore } from '@reduxjs/toolkit';
import smartCareReducer from './smartCareSlice';

export const store = configureStore({
  reducer: {
    smartCare: smartCareReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
