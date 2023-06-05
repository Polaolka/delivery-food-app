import React from 'react';

// import PropTypes from 'prop-types';

export const OrderItem = ({ id, food_img_URL, food_name, price }) => {
  return (
    <>
      <img
        src={food_img_URL}
        alt={food_name}
      />
      <div>
        <h3>{food_name}</h3>
        <div>price: {price}</div>
        <button>Add to cart</button>
      </div>
    </>
  );
};
