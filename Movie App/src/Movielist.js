import { Component } from "react";
import Moviecard from "./Moviecard";

class Movielist extends Component {
  constructor() {
    super();
    this.state = {
      title: "The Avengers",
      plot: "SuperNatural power shown in the movie.",
      price: 199,
      rating: 8.9,
      stars: 0,
      fav: false,
      isInCart: false,
    };
  }
  render() {
    // const { title, plot, price, rating, stars, fav, isIncart } = this.state;
    return (
      <>
        {/* Way-1 */}
        {/* <Moviecard
          title={title}
          plot={plot}
          price={price}
          rating={rating}
          stars={stars}
          fav={fav}
          isInCart={isIncart}
        /> */}

        {/* Way-2 */}
        <Moviecard movies={this.state} /> 
      </>
    );
  }
}

export default Movielist;
