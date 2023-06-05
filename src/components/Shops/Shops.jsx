import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  Aside,
  ShopsList,
  ButtonClearCart,
  ShopsUL,
  ShopsItem,
  ShopsWrapper,
  ShopButton
} from './Shops.styled';


import { Gallery } from 'components/Gallery/Gallery';
import { selectAllShops } from '../../redux/shop/selectors';
import { getAllShops } from '../../redux/shop/operations';
import { selectedShop } from 'redux/order/selectors';
// import { getAllShops } from '../../redux/shop/operations';

export const ShopsEl = ( ) => {
  const curentShop = useSelector(selectedShop);

  
  const [selectShop, setSelectShop] = useState(null);
  const dispatch = useDispatch();
  const shops = useSelector(selectAllShops);

  useEffect(() => {
    dispatch(getAllShops());
  }, [dispatch]);

  function onSelectShop(event) {
    const selectShopId = event.target.dataset.currentshopid;
    setSelectShop(selectShopId);
  }

  return (
    <ShopsWrapper>
      <Aside>
        <ShopsList>
          <h3>Shops:</h3>
          <ShopsUL>

          {shops &&
          shops.map(shop => (
            <ShopsItem key={shop._id}
            >
              <ShopButton
              highlighted={shop._id === curentShop} // Передайте highlighted пропс
              onClick={onSelectShop}
              data-currentshopid={shop._id}
              >
                {shop.shop_name}
              </ShopButton>
            </ShopsItem>
          ))}
          </ShopsUL>
        </ShopsList>
        <ButtonClearCart>Clear Cart</ButtonClearCart>
      </Aside>
      <Gallery shop_owner_food={selectShop}/>
    </ShopsWrapper>
  );
};
