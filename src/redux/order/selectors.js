// export const selectAllFood = state => state.food.foods;
// export const selectFoodById = state => state.food.food;

import { createSelector } from "@reduxjs/toolkit";

// export const selectIsLoadingGetAllFoods = state => state.food.isLoadingGetAllFoods;
export const selectUser = state => state.order.user;
export const selectError = state => state.order.error;
export const selectCart = state => state.order.cart;
export const selectedShop = state => state.order.cart.shop;
export const selectedItemsInCart = state => state.order.cart.products;
export const selectAddUserStatus = state => state.order.addUserStatus;

export const selectTotal = createSelector(
    state => state.order.cart.products,
    products => {
      if (products && products.length > 0) {
        return products.reduce((total, { price, quantity }) => {
          return total + price * quantity;
        }, 0);
      }
      return 0;
    }
  );




