import { getMovies } from "API";
import { MovieList } from "components/MovieList/MovieList";
//import { MovieList } from "components/MovieList/MovieList";
import { SearchBox } from "components/SearchBox/SearchBox";
import { useMemo } from "react";
import { useEffect, useState } from "react";
import {  useSearchParams } from "react-router-dom";
//import { useLocation } from "react-router-dom";


const Movies = () => {
  //const movies = getMovies();
  //const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get("filter") ?? "";

useEffect(() => {
  getMovies().then(setMovies);
}, []);
console.log('movies', movies);

const visibleMovies = useMemo(() => {
    return movies.filter(movie =>
    movie.name.toLowerCase().includes(movieName.toLowerCase())
  );
  }, [movies, movieName]);

  const updateQueryString = (value) => {
    const nextParams = value !== "" ? { filter: value  } : {};
   setSearchParams(nextParams);
 };

  return (
    <main>
      <SearchBox value={movieName} onChange={updateQueryString} />
      {visibleMovies.length > 0 && ( 
      <MovieList movies={visibleMovies} />
      )}
    </main>
  );
};

export default Movies;