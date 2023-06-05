import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://delivery-food-back.onrender.com';


// getAllOrders

export const getAllOrder = createAsyncThunk(
  'order/getAllOrder',
  async (data , thunkAPI) => {

    try {
      const res = await axios.get('https://delivery-food-back.onrender.com/api/orders', {
        params: data 
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// get order by id

export const getOrderById = createAsyncThunk(
  'order/getOrderById',
  async ([id], thunkAPI) => {
    try {
      const res = await axios.get(`https://delivery-food-back.onrender.com/api/orders/${id}`);

      return { response: res.data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addOrder = createAsyncThunk(
  'order/addOrder',
  async (body, thunkApi) => {
    try {
      const response = await axios.post('https://delivery-food-back.onrender.com/api/orders', body);

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addUser = createAsyncThunk(
  'order/addUser',
  async (body, thunkApi) => {
    try {
      const response = await axios.post('https://delivery-food-back.onrender.com/api/users', body);

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message );
    }
  }
);