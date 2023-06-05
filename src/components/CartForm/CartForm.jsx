import { ButtonContainer } from 'components/Form/Form.styled';
import { InputWraper } from 'components/Form/Input.styled';
import { Button } from 'components/Styled';
import { FormFields, CartFormStyled, Caption, FormEl } from './CartForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import Message from 'components/Message/Message';
import { ErrorMessage, Field, Formik } from 'formik';
import * as yup from 'yup';
import { GoogleBlock } from 'components/GoogleBlock/GoogleBlock';
import { selectUser, selectCart } from '../../redux/order/selectors';
import { useState } from 'react';
import { selectError } from '../../redux/order/selectors';
import { setCurrentUser } from 'redux/order/slice';
import { addOrder, addUser } from 'redux/order/operations';

export const CartForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const cart = useSelector(selectCart);
  // const statusAddContact = useSelector(selectAddUserStatus);
  const userId = user._id ?? '';
  const userName = user.name ?? '';
  const userPhone = user.phone ?? '';
  const userEmail = user.email ?? '';
  const userAddress = user.address ?? '';

  // const [_id, set_Id] = useState(userId);
  const [name, setName] = useState(userName);
  const [phone, setPhone] = useState(userPhone);
  const [email, setEmail] = useState(userEmail);
  const [address, setAddress] = useState(userAddress);
  const [contactInfoAdded, setContactInfoAdded] = useState(false);

  const handleOnChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;

      case 'phone':
        setPhone(e.target.value);
        break;

      case 'email':
        setEmail(e.target.value);
        break;

      case 'address':
        setAddress(e.target.value);
        break;

      default:
        break;
    }
  };
  const initialValues = {
    _id: userId,
    name,
    email,
    phone,
    address,
  };

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
    name: yup
      .string()
      .min(3, 'Name must be at least 3 characters')
      .max(254, 'Name must be less than or equal to 254 characters')
      .required('Name is a required field'),
    address: yup
      .string()
      .min(20, 'Address must be at least 8 characters')
      .max(200, 'Address must be less than or equal to 200 characters')
      .required('Address is a required field'),
  });

  const handleSubmit = ({ name, phone, address, email }) => {
    const sendData = {
      name,
      email,
      phone,
      address,
    };

    dispatch(setCurrentUser(sendData));
    dispatch(addUser(sendData));
    setContactInfoAdded(true);
  };
  const sendOrderData = {  
  owner_id: userId,
  shop: cart.shop, 
  products: cart.products.map(({ id, quantity }) => ({ product: id, quantity }))
  }
  const handleOrderSubmit = () => {

    dispatch(addOrder(sendOrderData));
  };

  return (
    <CartFormStyled>
      <GoogleBlock />
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormEl autoComplete="off" onChange={handleOnChange}>
          <Caption>Contact Information</Caption>
          <FormFields>
            <InputWraper>
              <Field
                type="text"
                name="name"
                placeholder=" "
                autoComplete="off"
              />
              <label htmlFor="name">Name *</label>
              <ErrorMessage className="error" component="div" name="name" />
            </InputWraper>

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

            <InputWraper>
              <Field
                type="text"
                name="address"
                placeholder=" "
                autoComplete="off"
              />
              <label htmlFor="address">Address *</label>
              <ErrorMessage className="error" component="div" name="address" />
            </InputWraper>
          </FormFields>
          <ButtonContainer>
            <Button className="orange regLogbutton" type="submit">
              Add contact information
            </Button>
            <Button
              className="orange regLogbutton"
              type="button"
              onClick={handleOrderSubmit}
              disabled={!contactInfoAdded}
            >
              Send order
            </Button>
          </ButtonContainer>
        </FormEl>
      </Formik>
      {message && <Message>{message}</Message>}
    </CartFormStyled>
  );
};
