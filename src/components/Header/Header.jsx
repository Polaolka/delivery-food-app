import {
  HeaderStyled,
  HeaderContainer,
} from './Header.styled';
import { Logo } from 'components/Logo/Logo';
import { IoIosBasket } from 'react-icons/io';
import { AiOutlineHistory } from 'react-icons/ai';
import { RiCouponLine } from 'react-icons/ri';
import { LinkStyled } from './Link.styled';
import { Total } from 'components/Total/Total';



const Header = () => {


  return (
    <>
      <HeaderStyled>
        <HeaderContainer>
          <Logo />
          <LinkStyled to="/cart"><IoIosBasket />Shoping Cart</LinkStyled>
          <LinkStyled to="/history"><AiOutlineHistory/>History</LinkStyled>
          <LinkStyled to="/coupons"><RiCouponLine/>Coupons</LinkStyled>
          <Total/>
        </HeaderContainer>
      </HeaderStyled>
    </>
  );
};

export default Header;
