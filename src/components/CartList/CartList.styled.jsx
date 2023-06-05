import styled from '@emotion/styled';
// import { colors } from 'constants';
// import { mediaSizes } from 'constants';
// import { transition } from 'helpers';

export const CartListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 20px;
  border: 1px solid rgb(149, 157, 165);
  border-radius: 4px;
  width: 100%;
`;

export const TotalBox = styled.div`
  border-radius: 4px;
  margin-top: 30px;
  padding: 10px 30px;
  border: 1px solid rgb(149, 157, 165);
`;

export const CartListEmpty = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  p {
    margin-top: 20px;
  }
`;

export const CartBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid rgb(149, 157, 165);
  border-radius: 4px;
  width: 55%;

`;
