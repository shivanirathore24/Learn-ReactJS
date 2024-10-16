## Getting Started with Create React App

### 1. Instructions to create react app:

1. Go to the desktop using cd Desktop or your project root directory
   where you want to create the project.
2. Use command `npx create-react-app <app_name>`, to create the
   react app.
3. Use the command `cd <app_name>` and go to the app.
4. Use `ls` to display the list of files in the current directory.
5. And now open the file in VS Code.
6. Use `npm start` to start your first react project.

### 2. Designing the Movie Card

**2.1 -> Created 'Moviecard.js' file as Class Component**

1. Imports:
   `import { Component } from "react";` -> This line imports the Component class from the React library. It allows the creation of class-based components.

2. Moviecard Class Component: `class Moviecard extends Component { ... }` -> Defines a class named Moviecard that extends React's Component class. This is a class-based component.

3. render Method: `render() { ... }`: The render method is required in class-based components. It returns the JSX that defines the component's UI.

4. JSX Structure: JSX is a syntax in React for writing HTML-like elements within JavaScript, allowing for seamless UI component creation.

   - `<div className="main"> ... </div>`: The outermost div element, with a class of "main," serves as the main container for the component.

   - `<div className="movie-card"> ... </div>`: This div acts as the main card container, grouping the movie content.

   - Left Section:

     - `<div className="left"> ... </div>`: Contains the movie poster.
     - `<img alt="Poster" src="..."/>`: An image element displaying the movie poster, with a provided source URL and alt text.

   - Right Section:

     - `<div className="right"> ... </div>`: Contains the details about the movie.
     - `<div className="title"> ... </div>`: Displays the movie title.
     - `<div className="plot"> ... </div>`: Provides a brief plot description.
     - `<div className="price"> ... </div>`: Shows the price of the movie.

   - Footer Section:

     - `<div className="footer"> ... </div>`: Contains the rating, star icons, and buttons.
     - `<div className="rating"> ... </div>`: Displays the movie rating.
     - `<div className="star-dis"> ... </div>`: A container for star-related elements.
     - `<img alt="decrease" src="..."/>`: An image for a "decrease" button.
     - `<img alt="star" src="..."/>`: An image displaying a star.
     - `<img alt="increase" src="..."/>`: An image for an "increase" button.
     - `<span>0</span>`: Displays the number of stars (currently set to 0).
     - `<button className="favourite-btn">Favourite</button>`: A button to mark the movie as a favorite.
     - `<button className="cart-btn">Add To Cart</button>`: A button to add the movie to the cart.

   - Export: `export default Moviecard;`: Exports the Moviecard component as the default export, making it available for import in other files.

   **2.2 Created file 'index.css'** -> This CSS styles a movie card layout with a main container, left (image) and right (details) sections, and a footer. It includes global body styles, responsive flexbox layout, and buttons for favorite, add-to-cart, and unfavorite actions.

   **2.3 Added Moviecard component in 'App.js'** -> used to display a movie card with details like title and rating. It promotes reusability and modularity in the app's UI.

   **2.4 Imported 'index.css' file in 'index.js'** ->The index.css file is imported to apply global styles to the entire React application

### 3. State in React

1. State -> is a built-in object in React that is used to contain dynamic information about a
   component. Unlike props that are passed from the outside, a component maintains
   its own state. A component's state is mutable and it can change over time. Whenever it changes,
   the component re-renders.
2. Adding an initial state -> To add an initial state to a component instance we give that component a state
   property. This property should be declared inside of the class constructor and should
   be set to an object with key and value pairs. We must also call super with props
   inside of the constructor to access common properties of the built-in Component
   class.
3. Super -> The super keyword calls the constructor of the parent class. In our case the call to
   super passes the props argument to the constructor of React.Component class and
   saves the return value for the derived class component.

- `this.state = { ... }: ` This line initializes the component's state. In React, state is an object that holds data that may change over the lifecycle of the component. Setting the initial state in the constructor is a common practice.

### 4. Binding "this"

1. Way-1 Binding in JSX: `<button onClick={this.addStars.bind(this)}>...</button>` -> This binds 'this' to 'addStars' each time the button is clicked, but it is less efficient than the other methods since it creates a new function on every render.
2. Way-2 Binding in Constructor : `this.addStars = this.addStars.bind(this);` -> binds the 'addStars' method to the component instance in the constructor. This ensures that this consistently refers to the component, providing reliable access to the component's state and methods, regardless of how the function is called.
3. Way-3 Arrow Function: `addStars = () => { ... }` -> Defining 'addStars' as an arrow function automatically binds 'this' to the component's instance, so no additional binding is needed.

### 5. Increasing stars using setState()
- Updated 'Moviecard.js' class component -> In the 'addStars' function, the this.setState method is used to update the component's state in React. It has two forms:
   - Direct Update (form-1): This approach directly updates the stars state by adding 0.5 to the current value. It's used when the new state doesn't depend on the previous state.

   - Callback Function (form-2): This method uses a function that receives the previous state (prevState) and returns the new state. It's useful when the new state depends on the previous state, ensuring that updates are done correctly even when multiple updates happen in quick succession.
- In both cases, this.setState triggers a re-render of the component with the updated state.

### More on setState()
Updated 'Moviecard.js' class component -> In the 'decStars' function, the this.setState method is used to update the component's state in React.
1. Updating state with setState -> The components state can be updated with this.setState built-in method. It takes an
object and merges it with the component's current state. If there are properties in the
current state that are not a part of that object, those properties remain unchanged.
Anytime that we call this.setState it automatically calls the render method as soon as
the state changes which rerenders the component with the updated state value.

2. Accessing previous state values -> The setState method can take a callback function as an argument which receives
the previous state as a default parameter. This is useful in cases where we need
access to previous state values to update the current state.
3. State is Asynchronous -> The setState method works in an asynchronous way. That means after calling
setState the this.state variable is not immediately changed.
So If we want to perform an action after the state value is updated we can pass a
callback function as a second parameter to the setState method.

### Toggle the Favourite & Cart button 
1. Approach 1 -> uses a ternary operator to conditionally render one of the two buttons based on the fav state.
   - Explanation: Depending on the value of fav, either the "Un-Favourite" or "Favourite" button is rendered.
   - Pros: Clearly separates the two states.
   - Cons: Repeats the button element and onClick handler.
2. Approach 2 -> uses a single button element, with the class and text dynamically set using a ternary operator.
   - Explanation: A single button element changes its class and text based on the fav state.
   - Pros: More concise and reduces repetition by using only one button element.
   - Cons: Slightly less explicit about the two different states.
3. When the button is clicked, 'handleFav' method is executed, toggling the fav state:
   - 'this.setState' updates the fav state to its opposite value (true to false or false to true).
   - This change triggers a re-render of the component, updating the button's appearance and text accordingly.
- Similarly did for Cart Button.


### Creating MovieList
1. Create 'Movielist.js' file as component in React that imports the 'Moviecard component' and renders four Moviecard components within it.
2. Now 'App component' renders the 'Movielist component', which in turn renders multiple Moviecard components.

### Props in React
1. Props in React
   - A component can pass information to other components. Information that gets
passed from one component to another is known as props short for properties. A
component's props is an object which holds information about that component.
   - Props are passed down from parent to child components as a key and value pair. If
we want to pass information that is not string we have to wrap it with curly braces.
This information will be stored inside of the props object of the child component.
   - The most common use of props is to pass data and event handlers down to the child
components.
2. Rules of Props
   - There is only one strict rule in regard to props in React. Props are read-only. A
component should never try to mutate or change the value of its props.
3. Default Props
   - Default props can be used to define any props that you want to be set for a
component. They can be used to ensure that props will have a value if it was not
specified by the parent component.
   - We can set default values for the props by assigning to the special defaultProps
property on the component class.

### Passing data through props
Updated 'Movielist' and 'Moviecard' Component
1. Cut constructor part from 'MovieCard' component & paste it in 'Movielist' Component.
   - constructor() is a special method used to initialize an object created with a class.
   - The super() function calls the constructor of the parent class (Component in this case). This is necessary to access this in the constructor.
   - State Initialization: 'this.state' is an object that holds the state variables for the Movielist component.
2. Passing State as Props:
   - this.state refers to the state object defined in the Movielist component.
   - {this.state} is the value being passed to the movies prop of the Moviecard component.
3. Props in Moviecard:
   - The Moviecard component receives movies as a prop.
   - Inside Moviecard, you can access the state values via this.props.movies.

### Displaying data through props
1.  First initializes the state of the Movielist component with a movies array containing three movie objects. Each movie object includes properties such as title, plot, poster, rating, price, star, fav, and isInCart, which store relevant details about each movie
2. For each 'movie' object in the array, a new 'Moviecard' component is created. The movie object is passed as a prop to the Moviecard component with the name movies.

### Handling "increase stars" events

Updated "Movielist' component ->
1. handleIncStar Function:
   - This function increments the stars rating for a movie when called.
   - It checks if the stars value is less than 5; if it is, it increases the stars by 0.5.
   - It then updates the state with the modified movies list.
2. Render Method:
   - It maps over the movies array in the state and renders a Moviecard component for each movie.
   - Each Moviecard is passed a unique key (using the index of the movie in the array) and the movie object itself as a prop (movies).
   - The onIncStars prop is passed to handle the stars increment functionality.

Updated 'Moviecard' Component -> Removed Handling related function & updated 'Increase' Button onClick event: onClick={() => onIncStars(movies)}:
   - This is an event handler for the onClick event on the image.
   - When the user clicks on the image, an anonymous arrow function (() => { ... }) is executed.
   - Inside this function, the onIncStars function is called with the movies object as an argument.
   - This triggers the handleIncStar function in the parent component (Movielist), which increases the star rating for the corresponding movie.

Similarly added events for "Decrease stars", "Toggle Favourite/ Unfavourite", "Add to Cart/ Remove from Cart".

### Creating the Navbar Component
1. This React component defines a Navbar class that extends React.Component. 
2. Inside the render method, it returns a div containing two other div elements: 
   - one for a title and another for a cart icon with a count (initially set to 0). 
3. The component is then exported for use in other parts of the application.
4. The <Navbar /> component is added to the App component to display a navigation bar at the top of the application.

### Styling in React
Styling is one of the most important aspects of the React application. There
are various ways to follow when planning to style React components. Some of
the most popular and modern styling strategies are:
- CSS Stylesheets
- Inline Styling
- Styled Components
- CSS Modules
1. CSS Style sheets
   - This is the conventional way of styling websites. In this method, we separate the
CSS part into an external file with a .css extension which is simply imported into the
React component. After that, we can give className and id to point which styles
should point to which element.
   - Note: class attribute is used in HTML, whereas className is used in React. This
is because class is a reserved keyword in JavaScript and since React uses JSX, which is a syntax extension to JavaScript, we must use className instead of the
class attribute.
   - Advantages:
      -  Styles of numerous documents can be organized from one single file.
      -  Good performance as it is easy for the browser to optimize and cache the files
locally for repeated visits.
      -  You can very easily rip out the entire stylesheet and create a new one to
refresh the look and feel of your app.
   - Disadvantages:
      -  If not properly structured, It can become long and difficult to navigate through
as the application becomes complex.
      - CSS Stylesheets have global scopes and can cause conflicts in styles if the
same selector names are used in the codebase

2. Inline Styling
   - Inline CSS is the widely preferred but less recommended way to style your website.
In React, you will write your style using the style attribute followed by = and then
CSS properties enclosed by double curly braces {{ }} instead of quotes “ ”. React
uses JSX, In JSX for evaluation of any variable, state object , expression etc has to
be enclosed in {}. The style attribute in React only accepts a JavaScript object with
camelCased properties and values enclosed with quotes rather than a CSS string.
This is the reason there are two pairs of curly braces.
   - Note: Inline styles have got more priority, and they will overwrite any other styles
given to them in any manner.
   - Method 1 (inline styling)
   - Method 2 (internal style object) -> The styles object is a JavaScript object that defines inline CSS for your React component. Each key in the object represents a CSS class, and its value is an object containing CSS properties and their corresponding values.

### Styled Components
'styled-components' is a library for React that allows you to use
component-level styles in your application that are written with a mixture of
JavaScript and CSS using a technique called CSS-in-JS. This is done using
the tagged template literal syntax. Follow the following steps to implement
styling using styles-components:
1. First, we need to install the styled-components library by running
`npm install styled-components`.
2. We then need to import the styled component library into our
component by writing ```import styled from 'styled-components'```.
3. Now we can create a variable by selecting a particular HTML element
where we store our style keys.
4. Then we use the name of the variable we created as a wrapper around
our JSX elements
5. _Dynamic Styling with props_
   - One of the advantages of styled-components is that the components themselves are
functional, as in you can use props within the CSS. You can also use conditional
statements to change styles based on a state or prop
6. Advantages:
   - Styled components eliminate specificity problems as it encapsulates CSS
inside a component.
   - styled-components allow you to combine CSS and JS in the same file.
   - You can make use of props to dynamically change the styles in any way.
7. Disadvantages:
   - Writing CSS in JS means separating the two in the future will be difficult,
which is terrible for maintainability.
   - Differentiating between styled and React components can be difficult
   - For applications that use styled components, the browser downloads the CSS
and parses it using JavaScript before injecting them into the page. This
causes performance issues because the user must download a lot of
JavaScript in the initial load.

### CSS Module
1. A CSS Module is a CSS file with a .module.css extension in which all class names
and animation names are scoped locally by default. One huge advantage of the CSS
modules is that it is locally scoped to the component which prevents conflicting styles
because of using the same selector names.

2. The CSS properties are hashed into unique class names during compilation. You can
use CSS Modules by creating a file with extension .module.css file and import it
into the specific React Component file.

   - Note: When you check it in the browser. On inspecting, The className is headingOne_headbtn__zZoo4 which is further transformed into a Unique Identifier.
This will remove any chances of name collision in the React App.

3. Advantages:
   - Modular and reusable CSS
   - No more styling conflicts, So, you can use the same CSS class in multiple
CSS files
4. Disadvantages:
   - Using the styles object whenever constructing a className is compulsory.
   - Only allows usage of camelCase CSS class names.

### Navbar Module
1. Created 'Navbar.module.css' file -> Creating a this file allows you to encapsulate the styles specifically for the Navbar component. This prevents the styles from affecting other components and avoids naming conflicts in your CSS. It ensures that your styles are modular, organized, and applied only where they are intended, making your codebase easier to maintain and scale.
2. In Navbar.js -> In this React component, CSS Modules are used to apply styles in a scoped manner. The Navbar.module.css file is imported as styles, turning each CSS class into a property of the styles object. When applying styles, you reference these properties (e.g., styles.nav), ensuring the styles are unique to this component and won't interfere with styles in other parts of the application. This approach keeps the CSS modular and organized

### Lifting State from Movielist to App
Lifting state to a parent component in React is done when multiple child components need to share and interact with the same piece of state. By managing the state in the parent, you ensure that all related components have a consistent view of the data, avoid redundant state management, and centralize the logic for state updates, making your application easier to manage and debug.


### Showing the Cart Count
1. In 'App.js' Component
   - State Initialization: The cartCount is initialized in the state with a value of 0.
handleAddtocart Function: When a movie is added or removed from the cart, the handleAddtocart function is triggered.    
   - It toggles the movie's isInCart status. If the movie is added to the cart (isInCart becomes true), cartCount increases by 1. If the movie is removed (isInCart becomes false), cartCount decreases by 1. The function then updates the state with the new cartCount and movie list.
   - Rendering: The cartCount value is passed as a prop to the Navbar component, which can display the current count of items in the cart.
2. In 'Navbar.js' Component ->  Rendering: The cartCount value, passed as a prop, is displayed inside the CartCount badge. The badge is positioned on top of the cart icon, showing how many items are in the cart.












