import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  CouponsWrapper,
} from './Coupons.styled';

import { CouponItem } from 'components/CouponItem/CouponItem';
import { selectAllCoupons } from 'redux/coupon/selectors';
import { getAllCoupons } from 'redux/coupon/operations';


export const CouponsEl = () => {
  const dispatch = useDispatch();
  const coupons = useSelector(selectAllCoupons);

  useEffect(() => {
    dispatch(getAllCoupons());
  }, [dispatch]);


  return (
    <CouponsWrapper>
            {coupons &&
              coupons.map(coupon => (
                <CouponItem key={coupon._id}
                coupon_name ={coupon.coupon_name} 
                code={coupon.code}>
                </CouponItem>
              ))}
    </CouponsWrapper>
  );
};
