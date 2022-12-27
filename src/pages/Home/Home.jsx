//import { getMovies } from "API";

import MoviesPopular from "components/MoviesPopular/MoviesPopular";
import { useEffect, useState } from "react";


const Home = () => {
  
  const [moviesPopular, setMoviesPopular] = useState([]);

  

useEffect(() => {
  getMovies().then(setMoviesPopular);
}, []);
//console.log('movies', movies);



  return (
    <main>
      {moviesPopular && <MoviesPopular items={moviesPopular.results} />}
      <h1>Tranding today</h1>
      
      
  
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
export default Home;

