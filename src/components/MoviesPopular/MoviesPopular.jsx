import { Link, useLocation } from "react-router-dom";

export const MoviesPopular = ({items}) => {
    const location = useLocation();
  
      return (
        
          <ul>
            {items.map(({id, title }) =>
          <li key={id}>
         <Link to={`/movies/${id}`} state={{from: location}}>
            {title}</Link>
          </li>
          )}
          </ul> 
        
      );
    };
  
    export default MoviesPopular;