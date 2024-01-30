import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'a3849424f9dfb073f2e7abf0355069b1',
  },
});

export const requestTrendingMovies = async () => {
  const { data } = await instance.get(`trending/movie/day`);
  return data;
};

export const requestFindingMovies = async q => {
  const { data } = await instance.get(`search/movie`, {
    params: {
      query: q,
      include_adult: false,
    },
  });
  return data;
};

export const requestMovieDetails = async id => {
  const { data } = await instance.get(`movie/${id}`);
  return data;
};

export const requestReview = async id => {
  const { data } = await instance.get(`movie/${id}/reviews`);
  return data;
};

export const requestCast = async id => {
  const { data } = await instance.get(`movie/${id}/credits`);
  return data;
};
