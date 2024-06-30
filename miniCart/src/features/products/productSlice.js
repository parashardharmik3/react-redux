// productSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  phones: [],
};

export const fetchPhoneById = createAsyncThunk(
  'phones/getPhoneDetail',
  async (phoneId, thunkAPI) => {
    try {
      const { data } = await axios.get(`http://localhost:8080/phone/${phoneId}`);
      return data; // Assuming this returns the phone object with `id`, `name`, `price`, etc.
    } catch (error) {
      console.error('Error fetching phone by id:', error);
      throw error;
    }
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    add: (state, action) => {
      state.phones.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPhoneById.fulfilled, (state, action) => {
      state.phones.push(action.payload);
    });
  },
});

export const { add } = productSlice.actions;

export default productSlice.reducer;
