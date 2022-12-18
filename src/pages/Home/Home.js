import { getMovies } from 'API';
import { MovieList } from 'components/MovieList/MovieList';
//import PropTypes from 'prop-types';
//import css from './Home.module.css';
//import { MovieList } from "../components/MovieList";
//import { getFilms } from "../API.js";


export const Home = () => {
  const movies = getMovies();
  return (
    <main>
      <h1>Tranding today</h1>
      <MovieList movies={movies} />
    </main>
  );
};
  

//Home.propTypes = {
 // items: PropTypes.arrayOf(
  //  PropTypes.shape({
   //   id: PropTypes.string.isRequired,
     // name: PropTypes.string.isRequired,
     
  //  })
 // ),
//};


