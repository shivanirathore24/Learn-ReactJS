import { Component } from "react";

class Moviecard extends Component {
  render() {
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img alt="Poster" />
          </div>
          
          <div className="right">
            <div className="title">The Avengers</div>
            <div className="plot">Supernatural powers shown in the movie.</div>
            <div className="price">Rs. 199</div>

            <div className="footer">
              <div className="rating">8.9</div>
              <div className="stars">star</div>
              <button className="favourite">favourite</button>
              <button className="cart=btn">Add to cart</button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
export default Moviecard;
