import React, { useEffect, useState } from 'react';
import { FoodItem } from '../FoodItem/FoodItem';
import { FoodsListWrapper, FoodsItem } from './Gallery.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFoods } from '../../redux/food/operations';

import { selectAllFood } from '../../redux/food/selectors';
import { selectedShop } from 'redux/order/selectors';

export const Gallery = ({ shop_owner_food }) => {
  const dispatch = useDispatch();

  const [curentShop, setCurentShop] = useState(null);
  
  const foods = useSelector(selectAllFood);
  useEffect(() => {
    const data = curentShop || shop_owner_food ? curentShop || shop_owner_food : {};
    dispatch(getAllFoods({ shop_owner_food: data }));
  }, [dispatch, curentShop, shop_owner_food]);

  const selectedShopValue = useSelector(selectedShop); // Замість useSelector(selectedShop)
  useEffect(() => {
    setCurentShop(selectedShopValue);
  }, [selectedShopValue]);

  return (
    <FoodsListWrapper>

        {foods &&
          foods.map(
            ({ _id, food_img_URL, food_name, price, shop_owner_food }) => (
              <FoodItem
                // onClickImg={onClickImg}
                food_img_URL={food_img_URL}
                key={`${_id}`}
                id={_id}
                food_name={food_name}
                price={price}
                shop_owner_food={shop_owner_food}
                target="_blank"
                rel="noreferrer noopener"
                
              />
            )
          )}
    </FoodsListWrapper>
  );
};
