import { ReactComponent as EmptyCart } from 'images/empty-shopping-cart.svg';
import React from 'react';
// import PropTypes from 'prop-types';

import { CartItem } from '../CartItem/CartItem';
import { CartListWrapper, CartListEmpty, CartBox, TotalBox } from './CartList.styled';
import { useSelector } from 'react-redux';
import { selectCart } from 'redux/order/selectors';
import { selectTotal } from 'redux/order/selectors'; 

export const CartList = () => {

  const total = useSelector(selectTotal);

  const cart = useSelector(selectCart);
  return (
    <CartBox>
    <CartListWrapper>

        {!cart.products && (<CartListEmpty>
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
      <TotalBox>TOTAL: {total} USD</TotalBox>
    </CartBox>
  );
};