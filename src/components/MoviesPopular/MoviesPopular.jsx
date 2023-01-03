import { MovieImg, MovieLi, MovieLink, MovieText, MovieUl } from "components/MoviesPopular/Movies.styled";
import { useLocation } from "react-router-dom";
import NoImage from 'D:/GO IT/goit-react-hw-05-movies/src/noImag.png';

export default function MoviesPopular ({ trending }) {
    const location = useLocation();
    const homeItem = trending.map(({ id, title, backdrop_path }) => {
      return (
          <>
             {trending && (
          <MovieLi key={id}>
            <MovieLink to={`/movies/${id}`} state={{ from: location }}>
              <MovieImg
                src={
                  backdrop_path
                    ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
                    : NoImage
                }
                alt={title}
              />
              <MovieText>{title}</MovieText>
            </MovieLink>
          </MovieLi>
        )}
    </>
      );   
});
return <MovieUl>{homeItem}</MovieUl>;
}

