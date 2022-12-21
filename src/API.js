const movies = [
    { id: 1, name: "Hoodie 1" },
    { id: 2, name: "Hoodie 2" },
    { id: 3, name: "Hoodie 3" },
    { id: 4, name: "Sneakers 1" },
    { id: 5, name: "Sneakers 2" },
    { id: 6, name: "Sneakers 3" },
    { id: 7, name: "Sneakers 4" },
    { id: 8, name: "Pants 1" },
    { id: 9, name: "Pants 2" },
    { id: 10, name: "Pants 3" }
  ];
  
  export const getMovies = () => {
    return Promise.resolve(movies);
  };
  
  export const getMovieById = (movieId) => {
    return Promise.resolve(movies.find((movie) => movie.id === movieId));
  };
  