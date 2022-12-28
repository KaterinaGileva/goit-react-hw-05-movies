import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '?api_key=0fe38363eb34760457702cbb346d2d7a';

export const getTrending = () =>
  axios.get(`${BASE_URL}trending/all/day${API_KEY}`);

export const getMovieById = movieId =>
  axios.get(`${BASE_URL}movie/${movieId}${API_KEY}`);

export const getMovieBySearch = query =>
  axios.get(`${BASE_URL}search/movie${API_KEY}&query=${query}`);

export const getCast = movieId =>
  axios.get(`${BASE_URL}movie/${movieId}/credits${API_KEY}`);
  
  export const getReviews = movieId =>
  axios.get(`${BASE_URL}movie/${movieId}/reviews${API_KEY}`);