import StarRatings from 'react-star-ratings';
import PropTypes from 'prop-types';

const Rating = ({ rating }) => {
  return (
    <StarRatings
      rating={rating / 2}
      starDimension="40px"
      starSpacing="15px"
      starRatedColor="#d2dc1d"
    />
  );
};

Rating.propTypes ={
  rating: PropTypes.number,
}

export default Rating;
