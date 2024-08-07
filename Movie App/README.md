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
