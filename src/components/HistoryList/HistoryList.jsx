import { ReactComponent as EmptyCart } from 'images/empty-shopping-cart.svg';
import React from 'react';
// import PropTypes from 'prop-types';
import { OrderItem } from '../OrderItem/OrderItem';
import { HistoryListWrapper, HistoryListEmpty } from './HistoryList.styled';

export const HistoryList = ({ orders }) => {
  return (
    <HistoryListWrapper>
      <div>
        {!orders && (<HistoryListEmpty>
            <EmptyCart />
            <p>The list of orders is empty</p>
        </HistoryListEmpty>)}
        {orders &&
          orders.map(({ id, food_img_URL, food_name, price, quantity }) => (
            <OrderItem
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
      </div>
    </HistoryListWrapper>
  );
};