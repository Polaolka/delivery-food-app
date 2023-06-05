import { createSlice } from '@reduxjs/toolkit';
import { getAllFoods, getFoodById } from './operations';

const initialState = {
  food: {
    _id: '',
    food_name: '',
    food_img_URL: '',
    price: '',
    shop_owner_food: '',
  },
  foods: [],
  error: null,
  isLoadingGetAllFoods: false,
  isLoadingGetFoodById: false,
};

const foodSlice = createSlice({
  name: 'food',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getFoodById.fulfilled, (state, action) => {
        const { _id, food_name, food_img_URL, price, shop_owner_food } =
          action.payload.food;
        state.food._id = _id;
        state.food.food_name = food_name;
        state.food.food_img_URL = food_img_URL;
        state.food.price = price;
        state.food.shop_owner_food = shop_owner_food;
        state.error = null;
        state.isLoadingGetFoodById = false;
      })
      .addCase(getFoodById.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoadingGetFoodById = false;
      })
      .addCase(getFoodById.pending, state => {
        state.isLoadingGetFoodById = true;
      })

      .addCase(getAllFoods.fulfilled, (state, action) => {
        state.foods = action.payload;
        state.error = null;
        state.isLoadingGetAllFoods = false;
      })
      .addCase(getAllFoods.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoadingGetAllFoods = false;
      })
      .addCase(getAllFoods.pending, state => {
        state.isLoadingGetAllFoods = true;
      })
      
  },
});
export const foodReducer = foodSlice.reducer;
