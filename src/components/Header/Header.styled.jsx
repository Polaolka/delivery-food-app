import styled from '@emotion/styled';
import { mediaSizes } from 'constants/media';
import { container } from 'helpers';
import { colors } from 'constants/colors';

export const HeaderStyled = styled.header`
  background-color: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  position: sticky;
  z-index: 4;
  top: 0;
  width: 100%;
  height: 80px;
  border-bottom: 2px solid ${colors.color3};

  &.bg {
    background-color: #fff;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    border-bottom: none;
  }
`;

export const HeaderContainer = styled.div`
  ${container}
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
  height: 80px;
  /* justify-content: space-between; */
`;

export const MenuButton = styled.button`
  border: none;
  padding: 10px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.svg`
  width: 12px;
  height: 12px;

  @media screen and (min-width: ${mediaSizes.mobile}) {
    width: 14px;
    height: 14px;
    z-index: 10;
  }
`;
