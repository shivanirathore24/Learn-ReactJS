# STYLING IN REACT

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
