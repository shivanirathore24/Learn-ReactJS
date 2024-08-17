import { Component } from "react";
import Moviecard from "./Moviecard";

class Movielist extends Component {
  render() {
    const { movies, addStars, decStars, toggleFav, toggleCart } = this.props;
    console.log(this.props);
    return (
      <>
        {movies.map((movie, index) => (
          <Moviecard
            movies={movie}
            key={index}
            addStars={addStars}
            decStars={decStars}
            toggleFav={toggleFav}
            toggleCart={toggleCart}
          />
        ))}
      </>
    );
  }
}

export default Movielist;