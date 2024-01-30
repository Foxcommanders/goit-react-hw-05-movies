import { StyledSearchbar } from './Searchbar.styled';
import PropTypes from 'prop-types';

function Searchbar({ handlerSubmit, valueByDefault }) {
  const onSubmit = evt => {
    evt.preventDefault();
    handlerSubmit(evt.target.elements.search.value);
  };

  return (
    <StyledSearchbar>
      <form onSubmit={onSubmit}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          defaultValue={valueByDefault}
          required
        />
        <button type="submit"></button>
      </form>
    </StyledSearchbar>
  );
}

Searchbar.propTypes = {
  handlerSubmit: PropTypes.func.isRequired,
  valueByDefault: PropTypes.string,
};

export default Searchbar;
