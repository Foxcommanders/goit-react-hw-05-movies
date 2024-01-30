import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledAdditionalInfo = styled.div`
  ul.info {
    display: flex;
    width: 1002px;
    margin: 0 auto;
  }

  li.info {
    border: 1px solid #fff;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom: none;
    overflow: hidden;
  }

  li.info:first-child {
    border-left: 1px solid #fff;
    border-right: none;
  }

  li.info:nth-child(2) {
    border-top-left-radius: 20px;
    border-left: none;
    border-right: none;
  }

  li.info:last-child {
    height: 59px;
    width: 729px;
    border-top-right-radius: 10px;
    border-top-left-radius: 20px;
    border-bottom: 1px solid #fff;
    display: flex;
    align-items: center;
  }

  h2 {
    margin-left: 127px;
    color: rgb(203, 224, 230);
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d9e4e7;
  font-size: 20px;
  width: 140px;
  height: 60px;
  font-weight: bolder;
  background-image: linear-gradient(
    39deg,
    rgb(195 205 205 / 28%) 6%,
    rgb(182 192 221 / 50%) 100%
  );
  transition: color 250ms ease;

  &:hover {
    color: #fff;
  }

  &.active {
    background-image: linear-gradient(
      39deg,
      rgba(53, 92, 94, 0.5) 6%,
      rgba(73, 78, 93, 0.5) 100%
    );
    border-bottom: none;
    color: #fff;
  }
`;

/* background-image: linear-gradient(
      212deg,
      rgb(202 211 226) 6%,
      rgb(28 43 46) 100%
    ); */
