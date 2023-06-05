import styled from '@emotion/styled';
import { container } from 'helpers';
import { Button } from 'components/Styled';
import { mediaSizes } from 'constants/media';
import { colors } from 'constants';


export const ShopsWrapper = styled.div`
display: flex;
  height: 100vh;
  width: 100%;
  margin: 10px auto 30px 10px;
  padding: 20px;
`;

export const Aside = styled.div`
  border: 1px solid rgb(149, 157, 165);
  border-radius: 8px;
  height: 100vh;
  width: 30%;
  margin: 10px auto 30px 10px;
  padding: 20px;
`;

export const ButtonClearCart = styled(Button)`
  @media screen and (min-width: ${mediaSizes.desktop}) {
    min-width: 200px;
    margin: 20px auto;
  }
`;

export const ShopsList = styled.nav`
  /* ${container}; */
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 20px;
  padding-bottom: 20px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    align-items: flex-start;
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.4;
    color: ${colors.color4};
    text-align: left;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      font-size: 30px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      font-size: 34px;
    }
  }
`;
export const ShopsUL = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  width: 100%;
`;
export const ShopsItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ShopButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  color: #9b9faa;
  color: ${props => (props.highlighted ? '#333' : '#9b9faa')};
  font-weight: ${props => (props.highlighted ? '700' : '500')};
  @media screen and (min-width: ${mediaSizes.tablet}) {
      font-size: 24px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      font-size: 28px;
    }
`