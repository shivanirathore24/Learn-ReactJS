import Moviecard from "./Moviecard";

function Movielist(props) {
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

export default Movielist;
