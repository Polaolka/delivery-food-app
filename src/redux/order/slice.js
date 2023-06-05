import { createSlice } from '@reduxjs/toolkit';
import { getAllOrder, addOrder, addUser } from './operations';

const initialState = {
  cart: {
    owner_id: '',
    shop: '',
    products: [],
  },
  user: {
    _id: '',
    email: '',
    name: '',
    address: '',
    phone: '',
  },
  orders: [],
  error: null,
  addUserStatus: null,
  isLoadingAddOrder: false,
  isLoadingGetAllOrders: false,
  isLoadingAddUsers: false,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  extraReducers: builder => {
    builder

      .addCase(addOrder.fulfilled, (state, action) => {
        const { _id, email, name, address, phone } = action.payload.user;
        state.user._id = _id;
        state.user.name = name;
        state.user.email = email;
        state.user.address = address;
        state.user.phone = phone;
        state.cart.shop = '';
        state.cart.products = [];
        state.error = null;
        state.isLoadingAddOrder = false;
      })
      .addCase(addOrder.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoadingGetShopById = false;
      })
      .addCase(addOrder.pending, state => {
        state.isLoadingAddOrder = true;
      })

      .addCase(getAllOrder.fulfilled, (state, action) => {
        state.orders = action.payload;
        state.error = null;
        state.isLoadingGetAllOrders = false;
      })
      .addCase(getAllOrder.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoadingGetAllOrders = false;
      })
      .addCase(getAllOrder.pending, state => {
        state.isLoadingGetAllOrders = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.cart.owner_id = action.payload._id
        state.error = null;
        state.isLoadingAddUsers = false;
        state.addUserStatus = action.meta.requestStatus;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoadingAddUsers = false;
      })
      .addCase(addUser.pending, state => {
        state.isLoadingAddUsers = true;
      });
  },
  reducers: {
    setSelectedShop(state, action) {
      state.cart.shop = action.payload;
    },
    setCurrentUser(state, action) {
      state.user = action.payload;
      state.cart.owner_id = action.payload;
    },
    setCart(state, action) {
      state.cart.products.push(action.payload);
      if (state.user) {
        state.cart.owner_id = state.user._id;
      }
    },
    increaseQuantity(state, action) {
      const id  = action.payload;
      const productIndex = state.cart.products.findIndex(item => item.id === id);
      if (productIndex !== -1) {
        state.cart.products[productIndex].quantity += 1;
      }
    },
    decreaseQuantity(state, action) {
      const id  = action.payload;
      const productIndex = state.cart.products.findIndex(item => item.id === id);
      if (productIndex !== -1) {
        if (state.cart.products[productIndex].quantity > 1) {
          state.cart.products[productIndex].quantity -= 1;
        }
      }
    },
  },
});
export const { setSelectedShop, setCurrentUser, setCart, decreaseQuantity, increaseQuantity } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
