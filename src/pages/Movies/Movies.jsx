import { getMovies } from "service/API";
import MoviesPopular from "components/MoviesPopular/MoviesPopular";
import { SearchBox } from "components/SearchBox/SearchBox";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Movies = () => {
 
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? "";
 
useEffect(() => {
  if (!query) return;
  getMovies().then(setMovies);
}, []);

if (!movies) {
  return null;
}

  const handleSearch = (name) => {
    const nextParams = name !== "" ? { query: name  } : {};
   setSearchParams(nextParams);
 };

  return (
    <main>
      <SearchBox  onSearch={handleSearch} />
      
      {movies.results && <MoviesPopular items={movies.results} />}
      
    </main>
  );
};

export default Movies;