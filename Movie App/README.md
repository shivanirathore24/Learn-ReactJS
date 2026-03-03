# MOVIE APP

## Movie-App Project Setup

### Steps to Create React App:

1. Go to the Desktop using `cd Desktop` or navigate to your project folder.
2. Use the command `npx create-react-app movieapp` to create the React app.  
   _(Later, I renamed `movieapp` to `Movie App`.)_
3. Run `cd movieapp` to navigate into the project.
4. Use `ls` to display the files in the current directory.
5. Open the project in VS Code using `code .`
6. Run `npm start` to start your first React project.

### App.js file:

```jsx
function App() {
  return (
    <>
      <h1>Movie App</h1>
    </>
  );
}

export default App;
```

### index.js file:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

#### 🖥️ What You See in Browser:

<img src="./images/project-setup.png" alt="project-setup" width="500" height="auto">

## Designing the Movie Card

### MovieCard.js file:

```jsx
import { Component } from "react";

class MovieCard extends Component {
  render() {
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
            <div className="title">The Avengers</div>
            <div className="plot">Supernatural powers shown in the movie.</div>
            <div className="price">Rs. 199</div>

            <div className="footer">
              <div className="rating">8.9</div>
              <div className="stars">⭐️⭐️⭐️⭐️</div>
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
```

### App.js file:

```jsx
import MovieCard from "./MovieCard";
function App() {
  return (
    <>
      <h1 className="app-title">Movie App</h1>
      <MovieCard />
    </>
  );
}

export default App;
```

### index.js file:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

#### Explaination:

1. **MovieCard.js (Class Component)**
   - You created a class-based React component using
     `class MovieCard extends Component`.
   - Inside it, the render() method returns the UI (JSX).
   - The component displays:
     - A poster image (left side)
     - Movie title, plot, price (right side)
     - A footer containing rating, stars, and action buttons:
       - 🌟 Rating
       - ⭐ Star display
       - 💜 Favourite button
       - 🛒 Add to cart button

   - This component is self-contained, reusable, and cleanly structured.
   - Exporting it lets you use `<MovieCard />` anywhere in the app.

2. **App.js**
   - Imports the component: `import MovieCard from "./MovieCard"`;
   - Displays:
     - A centered header: “Movie App”
     - The MovieCard component

   - This file acts as the main UI screen of your application.

3. **index.js**
   - Starts your React app using ReactDOM.createRoot(...).
   - Wraps everything in <React.StrictMode> for safe rendering.
   - Imports index.css, so styles are applied globally.

4. **index.css**
   - Contains all visual styling:
     - Page background
     - Movie card layout
       Flexbox structure
     - Buttons (Favourite / Add to Cart)
     - Typography, spacing, colors

   - Ensures the movie card looks clean, centered, and styled properly.

#### 🖥️ What You See in Browser:

<img src="./images/moviecard1.png" alt="movie-card" width="600" height="auto">

## Movie Card Continued...

### MovieCard.js file:

```jsx
import { Component } from "react";

class MovieCard extends Component {
  render() {
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
            <div className="title">The Avengers</div>
            <div className="plot">Supernatural powers shown in the movie.</div>
            <div className="price">Rs. 199</div>

            <div className="footer">
              <div className="rating">8.9</div>

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
                <img
                  className="str-btn"
                  alt="increase"
                  src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                />
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
```

#### 🖥️ What You See in Browser:

<img src="./images/moviecard2.png" alt="movie-card" width="600" height="auto">

## State in React

State is a built-in object in React that is used to contain dynamic information about a
component. Unlike props that are passed from the outside, a component maintains
its own state.

A component's state is mutable and it can change over time. Whenever it changes,
the component re-renders.

### Adding an initial state

To add an initial state to a component instance we give that component a state
property. This property should be declared inside of the class constructor and should
be set to an object with key and value pairs. We must also call super with props
inside of the constructor to access common properties of the built-in Component
class.

### Super

The super keyword calls the constructor of the parent class. In our case the call to
super passes the props argument to the constructor of React.Component class and
saves the return value for the derived class component.

### Updating state with setState

The components state can be updated with **this.setState** built-in method. It takes an
object and merges it with the component's current state. If there are properties in the
current state that are not a part of that object, those properties remain unchanged.

Anytime that we call this.setState it automatically calls the render method as soon as
the state changes which rerenders the component with the updated state value.

### Accessing previous state values

The **setState** method can take a callback function as an argument which receives
the previous state as a default parameter. This is useful in cases where we need
access to previous state values to update the current state.

### State is Asynchronous

The setState method works in an asynchronous way. That means after calling
setState the **this.state** variable is not immediately changed.

So If we want to perform an action after the state value is updated we can pass a
callback function as a second parameter to the setState method.

#### Example snippet:

```jsx
import { Component } from "react";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    // initialising state
    this.state = { count: 0 };
  }

  // access previous state with a callback
  updateState = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  render() {
    return (
      <div>
        <h1>Count is {this.state.count}</h1>
        <button onClick={this.updateState}>Click Me</button>
      </div>
    );
  }
}
```

### MovieCard.js file:

```jsx
import { Component } from "react";

class MovieCard extends Component {
  constructor() {
    super();
    this.state = {
      title: "The Avengers",
      plot: "Supernatural powers shown in the movie.",
      price: 199,
      rating: 8.9,
    };
  }
  render() {
    const { title, plot, price, rating } = this.state;
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
                <img
                  className="str-btn"
                  alt="increase"
                  src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                />
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
```

#### Changes made (step-by-step):

1. Added a constructor
   - The constructor is used to initialize the component when it is created.
   - super() calls the parent Component constructor so that we can use this inside the class.
   ```jsx
   constructor() {
     super();
     this.state = { ... };
   }
   ```
2. Initialized component state
   - this.state is used to store dynamic data in a React class component.
   - Here it holds the movie details instead of hardcoding them in the UI.
   ```jsx
   this.state = {
     title: "The Avengers",
     plot: "Supernatural powers shown in the movie.",
     price: 199,
     rating: 8.9,
   };
   ```
3. Used destructuring in the render() method

   ```jsx
   const { title, plot, price, rating } = this.state;
   ```

   - Destructuring allows us to extract values from this.state into variables, making the JSX cleaner and easier to read.

4. Displayed state values in JSX

   ```jsx
   <div className="title">{title}</div>
   <div className="plot">{plot}</div>
   <div className="price">Rs.{price}</div>
   <div className="rating">{rating}</div>
   ```

   - Instead of writing static text, the UI now renders values from the component state, so the data can be updated dynamically.

The component now uses React state to manage movie data, making it easier to update dynamically instead of using hardcoded values.

## Binding 'this'

### MovieCard.js file:

```jsx
import { Component } from "react";

class MovieCard extends Component {
  constructor() {
    super();

    this.state = {
      title: "The Avengers",
      plot: "Supernatural powers shown in the movie.",
      price: 199,
      rating: 8.9,
    };

    // Way-2: Binding inside constructor
    // this.addStars = this.addStars.bind(this);
  }

  // Way-1 and Way-2
  // addStars() {
  //   console.log("this.state: ", this.state);
  // }

  // Way-3 (Recommended): Arrow function automatically binds 'this'
  addStars = () => {
    console.log("this.state: ", this.state);
  };

  render() {
    const { title, plot, price, rating } = this.state;

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

                {/* Way-1: Binding directly in JSX */}
                {/* onClick={this.addStars.bind(this)} */}

                {/* Way-2 & Way-3 */}
                {/* onClick={this.addStars} */}
                <img
                  className="str-btn"
                  alt="increase"
                  src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                  onClick={this.addStars}
                />

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
```

#### Explaination:

1. Added addStars method
   - A new function addStars is introduced inside the class.
   - It logs the component state using:
     ```jsx
     console.log("this.state: ", this.state);
     ```
2. Event handler added
   - The increase star button now has an onClick event.
     ```jsx
     onClick={this.addStars}
     ```
   - When the button is clicked, the addStars function executes.
3. Different ways to bind this (shown in comments)
   - The code demonstrates three ways to handle this binding in class components:
     - Way-1: Bind inside JSX
       ```jsx
       onClick={this.addStars.bind(this)}
       ```
     - Way-2: Bind inside constructor
       ```jsx
       this.addStars = this.addStars.bind(this);
       ```
     - Way-3 (used in final code): Arrow function class property
       ```jsx
       addStars = () => { ... }
       ```
       Arrow functions automatically bind this.
4. Functional change
   - Previously the button had no action.
   - Now clicking the increase button triggers addStars and prints the component state in the console.

#### Why binding is needed ?

In React class components, `this` inside a method is not automatically bound to the component instance.
When a method is used as an event handler, this may become undefined, so you cannot access `this.state` or `this.setState()`.

Binding ensures that this correctly refers to the component instance, allowing the method to access and update the component’s state.

#### 🖥️ What You See in Console:

<img src="./images/binding_&apos;this&apos;.png" alt="binding 'this'" width="700" height="auto">

### Increasing Stars using setState()

### MovieCard.js file:

```jsx
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
```

#### Changes made (step-by-step):

1. New state property added
   - A new state variable stars is introduced to store the number of stars.
     ```jsx
     stars: 0;
     ```
2. addStars function updated
   - Previously it only logged the state.
   - Now it updates the stars value using setState().
3. React provides two ways to update state using setState:
   - Form-1 (Object form)

     ```jsx
     this.setState({
       stars: this.state.stars + 0.5,
     });
     ```

     - Used when the new state does not depend on the previous state.

   - Form-2 (Functional form – used here)

     ```jsx
     this.setState((prevState) => ({
       stars: prevState.stars + 0.5,
     }));
     ```

     - Used when the new state depends on the previous state value, which makes it safer and recommended.

4. Direct state mutation example commented

   ```jsx
   // this.state.stars += 0.5;
   ```

   - This is not recommended in React because directly modifying state does not trigger a component re-rende

5. State destructuring updated

   ```jsx
   const { title, plot, price, rating, stars } = this.state;
   ```

   - stars is added to the destructuring.

6. Star count displayed in UI

   ```jsx
   <span className="starCount">{stars}</span>
   ```

   - The UI now shows the current star value.

7. Increase button functionality

   ```jsx
   onClick={this.addStars}
   ```

   - Clicking the increase button now increments the stars value by 0.5.

#### 🖥️ What You See in Browser:

<img src="./images/increase-stars_&apos;setState&apos;.png" alt="increase stars" width="700" height="auto">

## More on setState()

### MovieCard.js file:

```jsx
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

  addStars = () => {
    // Form-1: Object form of setState
    // this.setState(
    //   {
    //     stars: this.state.stars + 0.5,
    //   },
    //   () => console.log("stars inside callback:", this.state.stars),
    // );
    // console.log("stars:", this.state.stars);

    // Form-2: Functional form of setState (Recommended)
    if (this.state.stars >= 5) {
      return;
    }
    this.setState((prevState) => {
      return {
        stars: prevState.stars + 0.5,
      };
    });
  };

  decStars = () => {
    if (this.state.stars <= 0) {
      return;
    }
    // this.setState({
    //   stars: this.state.stars - 0.5,
    // });
    this.setState((prevState) => {
      return {
        stars: prevState.stars - 0.5,
      };
    });
  };

  render() {
    console.log("Rendered the component!");
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
                  onClick={this.decStars}
                />

                <img
                  className="stars"
                  alt="star"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                />

                <img
                  className="str-btn"
                  alt="increase"
                  src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                  onClick={this.addStars}
                />

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
```

#### Changes Added

1. Decrease stars functionality added
   - A new method decStars() is introduced to decrease the star count.

   ```jsx
   decStars = () => {
     this.setState((prevState) => ({
       stars: prevState.stars - 0.5,
     }));
   };
   ```

   - This allows the user to reduce the star value when the decrease button is clicked.

2. Boundary checks added
   - Conditions are added to keep the star value within a valid range.

   ```jsx
   if (this.state.stars >= 5) {
     return;
   }
   ```

   - Prevents stars from going above 5, maintaining a maximum limit.

   ```jsx
   if (this.state.stars <= 0) {
     return;
   }
   ```

   - Prevents stars from going below 0, maintaining a minimum limit.

3. Decrease button connected to function
   - The decrease button now triggers decStars.

   ```jsx
   onClick={this.decStars}
   ```

   - This connects the decrease button to the decStars method, so clicking it reduces the star value.

4. Console log added in render()

   ```jsx
   console.log("Rendered the component!");
   ```

   - This helps demonstrate that the component re-renders whenever the state changes.

5. setState callback example added (commented)

   ```jsx
   this.setState(
     {
       stars: this.state.stars + 0.5,
     },
     () => console.log("stars inside callback:", this.state.stars),
   );
   ```

   - This shows how a callback can be used to access the updated state after setState completes, since state updates are asynchronous.

The component now supports both increasing and decreasing stars with limits (0–5) and demonstrates React state updates, re-rendering, and `setState` callback usage.

#### 🖥️ What You See in Browser:

<img src="./images/decrease-stars_&apos;setState&apos;.png" alt="decrease stars" width="700" height="auto">

## Toggling the Favourite & AddToCart Button

### MovieCard.js file:

```jsx
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
      fav: false,
      isInCart: false,
    };
  }

  addStars = () => {
    // Form-1: Object form of setState
    // this.setState(
    //   {
    //     stars: this.state.stars + 0.5,
    //   },
    //   () => console.log("stars inside callback:", this.state.stars),
    // );
    // console.log("stars:", this.state.stars);

    // Form-2: Functional form of setState (Recommended)
    if (this.state.stars >= 5) {
      return;
    }
    this.setState((prevState) => {
      return {
        stars: prevState.stars + 0.5,
      };
    });
  };

  decStars = () => {
    if (this.state.stars <= 0) {
      return;
    }
    // this.setState({
    //   stars: this.state.stars - 0.5,
    // });
    this.setState((prevState) => {
      return {
        stars: prevState.stars - 0.5,
      };
    });
  };

  handleFav = () => {
    this.setState({
      fav: !this.state.fav,
    });
  };

  handleAddToCart = () => {
    this.setState({
      isInCart: !this.state.isInCart,
    });
  };

  render() {
    console.log("Rendered the component!");
    const { title, plot, price, rating, stars, fav, isInCart } = this.state;

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
                  onClick={this.decStars}
                />

                <img
                  className="stars"
                  alt="star"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                />

                <img
                  className="str-btn"
                  alt="increase"
                  src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                  onClick={this.addStars}
                />

                <span className="starCount">{stars}</span>
              </div>

              <!-- {fav ? (
                <button className="unfavourite-btn" onClick={this.handleFav}>
                  Un-Favourite
                </button>
              ) : (
                <button className="favourite-btn" onClick={this.handleFav}>
                  Favourite
                </button>
              )} -->

              <button
                className={fav ? "unfavourite-btn" : "favourite-btn"}
                onClick={this.handleFav}
              >
                {fav ? "Unfavourite" : "Favourite"}
              </button>

              <button
                className={isInCart ? "unfavourite-btn" : "cart-btn"}
                onClick={this.handleAddToCart}
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

export default MovieCard;
```

#### Explaination:

1. Added new state variables

   ```jsx
   fav: false,
   isInCart: false,
   ```

   - `fav` → tracks whether the movie is marked as Favourite.

   - `isInCart` → tracks whether the movie is added to cart.

2. Added `handleFav` method

   ```jsx
   handleFav = () => {
     this.setState({
       fav: !this.state.fav,
     });
   };
   ```

   - Toggles the `fav` state between true and false when the Favourite button is clicked.

3. Added `handleAddToCart` method

   ```jsx
   handleAddToCart = () => {
     this.setState({
       isInCart: !this.state.isInCart,
     });
   };
   ```

   - Toggles the isInCart state to add or remove the movie from the cart.

4. Updated destructuring in `render()`

   ```jsx
   const { title, plot, price, rating, stars, fav, isInCart } = this.state;
   ```

   - Added `fav` and `isInCart` so they can be used inside JSX.

5. Replaced conditional JSX with dynamic button
   - Old commented code:
     ```jsx
     {
       /* {fav ? (...) : (...)} */
     }
     ```
   - Replaced with:

     ```jsx
     <button
       className={fav ? "unfavourite-btn" : "favourite-btn"}
       onClick={this.handleFav}
     >
       {fav ? "Unfavourite" : "Favourite"}
     </button>
     ```

     - Reason: Simplifies the conditional rendering by using **dynamic className and text** instead of writing two separate buttons.

6. Added Cart button with toggle logic

   ```jsx
   <button
     className={isInCart ? "unfavourite-btn" : "cart-btn"}
     onClick={this.handleAddToCart}
   >
     {isInCart ? "Remove from Cart" : "Add to cart"}
   </button>
   ```

   - Changes button style and text dynamically depending on whether the movie is already in the cart.

The update introduces Favourite and Cart functionality by adding new state variables, toggle handlers, and dynamic buttons to improve interactivity and simplify conditional rendering.

#### 🖥️ What You See in Browser:

<img src="./images/click-button.png" alt="click button" width="700" height="auto">

<img src="./images/toggle-button.png" alt="toggle button" width="700" height="auto">

## Creating Movie List

### MovieList.js

```jsx
import { Component } from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component {
  render() {
    return (
      <>
        <MovieCard />
      </>
    );
  }
}

export default MovieList;
```

### App.js

```jsx
import MovieList from "./MovieList";
function App() {
  return (
    <>
      <h1 className="app-title">Movie App</h1>
      <MovieList />
    </>
  );
}

export default App;
```

#### Explaination

1. Created a `MovieList` Component
   - A new component `MovieList` was created to act as a container for movie cards.

   - It imports and renders the `MovieCard` component inside it.

2. Updated `App.js`
   - Previously, `App` was directly rendering the `MovieCard` component.
   - Now, `App` renders `MovieList` instead of `MovieCard`.

3. Improved Component Structure
   - This change separates UI responsibility:
     - `App` → Main application wrapper.
     - `MovieList` → Manages the list of movies.
     - `MovieCard` → Displays individual movie details.

4. Better Scalability
   - `MovieList` allows rendering multiple `MovieCard` components easily in the future.
   - Keeps the code cleaner and more modular.

## Props in React

A component can pass information to other components. Information that gets
passed from one component to another is known as props short for properties. A
component's props is an object which holds information about that component.

Props are passed down from parent to child components as a key and value pair. If
we want to pass information that is not string we have to wrap it with curly braces.
This information will be stored inside of the props object of the child component.

The most common use of props is to pass data and event handlers down to the child
components.

### Rules of Props

There is only one strict rule in regard to props in React. Props are read-only. A
component should never try to mutate or change the value of its props.

### Default Props

Default props can be used to define any props that you want to be set for a
component. They can be used to ensure that props will have a value if it was not
specified by the parent component.

We can set default values for the props by assigning to the special defaultProps
property on the component class.

### Additional Information: Type Checking in Props

&Note\*: Props type checking can be optionally used to ensure that the passed value
is of the correct data. This can help prevent errors in rendering and force correct
usage of components.

Props type-checking can be used to validate props that are passed down from the
parent for missing or incorrect data type values.

Type checking of props can also help document the code to make it easier to
understand and debug the component class.

We can add type checking to our props by specifying it on the _propsTypes_ static
property on the components class after it has been defined.The value of this property
is an object that has multiple key and value pairs. Each key corresponds to a prop of
that our component expects and the value should be the expected data type for that
prop.

We need to import the PropTypes object from ‘prop-types’ and use it to specify the
expected data type for each prop.

### Example Snippet-1

```jsx
import { Component } from "react";
import PropTypes from "prop-types";

export default class Navbar extends Component {
  render() {
    const { username, avatar } = this.props;

    return (
      <div>
        <span>{username}</span>
        <img alt={username} src={avatar} />
      </div>
    );
  }
}

// setting default props
Navbar.defaultProps = {
  username: "Shivani",
  avatar: "/image.png",
};

// type checking props
Navbar.propTypes = {
  username: PropTypes.string,
  avatar: PropTypes.string,
};
```

### State v/s Props

Props and state are both plain JavaScript objects. While both hold information
that influences the output of render, one important difference between the two
is that Props get passed to the component whereas state is managed within
the component.
| State | Props |
|------|------|
| State can be changed (mutable). | Props are read-only and cannot be changed (immutable). |
| State changes can be asynchronous. | Props cannot be changed. |
| State is managed within the component. | Props are passed to the component. |
| State is used to display changes within the component. | Props are used to pass information between components. |

### Example Snippet-2

#### Student.js

```jsx
import React from "react";

class Student extends React.Component {
  render() {
    console.log(this.props);
    const { name, marks } = this.props;
    return (
      <>
        <h1>Hello, {name}</h1>
        <p>You have secured {marks}%</p>
        <hr />
      </>
    );
  }
}

export default Student;
```

#### App.js

```jsx
import Student from "./Student";

function App() {
  return (
    <>
      <Student stuname="Shiv" marks={96} />
      <Student stuname="Shakti" marks={91} />
      <Student stuname="Sati" marks={95} />
    </>
  );
}

export default App;
```

#### Explaination

1. Student Component (`Student.js`)
   - A class component that receives data through props.
   - It destructures `name` and `marks` from `this.props`.
   - Displays the student's name and their percentage marks.
   - `console.log(this.props)` is used to view the passed props in the browser console.

2. Passing Props from `App.js`
   - The `App` component renders the `Student` component three times.
   - Each instance passes different values for `name` and `marks`.

3. Dynamic Rendering
   - The same `Student` component is reused with different props.

   - This demonstrates component reusability and dynamic data rendering in React.

#### 🖥️ What You See in Browser:

<img src="./images/props-in-react.png" alt="Props in React" width="600" height="auto">

## Default Props in React

### Example Snippet-3

#### student.js

```jsx
/* Case-1: Props in Class Component */

// DefaultProps works properly with class components.
// Props are accessed using this.props inside render().

// import React from "react";
// class Student extends React.Component {
//   render() {
//     // Destructuring values from this.props
//     const { name, marks } = this.props;
//     return (
//       <>
//         <h1>Hello, {name}</h1>
//         <p>You have secured {marks}%</p>
//         <hr />
//       </>
//     );
//   }
// }

/* Case-2: Basic Functional Component */

// In functional components, props are received as a parameter.
// Using Student.defaultProps is not preferred in modern React.

// function Student(props) {
//   const { name, marks } = props;
//   return (
//     <>
//       <h1>Hello, {name}</h1>
//       <p>You have secured {marks}%</p>
//       <hr />
//     </>
//   );
// }

/* Case-3: Functional Component with Default Values Inside */

// Full props object is available (useful for debugging).
// Default values are assigned during destructuring.

// function Student(props) {
//   console.log(props); // Prints complete props object on every render

//   const { name = "Student", marks = "N.A" } = props;

//   return (
//     <>
//       <h1>Hello, {name}</h1>
//       <p>You have secured {marks}%</p>
//     </>
//   );
// }

/* Case-4: Recommended (Modern React Approach) */

// Default values are assigned directly in function parameters.
// Cleaner, shorter, and preferred in production code.

function Student({ name = "Student", marks = "N.A" }) {
  return (
    <>
      <h1>Hello, {name}</h1>
      <p>You have secured {marks}%</p>
      <hr />
    </>
  );
}

export default Student;
```

#### App.js

```jsx
import Student from "./Student";

function App() {
  return (
    <>
      <Student name="Shiv" marks={96} />
      <Student name="Shakti" marks={91} />
      <Student name="Sati" marks={95} />
      <Student />
    </>
  );
}

Student.defaultProps = {
  name: "Student",
  marks: "N.A",
};

export default App;
```

#### Changes Added

1. Converted Class Component to Functional Component
   - Replaced `extends React.Component` with a functional component.
   - Removed `render()` and `this.props`.
   - Used parameter destructuring for cleaner syntax.

2. Compared Multiple Approaches
   - Included class version and different functional patterns for learning and comparison.

3. Updated Default Values Handling
   - Removed `Student.defaultProps` usage.
   - Used default parameters inside the function:
     ```jsx
     function Student({ name = "Student", marks = "N.A" })
     ```
   - This is the recommended modern React approach.

4. Added <Student /> Without Props
   - Demonstrates how default values are automatically applied.

#### 🖥️ What You See in Browser:

<img src="./images/default-props.png" alt="Props in React" width="500" height="auto">
