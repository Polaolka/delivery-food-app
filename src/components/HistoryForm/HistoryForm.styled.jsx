import { Form } from 'formik';
import styled from '@emotion/styled';
import { mediaSizes } from 'constants/media';
import { container } from 'helpers';
import { colors } from 'constants';

export const FormEl = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 50px 10px 30px;
  border: 1px solid rgb(149, 157, 165);
  border-radius: 4px;
  width: 100%;
  margin: 10px auto;
`;

export const CartFormStyled = styled.div`
  /* ${container}; */
  width: 100%;

  @media screen and (min-width: ${mediaSizes.tablet}) {
  }
`;

export const FormFields = styled.div`
  margin-bottom: 20px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    max-width: 240px;
  }
`;

export const Caption = styled.p`
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: auto;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: ${colors.color1};
`;
