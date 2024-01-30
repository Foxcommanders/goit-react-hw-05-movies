import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavbar = styled.nav`
  display: flex;
  gap: 12px;
  font-size: 26px;
`;

export const Link = styled(NavLink)`
  width: 90px;
  font-weight: bold;
  color: rgba(203, 224, 230, 0.8);
  text-decoration: none;

  &.active {
    color: #fff;
  }
`;
/* &.active::after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 3px;
    border-radius: 2px;
    background: #cbe0e6;
    transform: translateY(5px);} */

/* transition: color 250ms ease-in;  */

// &:hover {   color: rgba(31, 110, 12, 0.8);    }
