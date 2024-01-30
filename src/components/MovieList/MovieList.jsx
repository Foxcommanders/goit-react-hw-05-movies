import React from 'react';
import { StyledMovieList } from './MovieList.styled';
import MovieLink from 'components/MovieLink/MovieLink';
import PropTypes from 'prop-types';

function MovieList({ listData }) {
  return (
    <StyledMovieList>
      {listData.map(
        ({ id, title, poster_path, release_date, vote_average }) => {
          return (
            <MovieLink
              key={id}
              title={title}
              image={poster_path}
              date={release_date}
              rating={vote_average}
              id={id}
            />
          );
        }
      )}
    </StyledMovieList>
  );
}

MovieList.propTypes = {
  listData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number,
    })
  ),
};

export default MovieList;
