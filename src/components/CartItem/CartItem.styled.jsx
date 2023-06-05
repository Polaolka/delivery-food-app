import styled from '@emotion/styled';

export const CartItemWrapper = styled.div`
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;
export const CartThumb = styled.div`
  height: 80px;
  width: 80px;

`

export const CartImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`
export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const QuantityButton = styled.button`
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  color: #494141;
  font-size: 16px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }

  &:disabled {
    background-color: #f8f8f8;
    color: #ccc;
    cursor: not-allowed;
  }
`;
export const QuantityBox = styled.div`
border: 1px solid #fc842d;
padding: 5px 10px;
`
