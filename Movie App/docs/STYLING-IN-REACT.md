# STYLING IN REACT

## Styling in React

Styling is one of the most important aspects of the React application. There
are various ways to follow when planning to style React components. Some of
the most popular and modern styling strategies are:

- CSS Stylesheets
- Inline Styling
- Styled Components
- CSS Modules

### CSS Style sheets

This is the conventional way of styling websites. In this method, we separate the
CSS part into an external file with a .css extension which is simply imported into the
React component. After that, we can give className and id to point which styles
should point to which element.

**Note:** `class` attribute is used in HTML, whereas `className` is used in React. This
is because class is a reserved keyword in JavaScript and since React uses JSX,
which is a syntax extension to JavaScript, we must use className instead of the
class attribute.

#### Example: Styling the Navbar

1. Navbar.js

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

2. Navbar.css

```jsx
.navbar {
  display: flex;
  justify-content: space-between;
}
```

#### Advantages:

- Styles of numerous documents can be organized from one single file.
- Good performance as it is easy for the browser to optimize and cache the files
  locally for repeated visits.
- You can very easily rip out the entire stylesheet and create a new one to
  refresh the look and feel of your app.

#### Disadvantages:

- If not properly structured, It can become long and difficult to navigate through
  as the application becomes complex.
- CSS Stylesheets have global scopes and can cause conflicts in styles if the
  same selector names are used in the codebase

### Inline Styling

Inline CSS is the widely preferred but less recommended way to style your website.
In React, you will write your style using the style attribute followed by = and then
CSS properties enclosed by double curly braces {{ }} instead of quotes “ ”. React
uses JSX, In JSX for evaluation of any variable, state object , expression etc has to
be enclosed in {}. The style attribute in React only accepts a JavaScript object with
camelCased properties and values enclosed with quotes rather than a CSS string.
This is the reason there are two pairs of curly braces.

**NOTE**: Note: Inline styles have got more priority, and they will overwrite any other styles
given to them in any manner.

#### Example: Styling the Navbar

Navbar.js - Method 1 (inline styling)

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

Navbar.js - Method 2 (internal style object)

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

#### Advantages:

- Inline CSS is best suited for learners and when you are testing a particular
  style.

#### Disadvantages:

- It cannot be reused, i.e you must write the same CSS code repeatedly for
  the same styles.
- It does not provide browser cache advantages.
- Some useful CSS properties like pseudo-codes, pseudo-classes, media
  queries, etc. cannot be used in inline styles.

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

Inline CSS in React is written using the `style` attribute with double curly braces `{{ }}` because React expects a **JavaScript object** with **camelCase CSS properties** instead of a normal CSS string. Inline styles have **higher priority** and override other styles. They are useful for **quick testing and small styling tasks**, but they are **not reusable**, do not benefit from browser caching, and cannot support advanced CSS features like pseudo-classes, pseudo-elements, or media queries.

#### Navbar.js

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
