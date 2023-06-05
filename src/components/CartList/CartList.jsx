import { ReactComponent as EmptyCart } from 'images/empty-shopping-cart.svg';
import React from 'react';
// import PropTypes from 'prop-types';

import { CartItem } from '../CartItem/CartItem';
import { CartListWrapper, CartListEmpty, CartBox, TotalBox, ButtonClearCart } from './CartList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectCart } from 'redux/order/selectors';
import { selectTotal } from 'redux/order/selectors'; 
import { setCartEmpty } from 'redux/order/slice';

export const CartList = () => {
  const dispatch = useDispatch();
  const total = useSelector(selectTotal);
  
  const cart = useSelector(selectCart);
  function handleClearCart() {
    dispatch(setCartEmpty());
  }

  return (
    <CartBox>
    <CartListWrapper>

        {(!cart.products || cart.products.length === 0) &&  (<CartListEmpty>
            <EmptyCart />
            <p>Your basket is empty</p>
        </CartListEmpty>)}
        {cart.products &&
          cart.products.map(({ id, food_img_URL, food_name, price, quantity }) => (
            <CartItem
              // onClickImg={onClickImg}
              food_img_URL={food_img_URL}
              key={`${id}`}
              id={id}
              food_name={food_name}
              price={price}
              quantity={quantity}
              target="_blank"
              rel="noreferrer noopener"
            />
          ))}

    </CartListWrapper>
      <TotalBox>TOTAL: {total} units</TotalBox>
      <ButtonClearCart onClick={handleClearCart}>Clear Cart</ButtonClearCart>
    </CartBox>
  );
};