import { Form } from 'formik';
import styled from '@emotion/styled';
import { mediaSizes } from 'constants/media';
import { container } from 'helpers';
import { colors } from 'constants';

export const FormEl = styled(Form)`
  padding: 10px 50px 10px 30px;

`;

export const CartFormStyled = styled.div`
  /* ${container}; */
  border: 1px solid rgb(149, 157, 165);
  border-radius: 4px;
  width: fit-content;
  margin: 0;
  @media screen and (min-width: ${mediaSizes.tablet}) {
  }
`;

export const FormFields = styled.div`
  margin-bottom: 60px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    max-width: 240px;
  }
`;

export const Caption = styled.p`
  margin: 0;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-right: auto;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: ${colors.color1};
  text-align: center;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    text-align: left;
  }
`;
