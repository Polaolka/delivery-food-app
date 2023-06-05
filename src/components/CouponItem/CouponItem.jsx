import React from 'react';
import {
  CouponBox,
} from './CouponItem.styled';
import { Button } from 'components/Styled';

import { toast } from 'react-toastify';

// import PropTypes from 'prop-types';

export const CouponItem = ({ _id, coupon_name, code }) => {
  const copyCouponCode = () => {
    navigator.clipboard.writeText(code)
      .then(() => {
        toast.success('Coupon code copied to clipboard!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      })
      .catch((error) => {
        toast.error('Failed to copy coupon code', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
          console.log(error);
      });
  };

  return (
    <CouponBox>
      <h3>{coupon_name}</h3>
      <Button 
      className="orange regLogbutton"
      onClick={copyCouponCode}>{code}</Button>
    </CouponBox>
  );
};
