import { createSlice } from '@reduxjs/toolkit';
import { getAllShops, getShopById } from './operations';

const initialState = {
  shop: {
    _id: '',
    shop_name: '',
  },
  shops: [],
  error: null,
  isLoadingGetAllShops: false,
  isLoadingGetShopById: false,
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getShopById.fulfilled, (state, action) => {
        const { _id, shop_name } =
          action.payload.shop;
        state.shop._id = _id;
        state.shop.shop_name = shop_name;
        state.error = null;
        state.isLoadingGetShopById = false;
      })
      .addCase(getShopById.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoadingGetShopById = false;
      })
      .addCase(getShopById.pending, state => {
        state.isLoadingGetShopById = true;
      })

      .addCase(getAllShops.fulfilled, (state, action) => {
        state.shops = action.payload;
        state.error = null;
        state.isLoadingGetAllShops = false;
      })
      .addCase(getAllShops.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoadingGetAllShops = false;
      })
      .addCase(getAllShops.pending, state => {
        state.isLoadingGetAllShops = true;
      })
      
  },
});
export const shopReducer = shopSlice.reducer;
