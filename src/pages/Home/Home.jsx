import Notiflix from 'notiflix';
import MoviesPopular from "components/MoviesPopular/MoviesPopular";
import { useEffect, useState } from "react";
import { getTrending } from "service/API";
import { Title1 } from 'components/MoviesPopular/Movies.styled.js';

export default function Home() {
  
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getTrending()
      .then(({ data }) => setTrending(data.results))
      .catch(error =>
        Notiflix.Notify.warning(
          'Sorry, something went wrong.... Please try again.'
        )
      );
  }, []);

  return (
    <main>
      <Title1>Trending today</Title1>
      <MoviesPopular trending={trending} />
    </main>
  );
};
  


