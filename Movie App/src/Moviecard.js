// import React from "react";
// OR
import { Component } from "react";

// class Moviecard extends React.Component {
class Moviecard extends Component {
  constructor() {
    super();
    this.state = {
      title: "The Avengers",
      plot: "SuperNatural power shown in the movie.",
      price: 199,
      rating: 8.9,
      stars: 0,
      fav: false
    };
    this.addStars = this.addStars.bind(this); //Way-2 Binding
  }

  decStars = () => {
    if (this.state.stars <= 0) {
      return;
    }
    this.setState({
      stars: this.state.stars - 0.5,
    });
  };

  //Way-3 Arrow Function
  addStars = () => {
    if (this.state.stars >= 5) {
      return;
    }
    //form-1 : When prevState is not required
    this.setState(
      {
        stars: this.state.stars + 0.5,
      },
      () => console.log("stars inside callback:  ", this.state.stars)
    );

    //form-2 -> uses callback function when prevState is required
    // this.setState((prevState) => {
    //   return {
    //     stars : prevState.stars + 0.5
    //   }
    // });
    // this.state.stars += 0.5;
    // console.log("this.state.stars :  ", this.state.stars);
  };

  handleFav = () => {
    this.setState({
      fav: !this.state.fav,
    });
  };
  
  render() {
    console.log("Rendered the component");
    const { title, plot, price, rating, stars, fav } = this.state;
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
                  onClick={this.decStars.bind(this)}
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
                  //onClick={this.addStars.bind(this)}  //Way-1 Binding
                  onClick={this.addStars.bind(this)}
                />
                <span>{stars}</span>
              </div>
              {/* {fav ? <button className="unfavourite-btn" onClick={this.handleFav}>Un-Favourite</button> : 
              <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>} */}
              <button className= {fav? "unfavourite-btn" : "favourite-btn" } 
              onClick={this.handleFav}>{fav? "Unfavourite" : "Favourite" }</button>
              <button className="cart-btn">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Moviecard;
