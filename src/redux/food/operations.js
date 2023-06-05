import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://delivery-food-back.onrender.com';


// getAllFoods

export const getAllFoods = createAsyncThunk(
  'food/getAllFoods',
  async (data , thunkAPI) => {

    try {
      const res = await axios.get('https://delivery-food-back.onrender.com/api/foods', {
        params: data 
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// get food by id

export const getFoodById = createAsyncThunk(
  'food/getFoodById',
  async ([id], thunkAPI) => {
    try {
      const res = await axios.get(`/foods/${id}`);

      return { response: res.data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

