import styled from 'styled-components';

export const StyledMovieLink = styled.li`
  &:hover div {
    background: linear-gradient(
      39deg,
      rgba(53, 92, 94, 0.7) 6%,
      rgba(73, 78, 93, 0.2) 100%
    );
    color: #fff;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 190px;
    height: 450px;
    padding: 15px 20px;
    background-image: linear-gradient(
      39deg,
      rgba(53, 92, 94, 0.5) 6%,
      rgba(73, 78, 93, 0.5) 100%
    );
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
    color: rgb(203, 224, 230);
    transition: background-image 0.25s ease, color 0.25s ease;
    overflow: hidden;
  }

  img {
    margin-bottom: 12px;
    border: 1px solid rgba(185, 185, 185, 0.8);
    height: 284px;
  }

  h2 {
    max-height: 88px;
    overflow: hidden;
    margin-bottom: 6px;
  }

  p,
  h2 {
    flex-grow: 2;
  }
`;
