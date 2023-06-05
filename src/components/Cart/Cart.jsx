import { CartStyled } from './Cart.styled';
import { CartForm } from '../CartForm/CartForm';
import { CartList } from '../CartList/CartList';


const CartEl = () => {


  return (
    <CartStyled>
      <CartForm />
      <CartList />
    </CartStyled>
  );
};
export default CartEl;
