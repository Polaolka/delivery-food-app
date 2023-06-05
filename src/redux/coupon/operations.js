import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://delivery-food-back.onrender.com';


// getAllCoupons

export const getAllCoupons = createAsyncThunk(
  'coupon/getAllCoupons',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.get(`${baseURL}/api/coupons`, credentials);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

