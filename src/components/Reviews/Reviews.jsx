import { StyledReviews } from './Reviews.styled';
import { requestReview } from 'services/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Notification from 'components/Notification/Notification';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState();
  const [loading, setLoading] = useState(false);
  const defaultReview = "We don't have any reviews for this movie.";

  useEffect(() => {
    async function getReviews() {
      try {
        setLoading(true);
        const data = await requestReview(movieId);
        setReviews(data.results);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <StyledReviews>
      {reviews?.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li className="review" key={review.id}>
              <h3>{review.author}</h3>
              <span>{review.created_at?.slice(0, 10)}</span>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>{defaultReview}</p>
      )}
      {loading && <Loader />}
      <Notification />
    </StyledReviews>
  );
};

export default Reviews;
