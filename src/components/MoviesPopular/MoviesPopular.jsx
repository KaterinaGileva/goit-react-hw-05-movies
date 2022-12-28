import { Link, useLocation } from "react-router-dom";

export const MoviesPopular = ({ trending }) => {
    const location = useLocation();
    
      return (
          <div>
          {trending.map(({ id, title }) => (
          
          <li key={id}>
         <Link to={`/movies/${id}`} state={{from: location}}>
            {title}
            </Link>
          </li>
          
    ))} 
    </div>

      );   
}
export default MoviesPopular;   