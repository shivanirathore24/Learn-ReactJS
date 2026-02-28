import { Component } from "react";

class MovieCard extends Component {
  render() {
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img alt="Poster" src="https://m.media-amazon.com/images/I/91GN7Bww3sL._SY522_.jpg" />
          </div>

          <div className="right">
            <div className="title">The Avengers</div>
            <div className="plot">Supernatural powers shown in the movie.</div>
            <div className="price">Rs. 199</div>

            <div className="footer">
              <div className="rating">8.9</div>

              <div className="star-dis">
                <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/1828/1828901.png" />
                <img className="stars" alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" />
                <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" />
                <span>0</span>
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