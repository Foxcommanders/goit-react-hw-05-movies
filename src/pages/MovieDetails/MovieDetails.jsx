import { requestMovieDetails } from 'services/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Movie from 'components/Movie/Movie';
import Loader from 'components/Loader/Loader';
import AdditionalButton from 'components/AdditionButton/AdditionButton';
import Notification from 'components/Notification/Notification';

const MovieDetails = () => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 100);
  }, []);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setLoading(true);
        const data = await requestMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
    getMovieDetails();
  }, [movieId]);

  return (
    <main>
      <Movie movieInfo={movie} />
      <AdditionalButton />
      {loading && <Loader />}
      <Notification/>
    </main>
  );
};

export default MovieDetails;
