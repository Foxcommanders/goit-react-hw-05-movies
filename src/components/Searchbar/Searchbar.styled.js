import styled from 'styled-components';
import lupa from '../../images/lupa.png';

export const StyledSearchbar = styled.div`
  margin-bottom: 40px;

  form {
    display: flex;
    align-items: center;
  }

  input {
    width: 600px;
    height: 32px;
    padding: 0 16px;
    margin-right: 20px;
    border: none;
    border-radius: 10px;
    outline: none;
    background-color: #ffffffbd;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    color: #201f1f;
    letter-spacing: 0.1em;
    font-size: 16px;
  }

  input:focus {
    height: 32px;
    background-color: #ffffffe6;
  }

  button {
    display: inline-block;
    border: 0;
    background-size: 45%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #c0c5c4;
    width: 42px;
    height: 32px;
    border-radius: 20px;
    background-image: url(${lupa});
    cursor: pointer;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -2.3px 2.5px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -3.6px 0.3px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -7px 4px 0px inset,
      rgba(0, 0, 0, 0.06) 0px 0.2px 1px, rgba(0, 0, 0, 0.09) 0px 0.4px 0.2px,
      rgba(0, 0, 0, 0.09) 0px 0.8px 0.4px, rgba(0, 0, 0, 0.09) 0px 1.6px 0.8px,
      rgba(0, 0, 0, 0.09) 0px 3.2px 1.6px;
    transition: color 250ms linear;
  }

  button:hover {
    background-color: #dce7e5e6;
  }
`;
