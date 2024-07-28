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


