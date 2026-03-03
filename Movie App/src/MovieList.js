import { Component } from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      title: "The Avengers",
      plot: "Supernatural powers shown in the movie.",
      price: 199,
      rating: 8.9,
      stars: 0,
      fav: false,
      isInCart: false,
    };
  }
  render() {
    // const { title, plot, price, rating, stars, fav, isInCart } = this.state;
    return (
      <>
        {/* <MovieCard
          title={title}
          plot={plot}
          price={price}
          rating={rating}
          stars={stars}
          fav={fav}
          isInCart={isInCart}
        /> */}
        <MovieCard movies={this.state} />
      </>
    );
  }
}

export default MovieList;
