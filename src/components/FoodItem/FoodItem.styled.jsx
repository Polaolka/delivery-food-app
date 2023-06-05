import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Button } from 'components/Styled';
import { mediaSizes } from 'constants/media';

export const LinkStyled = styled(Link)`
background-color: rgba(202, 202, 202, 0.6);
border-radius: 2px;
box-shadow: 0 2px 4px -1px hsla(0,73%,74%,.2), 0 4px 5px 0 hsla(0,73%,74%,.14), 0 1px 10px 0 hsla(0,73%,74%,.12);
color: #494141;
height: 420px;
line-height: 1.5;
overflow: hidden;
text-decoration: none; 
`
export const ItemStyled = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
align-items: center;
padding: 5px;
border: 1px solid  #948484;
border-radius: 4px;
overflow: hidden;
box-shadow: 0 2px 4px -1px hsla(0,73%,74%,.2), 0 4px 5px 0 hsla(0,73%,74%,.14), 0 1px 10px 0 hsla(0,73%,74%,.12);
width: 50%;
height: 50%
`
export const ImgStyled = styled.img`

object-fit: cover;
width: 100%;
height: 60%;
`
export const OrderBtnStyled = styled(Button)`
margin-bottom: 4px;
  @media screen and (min-width: ${mediaSizes.desktop}) {
    min-width: 200px;
    margin: 20px auto;
  }
`
