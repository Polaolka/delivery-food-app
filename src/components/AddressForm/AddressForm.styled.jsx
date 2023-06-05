import styled from '@emotion/styled';
import { colors } from 'constants';
import { BsSearchHeart } from 'react-icons/bs';

export const AddressInput = styled.input`
  width: 80%;
  height: 20px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid ${colors.color3};
  padding: 12px 16px;
  outline: none;
  background-color: #fff;
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 10px;
`;

export const SearchIcon = styled(BsSearchHeart)`
color: white;
`

export const AddressBtn = styled.button`
    background-color: #fc842d;
    border: none;
    border-radius: 4px;
    padding: 4px 6px;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);

    &:hover {
        animation: jelly 0.5s;
  }
  @keyframes jelly {
    25% {
      transform: scale(0.9, 1.1);
    }

    50% {
      transform: scale(1.1, 0.9);
    }

    75% {
      transform: scale(0.95, 1.05);
    }
  }
`;

