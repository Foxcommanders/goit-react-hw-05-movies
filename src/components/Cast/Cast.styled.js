import styled from 'styled-components';

export const StyledCast = styled.div`
  margin: 0 auto;
  width: 920px;
  border: 1px solid #fff;
  border-top: none;
  padding: 40px;
  min-height: 60px;
  background-image: linear-gradient(
    39deg,
    rgba(53, 92, 94, 0.5) 6%,
    rgba(73, 78, 93, 0.5) 100%
  );
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  ul.cast {
    display: grid;
    width: 919px;
    grid-template-columns: repeat(4, minmax(150px, 1fr));
    grid-auto-rows: minmax(400px, auto);
    grid-gap: 20px 30px;
  }

  img {
    margin-bottom: 20px;
  }

  h3 {
    margin-bottom: 10px;
  }
`;
