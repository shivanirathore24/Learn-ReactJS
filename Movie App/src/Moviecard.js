import { Component } from "react";

class Moviecard extends Component {

  render() {
    console.log("Rendered the component");
    const {movies, addStars, decStars, toggleFav, toggleCart} =  this.props;
    const { title, plot, price, rating, stars, fav, isInCart } =
      this.props.movies;

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
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">{price}</div>

            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  alt="decrease"
                  src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
                  className="str-btn"
                  onClick={() => decStars(movies)}
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
                  onClick={() => addStars(movies)}
                />
                <span>{stars}</span>
              </div>
              
              <button
                className={fav ? "unfavourite-btn" : "favourite-btn"}
                onClick={() => toggleFav(movies)}
              >
                {fav ? "Unfavourite" : "Favourite"}
              </button>

              <button
                className={isInCart ? "removecart-btn" : "cart-btn"}
                onClick={() => toggleCart(movies)}
              >
                {isInCart ? "Remove from Cart" : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Moviecard;
