import {  ButtonContainer } from 'components/Form/Form.styled';
import { InputWraper } from 'components/Form/Input.styled';
import { Button } from 'components/Styled';
// import { useNavigate } from 'react-router-dom';
import { FormFields, CartFormStyled, Caption, FormEl } from './HistoryForm.styled';
import { useSelector } from 'react-redux';
import Message from 'components/Message/Message';
import { ErrorMessage, Field, Formik } from 'formik';
import * as yup from 'yup';
import { selectError } from 'redux/order/selectors';


export const HistoryForm = () => {

  const message = useSelector(selectError);

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Email must be a valid email')
      .min(3)
      .max(254)
      .required('Email is a required field'),
      phone: yup
      .string()
      .matches(/^\+380\d{9}$/, 'Невірний формат номеру телефона')
      .required('Phone is a required field'),
      
  });

  const initialValues = { email: '', password: '' };

  const handleSubmit = (values, { resetForm }) => {

    //if (!message) resetForm();
  };

  // const navigate = useNavigate();
  // const redirection = () => {
  //   const path = '/register';

  //   navigate(path);
  // };

  return (
    <CartFormStyled>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormEl autoComplete="off">
          <Caption>Contact Information</Caption>
          <FormFields>

            <InputWraper>
              <Field
                type="text"
                name="email"
                placeholder=" "
                autoComplete="off"
              />
              <label htmlFor="email">Email *</label>
              <ErrorMessage className="error" component="div" name="email" />
            </InputWraper>

            <InputWraper>
              <Field
                type="text"
                name="phone"
                placeholder=" "
                autoComplete="off"
              />
              <label htmlFor="phone">Phone *</label>
              <ErrorMessage className="error" component="div" name="phone" />
            </InputWraper>
          </FormFields>
          <ButtonContainer>
            <Button className="orange regLogbutton" type="submit">
              Submit
            </Button>
          </ButtonContainer>
        </FormEl>
      </Formik>
      {message && <Message>{message}</Message>}
    </CartFormStyled>
  );
};