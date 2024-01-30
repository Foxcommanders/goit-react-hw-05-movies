// import { StyledMovies } from './Movies÷.styled';
import MovieList from 'components/MovieList/MovieList';
import Searchbar from 'components/Searchbar/Searchbar';
import Loader from 'components/Loader/Loader';
import Notification from 'components/Notification/Notification';
import { useState, useEffect } from 'react';
import { requestFindingMovies } from 'services/api';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Movies = () => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handlerSubmit = value => {
    setSearchParams({ q: value });
  };

  const searchValue = searchParams.get('q');

  useEffect(() => {
    if (!searchValue) return;
    async function searchMovies() {
      try {
        setLoading(true);
        const data = await requestFindingMovies(searchValue);
        if (!data.results.length) {
          toast.error('No movies found');
        }
        setFilteredMovies(data.results);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
    searchMovies();
  }, [searchValue]);

  return (
    <main>
      <Searchbar handlerSubmit={handlerSubmit} valueByDefault={searchValue} />
      {filteredMovies.length > 0 && <MovieList listData={filteredMovies} />}
      {loading && <Loader />}
      <Notification />
    </main>
  );
};

export default Movies;
