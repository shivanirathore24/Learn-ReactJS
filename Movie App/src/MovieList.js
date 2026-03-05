import React from "react";
import MovieCard from "./MovieCard";

class MovieList extends React.Component {
  render() {
    const { movies, addStars, decStars, toggleFav, toggleCart } = this.props;
    console.log(this.props);

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
}

export default MovieList;
