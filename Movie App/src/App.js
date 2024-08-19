import React from "react";
import Movielist from "./Movielist";
import Navbar from "./Navbar";
import { movies } from "./moviesData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
    };
  }

  handleIncStars = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    if (movies[mid].stars >= 5) {
      return;
    }
    movies[mid].stars += 0.5;
    this.setState({
      movies: movies,
    });
  };

  handleDecStars = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    if (movies[movieId].stars > 0) {
      movies[movieId].stars -= 0.5;
    }

    this.setState({
      movies,
    });
  };

  handleToggleFav = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].fav = !movies[movieId].fav;

    this.setState({
      movies,
    });
  };

  handleAddtocart = (movie) => {
    let { movies, cartCount } = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].isInCart = !movies[movieId].isInCart;

    if (movies[movieId].isInCart) {
      cartCount = cartCount + 1;
    } else {
      cartCount -= 1;
    }

    this.setState({
      movies,
      cartCount,
    });
    console.log(cartCount);
  };

  render() {
    const { movies, cartCount} = this.state;

    return (
      <>
        <Navbar cartCount={cartCount} />
        <Movielist
          movies={movies}
          addStars={this.handleIncStars}
          decStars={this.handleDecStars}
          toggleFav={this.handleToggleFav}
          toggleCart={this.handleAddtocart}
        />
      </>
    );
  }
}

export default App;
