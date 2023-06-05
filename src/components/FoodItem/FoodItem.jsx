import React from 'react';
import { ImgStyled, ItemStyled, OrderBtnStyled } from './FoodItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setCart, setSelectedShop } from 'redux/order/slice';
import { selectedItemsInCart, selectedShop } from '../../redux/order/selectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const FoodItem = ({
  id,
  food_img_URL,
  food_name,
  price,
  shop_owner_food,
}) => {
  const dispatch = useDispatch();
  const curentShop = useSelector(selectedShop);

  const cartItems = useSelector(selectedItemsInCart); // Отримати стан кошика
  const isItemInCart = cartItems.some((item) => item.id === id); 

  const addToCart = () => {
    if (curentShop === '') {
      const sendData = {
        id,
        price,
        food_img_URL,
        food_name,
        quantity: 1,
      };
      dispatch(setCart(sendData));
      dispatch(setSelectedShop(shop_owner_food._id));
      return;
    }
    if (shop_owner_food._id === curentShop) {
      const sendData = {
        id,
        price,
        food_img_URL,
        food_name,
        quantity: 1,
      };
      dispatch(setCart(sendData));
      return;
    }
    toast.error('One order must contain goods from the same store. Choose your favorite.', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  };

  return (
    <ItemStyled>
      <ImgStyled src={food_img_URL} alt={food_name} />

        <h3>{food_name}</h3>
        <div>price: {price}</div>
        <OrderBtnStyled 
        className="white"
        onClick={addToCart}>{isItemInCart ? 'In the cart' : 'Add to cart'}</OrderBtnStyled>

    </ItemStyled>
  );
};
