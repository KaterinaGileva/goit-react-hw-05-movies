import { Link } from "react-router-dom";


export const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
         <ul key={movie.id}>
          <Link to='/movies/:movieId'>{movie.name}</Link>
          </ul>
      ))}
    </div>
  );
};
 