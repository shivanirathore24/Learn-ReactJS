import MovieCard from "./MovieCard";

function MovieList(props) {
  const { movies, addStars, decStars, toggleFav, toggleCart } = props;
  console.log(props);

  return (
    <div className="main">
      {movies.map((movie) => (
        <MovieCard
          movies={movie}
          addStars={addStars}
          decStars={decStars}
          toggleFav={toggleFav}
          toggleCart={toggleCart}
          key={movie.id}
        />
      ))}
    </div>
  );
}
export default MovieList;
