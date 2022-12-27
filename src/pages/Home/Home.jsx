import Notiflix from 'notiflix';
import MoviesPopular from "components/MoviesPopular/MoviesPopular";
import { useEffect, useState } from "react";
import { getTrending } from "service/API";

const Home = () => {
  
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
      <h1>Trending today</h1>
      {trending && <MoviesPopular trending={trending.results} />}
    </main>
  );
};
  
export default Home;

