import styled from 'styled-components';

export const StyledReviews = styled.div`
  width: 900px;
  border: 1px solid #fff;
  border-top: none;
  padding: 40px 60px 40px 40px;
  min-height: 60px;
  margin: 0 auto;
  background-image: linear-gradient(
    39deg,
    rgba(53, 92, 94, 0.5) 6%,
    rgba(73, 78, 93, 0.5) 100%
  );
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  p {
    margin-left: 20px;
    font-size: 18px;
    font-weight: bolder;
    color: #d9e4e7;
    padding: 20px;
  }

  ul {
    display: inline !important;
  }

  li.review,
  li:first-child.review,
  li:last-child.review,
  li:nth-child(2).review {
    position: static;
    height: 100%;
    width: 100%;
    display: inline-block;
    background-color: transparent;
    border: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    background-image: none;
  }

  li.review:not(:last-child) {
    margin-bottom: 20px;
  }

  h3 {
    margin-bottom: 20px;
  }

  span {
    display: block;
    font-size: 12px;
    font-weight: bolder;
    margin-bottom: 15px;
  }

  ul p {
    line-height: 1.2em;
    margin: 0px;
    font-size: 16px;
    font-weight: normal;
    color: black;
    /* border-radius: 10px; */
    background-image: linear-gradient(
      319deg,
      rgb(195 205 205 / 55%) 6%,
      rgb(182 192 221 / 50%) 100%
    );
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  }
`;
