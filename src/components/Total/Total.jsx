
import { useSelector } from 'react-redux';
import {  TotalWrapper } from './Total.styled';
import { selectTotal } from 'redux/order/selectors';

export const Total = () => {

  const total = useSelector(selectTotal);
  return (
    <TotalWrapper>
      <p>{total}$</p>
    </TotalWrapper>
  );
};
