// store.js

import { configureStore } from '@reduxjs/toolkit';
import productReducers from '../features/products/productSlice';

export const store = configureStore({
  reducer: {
    product: productReducers,
  },
});
