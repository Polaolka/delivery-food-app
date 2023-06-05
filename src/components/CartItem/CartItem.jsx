import React from 'react';
import {
  QuantityContainer,
  QuantityButton,
  QuantityBox,
  CartItemWrapper,
  CartImg,
  CartThumb,
} from './CartItem.styled';
import { increaseQuantity, decreaseQuantity } from 'redux/order/slice';
import { useDispatch } from 'react-redux';

// import PropTypes from 'prop-types';

export const CartItem = ({ id, food_img_URL, food_name, price, quantity }) => {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <CartItemWrapper>
      <CartThumb>
        <CartImg src={food_img_URL} alt={food_name} />
      </CartThumb>

        <h3>{food_name}</h3>
        <div>price: {price}</div>

      <QuantityContainer>
        <QuantityButton onClick={handleDecreaseQuantity}>-</QuantityButton>
        <QuantityBox>{quantity}</QuantityBox>
        <QuantityButton onClick={handleIncreaseQuantity}>+</QuantityButton>
      </QuantityContainer>
    </CartItemWrapper>
  );
};
