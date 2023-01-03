import { getMovieBySearch } from "service/API";
import MoviesPopular from "components/MoviesPopular/MoviesPopular";
import  SearchBox  from "components/SearchBox/SearchBox";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Notiflix from "notiflix";

export default function Movies() {
 
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
 
useEffect(() => {
  if (movieName === '') return;

  getMovieBySearch(movieName)
  .then(({ data }) => {
    if (data.results.length === 0) {
      Notiflix.Notify.info(
        `There are no movies on your request "${movieName}".Please try again.`
      );
      setMovies([]);
    }
    setMovies(data.results);
  })
  .catch(error =>
    Notiflix.Notify.warning(
      'Sorry, something went wrong.... Please try again.'
    )
  );
}, [movieName]);

  const handleSearch = (query) => {
    
    setSearchParams(`query=${query}`);
  };

  return (
    <main>
      <SearchBox  onSubmit={handleSearch} />
      <MoviesPopular trending={movies} />
    </main>
  );
};

