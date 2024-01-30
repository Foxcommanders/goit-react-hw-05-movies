import styled from 'styled-components';

export const StyledAdditionalButton = styled.button`
  display: block;
  margin: 0 auto;
  width: 1000px;
  border: 1px solid #fff;
  height: 60px;
  background-color: transparent;
  border-radius: 10px;
  font-weight: bold;
  font-size: 23.5px;
  color: rgb(203, 224, 230);
  line-height: 27.6px;
  cursor: pointer;
  box-shadow: inset rgba(0, 0, 0, 0.6) 0 -3px 8px,
    inset rgba(252, 255, 255, 0.7) 0 3px 8px, rgba(0, 0, 0, 0.8) 0 3px 8px -3px;
  background-image: linear-gradient(
    39deg,
    rgba(53, 92, 94, 0.5) 6%,
    rgba(73, 78, 93, 0.5) 100%
  );
  transition: background-color 0.25s ease, color 0.25s ease;
  &.hidden {
    display: none;
  }
  &:hover,
  &:focus {
    background-color: rgba(252, 255, 255, 0.3);
    color: #fff;
  }
`;
