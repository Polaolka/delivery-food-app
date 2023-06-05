import { createSlice } from '@reduxjs/toolkit';
import { getAllCoupons } from './operations';

const initialState = {
  coupons:  [],
  error: null,
  isLoadingGetAllCoupons: false,
  isLoadingGetCouponById: false,
};

const couponSlice = createSlice({
  name: 'coupon',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllCoupons.fulfilled, (state, action) => {
        state.coupons = action.payload;
        state.error = null;
        state.isLoadingGetAllCoupons = false;
      })
      .addCase(getAllCoupons.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoadingGetAllCoupons = false;
      })
      .addCase(getAllCoupons.pending, state => {
        state.isLoadingGetAllCoupons = true;
      })
      
  },
});
export const couponReducer = couponSlice.reducer;
