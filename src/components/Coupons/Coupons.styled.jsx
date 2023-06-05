import styled from '@emotion/styled';
import { Button } from 'components/Styled';
import { mediaSizes } from 'constants/media';


export const CouponsWrapper = styled.div`
display: flex;

  width: 100%;
  gap: 20px;
  margin: 10px auto 30px 10px;
  padding: 30px;
`;


export const CouponButton = styled(Button)`
  @media screen and (min-width: ${mediaSizes.desktop}) {
    min-width: 200px;
    margin: 20px auto;
  }
`;

