import { ReactComponent as LogoIcon } from 'images/Logo_food.svg';
import { LinkStyled } from './Logo.styled';

export const Logo = () => {


  return (
    <LinkStyled to="/">
      <LogoIcon />
    </LinkStyled>
  );
};
