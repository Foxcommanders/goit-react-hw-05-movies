import { StyledCast } from './Cast.styled';
import { requestCast } from 'services/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Notification from 'components/Notification/Notification';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState();
  const [loading, setLoading] = useState(false);

  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    async function getCast() {
      try {
        setLoading(true);
        const data = await requestCast(movieId);
        setCast(data.cast);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <StyledCast>
      <ul className="cast">
        {cast?.map(({ credit_id, profile_path, name, character }) => {
          return (
            
              <li className="cast" key={credit_id}>
                <img
                  src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : defaultImg}
                  alt={name}
                  loading="lazy"
                /> 
                <h3>{name}</h3>
                <p>{character}</p>
              </li>
            
          );
        })}
      </ul>
      {loading && <Loader />}
      <Notification />
    </StyledCast>
  );
};

export default Cast;
