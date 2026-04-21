import { configureStore } from '@reduxjs/toolkit';
import smartCareReducer from './smartCareSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'smartCare',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, smartCareReducer);

export const store = configureStore({
  reducer: {
    smartCare: persistedReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
