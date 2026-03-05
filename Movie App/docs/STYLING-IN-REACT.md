# STYLING IN REACT

Styling is one of the most important aspects of the React application. There
are various ways to follow when planning to style React components. Some of
the most popular and modern styling strategies are:

- CSS Stylesheets
- Inline Styling
- Styled Components
- CSS Modules

## CSS Style sheets

This is the conventional way of styling websites. In this method, we separate the
CSS part into an external file with a .css extension which is simply imported into the
React component. After that, we can give className and id to point which styles
should point to which element.

**Note:** `class` attribute is used in HTML, whereas `className` is used in React. This
is because class is a reserved keyword in JavaScript and since React uses JSX,
which is a syntax extension to JavaScript, we must use className instead of the
class attribute.

### Example: Styling the Navbar

#### Navbar.js

```jsx
Navbar.js;
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <span>Title of Navbar</span>
      <span>
        Cart Icon<sup>count</sup>
      </span>
    </div>
  );
};
export default Navbar;
```

#### Navbar.css

```jsx
.navbar {
  display: flex;
  justify-content: space-between;
}
```

### Advantages:

- Styles of numerous documents can be organized from one single file.
- Good performance as it is easy for the browser to optimize and cache the files
  locally for repeated visits.
- You can very easily rip out the entire stylesheet and create a new one to
  refresh the look and feel of your app.

### Disadvantages:

- If not properly structured, It can become long and difficult to navigate through
  as the application becomes complex.
- CSS Stylesheets have global scopes and can cause conflicts in styles if the
  same selector names are used in the codebase

## Creating the Navbar Component

### Navbar.js

```jsx
import React from "react";
class Navbar extends React.Component {
  render() {
    return (
      <>
        <div>
          <div>Title</div>
          <div>
            <img alt="cart Icon" />
            <span>0</span>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
```

#### Explaination:

1. Navbar.js (New File Created)
   - Created a new Navbar component.
   - Added basic layout structure:
     - Title section
     - Cart icon with count (0)
   - This component will act as the top navigation bar of the app.
2. MovieList.js (Updated)
   - Added id Property to Each Movie
     - Each movie object now includes a unique id.
       ```jsx
       id: 1;
       ```
     - This helps React efficiently identify elements in a list.
   - Replaced key={index} with key={movie.id}

     ```jsx
     key={movie.id}
     ```

     - Using a unique id is the recommended React practice instead of array index.

3. App.js (Updated)
   - Imported Navbar
     ```jsx
     import Navbar from "./Navbar";
     ```
   - Added <Navbar /> Component

     ```jsx
     <Navbar />
     ```

     - Navbar is now rendered above MovieList.
     - Improved application layout and structure.

## Inline styles in React

Inline CSS is the widely preferred but less recommended way to style your website.
In React, you will write your style using the style attribute followed by `=` and then
CSS properties enclosed by double curly braces `{{ }}` instead of quotes `“ ”`. React
uses JSX, In JSX for evaluation of any variable, state object , expression etc has to
be enclosed in {}. The style attribute in React only accepts a JavaScript object with
camelCased properties and values enclosed with quotes rather than a CSS string.
This is the reason there are two pairs of curly braces.

**NOTE**: Note: Inline styles have got more priority, and they will overwrite any other styles
given to them in any manner.

### Example: Styling the Navbar

#### Navbar.js - Method 1 (inline styling)

```jsx
const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span>Title of Navbar</span>
      <span>
        Cart Icon <sup>count</sup>
      </span>
    </div>
  );
};

export default Navbar;
```

#### Navbar.js - Method 2 (internal style object)

```jsx
const Navbar = () => {
  return (
    <div style={styles}>
      <span>Title of Navbar</span>
      <span>
        Cart Icon <sup>count</sup>
      </span>
    </div>
  );
};

let styles = {
  display: "flex",
  justifyContent: "space-between",
};

export default Navbar;
```

### Advantages:

- Inline CSS is best suited for learners and when you are testing a particular
  style.

### Disadvantages:

- It cannot be reused, i.e you must write the same CSS code repeatedly for
  the same styles.
- It does not provide browser cache advantages.
- Some useful CSS properties like pseudo-codes, pseudo-classes, media
  queries, etc. cannot be used in inline styles.

### Navbar.js

```jsx
import React from "react";
class Navbar extends React.Component {
  render() {
    return (
      <>
        <div
          style={{
            width: "100%",
            height: 70,
            background: "lightblue",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="title">Movie-App</div>
          <div>
            <img alt="cart icon" />
            <span>3</span>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
```

#### Changes Added

- Added inline styling to the navbar container (width, height, background, flex layout).
- Implemented flexbox to align title and cart section using `justify-content: space-between`.
- Updated title to "Movie-App".
- Added cart count display (`3`) beside the cart icon.

## CSS Scope in React

### Navbar.js

```jsx
import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div style={styles.nav}>
        <div style={styles.title}>Movie-App</div>
        <div style={styles.cartIconContainer}>
          <img
            style={styles.cartIcon}
            src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
            alt="cart-icon"
          />
          <span style={styles.cartCount}>3</span>
        </div>
      </div>
    );
  }
}

const styles = {
  cartIcon: {
    height: 48,
    marginRight: 20,
  },
  nav: {
    height: 70,
    background: "#4267b2",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },
  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: 600,
    fontFamily: '"Montserrat", sans-serif',
    textTransform: "uppercase",
    marginLeft: 20,
  },

  cartIconContainer: {
    position: "relative",
    cursor: "pointer",
  },
  cartCount: {
    background: "orange",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 10,
    top: -5,
    fontSize: 12,
  },
};

export default Navbar;
```

#### Changes Added

- Replaced inline style inside JSX with a separate `styles` object.
- Applied styles using `style={styles.property}` for better readability and organization.
- Added cart icon image with styling.
- Implemented cart count badge with absolute positioning.
- Improved navbar design by adding background color, alignment, font styling, and positioning.

#### 🖥️ What You See in Browser:

<img src="../images/styling-in-react.png" alt="Styling in React" width="700" height="auto">

## Styled Component

`styled-components` is a library for React that allows you to use component-level styles in your application that are written with a mixture of
JavaScript and CSS using a technique called CSS-in-JS. This is done using
the tagged template literal syntax. Follow the following steps to implement
styling using styles-components:

1. First, we need to installthe styled-components library by running

```sh
   npm install styled-components.
```

2. We then need to import the styled component library into our
   component by writing `import styled from 'styled-components'`.
3. Now we can create a variable by selecting a particular HTML element
   where we store our style keys.
4. Then we use the name of the variable we created as a wrapper around
   our JSX elements.

### Example: Styling the Navbar

#### Navbar.js

```jsx
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Navbar = () => {
  return (
    <Nav>
      <span>Title of Navbar</span>
      <span>
        Cart Icon <sup>count</sup>
      </span>
    </Nav>
  );
};

export default Navbar;
```

### Example: Dynamic Styling with props

One of the advantages of styled-components is that the components themselves are
functional, as in you can use props within the CSS. You can also use conditional
statements to change styles based on a state or prop.

#### Navbar.js

```jsx
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.color};
  font-weight: ${(props) => (props.bold ? "normal" : "bolder")};
`;

const Navbar = () => {
  return (
    <Nav color="yellow" bold="">
      <span>Title of Navbar</span>
      <span>
        Cart Icon <sup>count</sup>
      </span>
    </Nav>
  );
};

export default Navbar;
```

### Advantages:

- Styled components eliminate specificity problems as it encapsulates CSS
  inside a component.
- styled-components allow you to combine CSS and JS in the same file.
- You can make use of props to dynamically change the styles in any way.

### Disadvantages:

- Writing CSS in JS means separating the two in the future will be difficult,
  which is terrible for maintainability.
- Differentiating between styled and React components can be difficult
- For applications that use styled components, the browser downloads the CSS
  and parses it using JavaScript before injecting them into the page. This
  causes performance issues because the user must download a lot of
  JavaScript in the initial load.

### Navbar.js

```jsx
import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  height: 70px;
  background: linear-gradient(170deg, #1bc059, #0d47a1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Title = styled.div`
  font-size: 30px;
  color: #fff;
  font-weight: 600;
  font-family: "Times New Roman", Times, serif;
  text-transform: uppercase;
  margin-left: 20px;
`;

const CartImg = styled.img`
  height: 48px;
  margin-right: 20px;
`;

const CartIconContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const CartCount = styled.div`
  background: yellow;
  border-radius: 50%;
  padding: 4px 8px;
  position: absolute;
  right: 10px;
  top: -5px;
  font-size: 12px;
`;

class Navbar extends React.Component {
  render() {
    return (
      <>
        <Nav>
          <Title>MOVIE APP</Title>

          <CartIconContainer>
            <CartImg
              alt="Cart-Icon"
              src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
            />
            <CartCount>5</CartCount>
          </CartIconContainer>
        </Nav>
      </>
    );
  }
}

export default Navbar;
```

#### Changes Added

Navbar.js (Using Styled Components)

- Replaced the previous inline styling (`styles` object) with styled-components.
- Created styled elements like `Nav`, `Title`, `CartImg`, `CartIconContainer`, and `CartCount`.
- Styling is now written inside JavaScript using CSS syntax with `styled.div`, `styled.img`, etc.
- Each styled component acts like a React component with its own styles.
- This makes the code cleaner, reusable, and easier to manage compared to large inline style objects.

#### 🖥️ What You See in Browser:

<img src="../images/styled-component.png" alt="Styled Component" width="700" height="auto">

## Dynamic styles in Styled Components

### Changes in Navbar.js

#### 1. Added Hover Effect to Title

```diff
 const Title = styled.div`
   font-size: 30px;
   color: #fff;
   font-weight: 600;
   font-family: "Times New Roman", Times, serif;
   text-transform: uppercase;
   margin-left: 20px;
+  &:hover {
+    color: #0f0;
+  }
 `;
```

---

#### 2. Updated CartCount for Dynamic Styling

```diff
 const CartCount = styled.div`
-  background: yellow;
+  background: ${(props) => props.color};

   border-radius: 50%;
   padding: 4px 8px;
   position: absolute;
   right: 10px;
   top: -5px;
   font-size: 12px;

+  visibility: ${(props) => (props.show ? "visible" : "hidden")};
 `;
```

---

#### 3. Updated JSX Usage

```diff
- <CartCount>5</CartCount>
+ <CartCount color="yellow" show={true}>5</CartCount>
```

### Explaination:

- Added a hover effect to the `Title` styled component so the text color changes on hover.

- Updated `CartCount` to support dynamic styling using props, allowing the background color to be controlled via the `color` prop.

- Added a visibility toggle using the `show` prop to conditionally display or hide the cart count.

- Updated the JSX to pass the new props: `color="yellow"` and show={true}.

## CSS Modules

A CSS Module is a CSS file with a `.module.css` extension in which all class names
and animation names are scoped locally by default. One huge advantage of the CSS
modules is that it is locally scoped to the component which prevents conflicting styles
because of using the same selector names.

The CSS properties are hashed into unique class names during compilation. You can
use CSS Modules by creating a file with extension `.module.css` file and import it
into the specific React Component file.

### Example: Styling the Navbar

#### Navbar.js

```jsx
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <span>Title of Navbar</span>
      <span>
        Cart Icon <sup>count</sup>
      </span>
    </div>
  );
};

export default Navbar;
```

#### Navbar.module.css

```jsx
.navbar {
  display: flex;
  justify-content: space-between;
}
```

**Note:** When you check it in the browser. On inspecting, The class name is
\_src_Navbar_module\_\_navbar which is further transformed into a Unique Identifier.
This will remove any chances of name collision in the React App.

### Advantages:

- Modular and reusable CSS
- No more styling conflicts, So, you can use the same CSS class in multiple CSS files.

### Disadvantages:

- Using the styles object whenever constructing a className is compulsory.
- Only allows usage of camelCase CSS class names.

### Difference Between `.css` and `.module.css`

| Feature              | `.css` File                                               | `.module.css` File                                               |
| -------------------- | --------------------------------------------------------- | ---------------------------------------------------------------- |
| Scope                | Global – styles apply across the entire application       | Local – styles are scoped to the specific component              |
| Class Name Conflicts | Possible if the same class name is used in multiple files | Prevented because class names are hashed into unique identifiers |
| Import Method        | `import "./Navbar.css";`                                  | `import styles from "./Navbar.module.css";`                      |
| Applying Styles      | `className="navbar"`                                      | `className={styles.navbar}`                                      |
| Best Use Case        | Global styles, layouts, resets, shared styles             | Component-specific styling in React                              |

#### Simple Rule

- Global styles → `.css`
- Component-specific styles → `.module.css`

### NavbarModule.js

```jsx
import React from "react";
import styles from "./Navbar.module.css";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <div className={styles.nav}>
          <div className={styles.title}>MOVIE APP</div>

          <div className={styles.cartIconContainer}>
            <img
              className={styles.cartIcon}
              alt="Cart-Icon"
              src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
            />
            <span className={styles.cartCount}>5</span>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
```

#### Changes added:

Migrated Styling from Styled Components to CSS Modules

- Removed styled-components based styling (styled.div, styled.img, etc.).

- Implemented CSS Modules by creating `Navbar.module.css`.

- Imported styles using:
  ```jsx
  import styles from "./Navbar.module.css";
  ```
- Applied styles using scoped class names:

  ```diff
  - <Nav>
  + <div className={styles.nav}>
  ```

- Moved all styling rules (navbar layout, title, cart icon, badge) into nav.module.css.

- This approach provides locally scoped CSS, preventing style conflicts and improving maintainability.

## Lifting State from MovieList to App

Lifting state up is a common pattern that is essential for React developers to know. It
helps you avoid more complex (and often unnecessary) patterns for managing your
state. The app structure of the project is shown below:

```text
App
├── Navbar
│   └── Cart Count
│
└── MovieList
    ├── State
    │   └── movies: [{title, plot, price, poster, rating, stars, fav, isInCart}]
    │
    ├── Functions
    │   ├── addStars()
    │   ├── decStars()
    │   ├── toggleFav()
    │   └── toggleCart()
    │
    ├── MovieCard1
    ├── MovieCard2
    └── MovieCard3
```

In `<Navbar>`, we have a **cart count** which we want to increase/ decrease as the add
to cart/ remove from cart button is pressed. These buttons are present under
`<MovieCards>` but the logic/ event handlers for add to cart and remove from cart are
written inside `<MovieList>`. We want to access cartCount in `<Navbar>` component
which is a sibling of this component, but we cannot pass the data among siblings as
per the rule we can only pass data from parent to child.

```jsx
this.state = {
  movies: movies,
  cartItems: [],
  cartCount: 0,
};
```

The solution is **Lifting up the state to App component** and passing the **cartCount**
from `<App>` component to `<Navbar>`. So with states we can take all the handlers to
the `<App>` component. And then we can pass everything as a **prop** to another
component.

```text
App
├── State
│   └── movies: [{title, plot, price, poster, rating, stars, fav, isInCart}]
│
├── Functions
│   ├── addStars()
│   ├── decStars()
│   ├── toggleFav()
│   └── toggleCart()
│
├── Navbar
│   └── Cart Count
│
└── MovieList
    ├── MovieCard1
    ├── MovieCard2
    └── MovieCard3
```

```jsx
render() {
  const { movies, cartItems, cartCount } = this.state;

  return (
    <>
      <Navbar cartItems={cartItems} cartCount={cartCount} />

      <MovieListS
        movies={movies}
        decStars={this.decStars}
        addStars={this.addStars}
        toggleCart={this.toggleCart}
        toggleFav={this.toggleFav}
      />
    </>
  );
}
```

In the Navbar component we can now access CartCount and in MovieList, we can
access all the handlers through prop

### moviesData.js

```jsx
export const movies = [
  { id: 1, title: "The Avengers", ... },
  { id: 2, title: "The Dark Knight", ... },
  { id: 3, title: "Iron Man", ... }
];
```

#### moviesData.js (New File Created)

- Created a separate file to store the movies data array.
- Exported the movie list using:

```jsx
export const movies = [...]
```

- This improves code organization by separating static data from components.

### App.js

```jsx
import React from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { movies } from "./moviesData";
import "./index.css";

class App extends React.Component {
  constructor() {
    super();
    //Creating the state object
    this.state = {
      movies: movies,
      cartCount: 0,
    };
  }

  handleAddStars = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    if (movies[movieId].stars < 5) {
      movies[movieId].stars += 0.5;
    }

    this.setState({
      movies,
    });
  };

  handleDecStars = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    if (movies[movieId].stars > 0) {
      movies[movieId].stars -= 0.5;
    }

    this.setState({
      movies,
    });
  };

  handleToggleFav = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].fav = !movies[movieId].fav;

    this.setState({
      movies,
    });
  };

  handleAddtocart = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].isInCart = !movies[movieId].isInCart;

    this.setState({
      movies,
    });
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <Navbar />
        <MovieList
          movies={movies}
          addStars={this.handleAddStars}
          decStars={this.handleDecStars}
          toggleFav={this.handleToggleFav}
          toggleCart={this.handleAddtocart}
        />
      </>
    );
  }
}

export default App;
```

#### App.js (Main State Management)

- Converted App from a functional component to a class component.

- Imported movie data from moviesData.js.

```jsx
import { movies } from "./moviesData";
```

- Moved the main application state into App:

```jsx
this.state = {
  movies: movies,
  cartCount: 0,
};
```

- Moved all handler functions to App:
  - `handleAddStars` → increase stars
  - `handleDecStars` → decrease stars
  - `handleToggleFav` → toggle favourite
  - `handleAddtocart` → toggle cart

- Passed state and handlers to MovieList via props:

```jsx
<MovieList
  movies={movies}
  addStars={this.handleAddStars}
  decStars={this.handleDecStars}
  toggleFav={this.handleToggleFav}
  toggleCart={this.handleAddtocart}
/>
```

- This makes App the central controller of application state.

### MovieList.js

```jsx
import React from "react";
import MovieCard from "./MovieCard";

class MovieList extends React.Component {
  render() {
    const { movies, addStars, decStars, toggleFav, toggleCart } = this.props;
    console.log(this.props);

    return (
      <div className="main">
        {movies.map((movie) => (
          <MovieCard
            movies={movie}
            addStars={addStars}
            decStars={decStars}
            toggleFav={toggleFav}
            toggleCart={toggleCart}
            key={movie.id}
          />
        ))}
      </div>
    );
  }
}

export default MovieList;
```

#### MovieList.js (Converted to Presentational Component)

- Removed local state and handler functions from `MovieList`.
- `MovieList` now receives data and functions through props:

```jsx
const { movies, addStars, decStars, toggleFav, toggleCart } = this.props;
```

- The component now focuses only on rendering movie cards.

```jsx
{
  movies.map((movie) => (
    <MovieCard
      movies={movie}
      addStars={addStars}
      decStars={decStars}
      toggleFav={toggleFav}
      toggleCart={toggleCart}
      key={movie.id}
    />
  ));
}
```

- This makes MovieList a pure UI component.

### MovieCard.js

```jsx
import React from "react";

class MovieCard extends React.Component {
  render() {
    const { movies, addStars, decStars, toggleFav, toggleCart } = this.props;
    const { title, plot, poster, price, rating, stars, fav, isInCart } = movies;

    return (
      //Movie Card
      <div className="movie-card">
        {/**Left section of Movie Card */}
        <div className="left">
          <img alt="poster" src={poster} />
        </div>

        {/**Right section Movie Card */}
        <div className="right">
          {/**Title, plot, price of the movie */}
          <div className="title">{title}</div>
          <div className="plot">{plot}</div>
          <div className="price">Rs. {price}</div>

          {/**Footer starts here with ratings, stars and buttons */}
          <div className="footer">
            <div className="rating">{rating}</div>

            {/**Star image with increase and decrease buttons and star count */}
            <div className="star-dis">
              <img
                className="str-btn"
                alt="Decrease"
                src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                onClick={() => decStars(movies)}
              />
              <img
                className="stars"
                alt="stars"
                src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
              />
              <img
                className="str-btn"
                alt="increase"
                src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
                // No binding required as addStars() is an arrow function
                onClick={() => addStars(movies)}
              />
              <span className="starCount">{stars}</span>
            </div>

            {/**conditional rendering on Favourite button */}
            <button
              className={fav ? "unfavourite-btn" : "favourite-btn"}
              onClick={() => toggleFav(movies)}
            >
              {fav ? "Un-favourite" : "Favourite"}
            </button>

            {/**Conditional Rendering on Add to Cart Button */}
            <button
              className={isInCart ? "unfavourite-btn" : "cart-btn"}
              onClick={() => toggleCart(movies)}
            >
              {isInCart ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
```

#### Changes in MovieCard.js

- Updated to receive handler functions via props (`addStars`, `decStars`, `toggleFav`, `toggleCart`).
- Event handlers now call these parent functions with the movie object.
- `MovieCard` only displays movie data and triggers actions, without managing its own state.

### Visual Flow

```text
User Click
   ↓
MovieCard
   ↓
MovieList (passes props)
   ↓
App (state updates)
   ↓
React re-render
   ↓
MovieList
   ↓
MovieCard + Navbar updated
```

### Simple Rule to Remember

#### Data Flow

```text
App → MovieList → MovieCard
```

#### Action Flow (reverse)

```text
MovieCard → MovieList → App
```
