import styled from 'styled-components';

export const StyledMovie = styled.div`
  width: 920px;
  display: flex;
  height: 600px;
  margin: 0 auto 60px;
  padding: 20px 60px 20px 20px;
  border: 1px solid #fff;
  background-image: linear-gradient(
    39deg,
    rgba(53, 92, 94, 0.5) 6%,
    rgba(73, 78, 93, 0.5) 100%
  );
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  color: #d9e4e7;

  img {
    margin-right: 60px;
  }

  div.movie {
    padding: 60px 0;
    position: relative;
    min-width: 160px;
  }

  h2 {
    margin-bottom: 20px;
    color: #fff;
  }

  h2.large {
    font-size: 25px;
  }

  h2.medium {
    font-size: 40px;
  }

  h2.small {
    font-size: 60px;
  }

  h3,
  b {
    margin-bottom: 15px;
  }

  b {
    display: inline-block;
    margin-right: 10px;
  }

  p {
    margin-bottom: 20px;
    line-height: 1.2em;
  }

  a span {
    display: inline-block;
    margin-right: 10px;
    letter-spacing: -0.3em;
  }

  div.star-ratings {
    margin-bottom: 35px;
    padding: 10px 0px !important;
    font-weight: normal;
  }

  div.star-container {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }

  .backLink {
    position: absolute;
    display: block;
    left: 0;
    bottom: 60px;
    color: #fff;
    font-weight: bolder;
  }

  .backLink:hover,
  .backLink:focus {
    text-decoration: underline;
  }
`;
