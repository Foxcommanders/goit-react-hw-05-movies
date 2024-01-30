import { StyledNavbar, Link } from './Navbar.styled';

function Navbar() {
  return (
    <StyledNavbar>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </StyledNavbar>
  );
}

export default Navbar;
