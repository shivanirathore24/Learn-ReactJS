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

### Moviecard.js file:

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
import MovieCard from "./Moviecard";
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

1. **Moviecard.js (Class Component)**
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
   - Imports the component: `import MovieCard from "./Moviecard"`;
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

### Moviecard.js file:

```jsx
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

### Moviecard.js file:

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
            <img alt="Poster" src="https://m.media-amazon.com/images/I/91GN7Bww3sL._SY522_.jpg" />
          </div>

          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">Rs.{price}</div>

            <div className="footer">
              <div className="rating">{rating}</div>

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
```

#### Changes made (step-by-step):

1. Added a constructor to the class component.
2. Initialized a state object inside the constructor.
3. Moved movie information (title, plot, price, rating) into the state instead of keeping it hardcoded in the UI.
4. Used destructuring to extract values from the state inside the render method.
5. Displayed the values from state in the JSX instead of writing static text.

This change makes the component dynamic and easier to update using React state instead of static content.

