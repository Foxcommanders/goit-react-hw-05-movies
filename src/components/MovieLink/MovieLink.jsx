import { StyledMovieLink } from './MovieLink.styled';
import { Link } from 'react-router-dom';
import backdrop from '../../images/backdropPhoto.png';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function MovieLink({ id, title, image, date, rating }) {
  const primaryImage = `https://image.tmdb.org/t/p/w500${image}`;
  const location = useLocation();
  return (
    <StyledMovieLink>
      <Link
        to={location.pathname === '/movies' ? `${id}` : `movies/${id}`}
        state={{ from: location }}
      >
        <div>
          <img
            src={image ? primaryImage : backdrop}
            alt={title}
            loading="lazy"
          />
          <h2>{title}</h2>
          <p>{date.replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)}</p>
          {rating !== 0 && <p>Rating: {rating?.toFixed(1)}</p>}
        </div>
      </Link>
    </StyledMovieLink>
  );
}

MovieLink.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  image: PropTypes.string,
  rating: PropTypes.number,
};

export default MovieLink;
