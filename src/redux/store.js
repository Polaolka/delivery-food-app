import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { ModalOpenedReducer } from './modalOpenedSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { foodReducer } from './food/slice';
import { shopReducer } from './shop/slice';
import { orderReducer } from './order/slice';
import { loadingReducer } from './loader/slice';
import { couponReducer } from './coupon/slice';

const orderPersistConfig = {
  key: 'order',
  storage,
  whitelist: ['cart', 'user'],
};

export const store = configureStore({
  reducer: {
    order: persistReducer(orderPersistConfig, orderReducer),
    food: foodReducer,
    shop: shopReducer,
    coupon: couponReducer,
    modalopened: ModalOpenedReducer,
    loading: loadingReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
