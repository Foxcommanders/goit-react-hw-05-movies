import styled from 'styled-components';

export const StyledMovieList = styled.ul`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
grid-gap: 20px 30px;
justify-items: center;
`;