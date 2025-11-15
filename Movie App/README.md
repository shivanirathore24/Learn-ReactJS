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

#### App.js file:

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
  </React.StrictMode>
);
```

#### 🖥️ What You See in Browser:

<img src="./images/project-setup.png" alt="project-setup" width="500" height="auto">

## Designing the Movie Card

### Moviecard.js file:

```jsx
import { Component } from "react";

class Moviecard extends Component {
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
export default Moviecard;
```

### App.js file:

```jsx
import MovieCard from "./Moviecard";
function App() {
  return (
    <>
      <h1>Movie App</h1>
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
  </React.StrictMode>
);
```

### Explaination:

1. **Moviecard.js (Class Component)**

   - You created a class-based React component using
     `class Moviecard extends Component`.
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

   - Imports the component: import MovieCard from "./Moviecard";
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

<img src="./images/moviecard.png" alt="project-setup" width="600" height="auto">
