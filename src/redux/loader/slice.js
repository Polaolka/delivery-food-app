import { createSlice } from '@reduxjs/toolkit';
import { getAllFoods } from 'redux/food/operations';
import { getAllShops } from 'redux/shop/operations';

const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    isLoading: false,
  },
  extraReducers: builder => {
    builder.addCase(getAllFoods.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getAllFoods.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(getAllFoods.fulfilled, state => {
      state.isLoading = false;
    });

    builder.addCase(getAllShops.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getAllShops.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(getAllShops.fulfilled, state => {
      state.isLoading = false;
    });
  },
});

export const loadingReducer = loadingSlice.reducer;
