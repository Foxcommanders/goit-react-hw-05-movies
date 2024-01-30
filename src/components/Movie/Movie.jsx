import { StyledMovie } from './Movie.styled';
import { useLocation, Link} from 'react-router-dom';
import { useRef } from 'react';
import Rating  from 'components/Rating/Rating';
import backdrop from '../../images/backdropPhoto.png';
import PropTypes from 'prop-types';

function Movie({ movieInfo }) {
  const location = useLocation();
  const backLink = useRef(location.state?.from);

  const image = `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`;

  const genresNormalized = movieInfo.genres
    ?.map(genre => genre.name)
    .join(', ');

  const description =
    movieInfo.overview?.length > 700
      ? movieInfo.overview.split('').splice(0, 700).join('') + '...'
      : movieInfo.overview;

  function getTitleStyle() {
    const length = movieInfo.title?.length;
    let titleStyle;

    if (length < 15) {
      titleStyle = 'small';
    } else if (length > 30) {
      titleStyle = 'large';
    } else {
      titleStyle = 'medium';
    }

    return titleStyle;
  }

  const titleStyle = getTitleStyle();

  return (
    <StyledMovie>
      <img
        src={movieInfo.poster_path ? image : backdrop}
        alt={movieInfo.title}
      />
      <div className="movie">
        <h2 className={titleStyle}>{movieInfo.title}</h2>
        <h3>Overview</h3>
        <p>{description}</p>
        <p>
          <b>Genres:</b>
          <span>{genresNormalized}</span>
        </p>
        {movieInfo.vote_average > 0 && (
          <Rating rating={movieInfo.vote_average} />
        )}
        <Link to={backLink.current ?? '/'} className="backLink">
          <span>&#65308;&#65308;</span>GO BACK
        </Link>
      </div>
    </StyledMovie>
  );
}

Movie.propTypes = {
  movieInfo: PropTypes.shape({
    poster_path: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    overview: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
  }),
};

export default Movie;
