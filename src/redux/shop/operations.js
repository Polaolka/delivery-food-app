import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://delivery-food-back.onrender.com';


// getAllShops

export const getAllShops = createAsyncThunk(
  'shop/getAllShops',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.get(`${baseURL}/api/shops`, credentials);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// get shop by id

export const getShopById = createAsyncThunk(
  'shop/getShopById',
  async ([id], thunkAPI) => {
    try {
      const res = await axios.get(`${baseURL}/api/shops${id}`);

      return { response: res.data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

