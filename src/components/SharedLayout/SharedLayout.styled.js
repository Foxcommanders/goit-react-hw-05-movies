import styled from 'styled-components';
import background from '../../images/background.png';

export const StyledSharedLayout = styled.div`
  min-height: 100vw;
  width: 100vw;
  background-color: #182729;
  background-image: linear-gradient(
      rgba(74, 74, 75, 0.3),
      rgba(97, 97, 105, 0.3)
    ),
    url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;

  main {
    padding: 30px 60px;
    color: white;
  }

  h1{
    margin: 0 0 40px;
    color: rgb(203, 224, 230);
    /* color: rgb(204 217 231); */
  }
`;

// rgba(151, 142, 142, 0.3),
// rgba(174, 186, 199, 0.3)
