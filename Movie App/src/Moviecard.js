// import React from "react";
// OR
import { Component } from "react";

// class Moviecard extends React.Component {
class Moviecard extends Component {
  render() {
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              alt="Poster"
              src="https://m.media-amazon.com/images/I/81KJ-sK0YpS._AC_UL640_FMwebp_QL65_.jpg"
            />
          </div>

          <div className="right">
            <div className="title">The Avengers</div>
            <div className="plot">SuperNatural power shown in the movie.</div>
            <div className="price">Rs. 199</div>

            <div className="footer">
              <div className="rating">8.9</div>
              <div className="star-dis">
                <img
                  alt="decrease"
                  src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
                  className="str-btn"
                />
                <img
                  alt="star"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                  className="stars"
                />
                <img
                  alt="increase"
                  src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
                  className="str-btn"
                />
                <span>0</span>
              </div>
              <button className="favourite-btn">Favourite</button>
              <button className="cart-btn">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Moviecard;
