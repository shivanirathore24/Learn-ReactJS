import { Component } from "react";

class MovieCard extends Component {
  constructor() {
    super();

    this.state = {
      title: "The Avengers",
      plot: "Supernatural powers shown in the movie.",
      price: 199,
      rating: 8.9,
      stars: 0,
    };
  }

  // Method to increase star count
  addStars = () => {
    // Form-1: Object form of setState
    // Used when the new state does NOT depend on the previous state
    // this.setState({
    //   stars: this.state.stars + 0.5,
    // });

    // Form-2: Functional form of setState (Recommended)
    // Used when the new state depends on the previous state value
    this.setState((prevState) => {
      return {
        stars: prevState.stars + 0.5,
      };
    });

    // ❌ Incorrect way: Direct state mutation (React will not re-render)
    // this.state.stars += 0.5;
    // console.log("this.state.stars: ", this.state.stars);
  };

  render() {
    const { title, plot, price, rating, stars } = this.state;

    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              alt="Poster"
              src="https://m.media-amazon.com/images/I/91GN7Bww3sL._SY522_.jpg"
            />
          </div>

          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">Rs.{price}</div>

            <div className="footer">
              <div className="rating">{rating}</div>

              <div className="star-dis">
                <img
                  className="str-btn"
                  alt="decrease"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828901.png"
                />

                <img
                  className="stars"
                  alt="star"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                />

                {/* Increase star count when clicked */}
                <img
                  className="str-btn"
                  alt="increase"
                  src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                  onClick={this.addStars}
                />

                {/* Display current star count */}
                <span className="starCount">{stars}</span>
              </div>

              <button className="favourite-btn">Favourite</button>
              <button className="cart-btn">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;