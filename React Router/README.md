# REACT ROUTER

## Introduction to Routing

### Routing Mechanism

Routing in React is used to manage the URLs of the application and map them to
different views or components that need to be displayed on the page.

In MPAs, each page has its own URL, and when the user navigates to a new page,
the browser sends a request to the server, and the server responds with a new
HTML page, which replaces the current page in the browser. The server determines
which page to return based on the URL requested by the client. This process is
known as server-side routing. This approach can be slower and less responsive, and
it can lead to longer load times.

In contrast, in SPAs, the application is loaded once, and all the content is loaded
dynamically without the need for page refreshes. Instead of loading new pages, the
application updates the current view by manipulating the DOM. SPAs use client-side
routing, which means that the routing is handled by the client-side JavaScript code.
This process is known as client-side routing.This allows for faster and more
responsive navigation, as the entire page does not need to be reloaded.

### React Router

ReactJS Router is mainly used for developing Single Page Web Applications. React
Router is used to define multiple routes in the application. A Route is used to define
and render components based on the specified path. When the user navigates to a
particular URL, React Router renders the component associated with that route.

For Example:

```text
src/
│
├── components/
│   ├── Header.js
│   ├── Footer.js
│   ├── Button.js
│   ├── Input.js
│   └── ...
│
├── pages/
│   ├── Home.js
│   ├── About.js
│   ├── Contact.js
│   └── ...
│
├── routes.js
├── App.js
└── index.js
```

In this example, the components folder contains reusable UI components that can be
used across different pages. The pages folder contains the different views or pages
of the application.

The routes.js file contains the route definitions for the application. This is where the
`<Route>` components are defined, along with the path and the component to be
rendered for each route.

## React Router Setup

```text
React-Router
│
├── node_modules
├── public
│
├── src
│   │
│   ├── components
│   │   └── Navbar.js
│   │
│   ├── pages
│   │   ├── About.js
│   │   ├── Home.js
│   │   └── Items.js
│   │
│   ├── App.js
│   ├── index.css
│   └── index.js
│
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

### App.js

```jsx
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Items from "./pages/Items";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");
  return (
    <>
      <Navbar setPage={setPage} />
      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "items" && <Items />}
    </>
  );
}

export default App;
```

Controls the **application's page navigation using React state**.

- Uses `useState` to store the currently active page.
- Passes the `setPage` function to Navbar so it can update the page.
- Conditionally renders `Home`, `About`, or `Items` components depending on the current state value.
- Demonstrates **manual navigation logic before using React Router**.

### components/Navbar.js

```jsx
function Navbar({ setPage }) {
  return (
    <>
      <div className="nav">
        <h4 onClick={() => setPage("home")}>HOME</h4>
        <h4 onClick={() => setPage("about")}>ABOUT</h4>
        <h4 onClick={() => setPage("items")}>ITEMS</h4>
      </div>
    </>
  );
}

export default Navbar;
```

Creates the **navigation bar used to switch between pages**.

- Receives the `setPage` function from `App`.
- Updates the page state when a navigation item is clicked.
- Allows users to switch between Home, About, and Items without reloading the page.

### pages/Home.js

```jsx
function Home() {
  return (
    <>
      <main>
        <h1>Home Page</h1>
      </main>
    </>
  );
}

export default Home;
```

Defines the Home page component of the application.

- Displays the main Home page heading.
- Rendered when the page state is set to `"home"`.

### pages/About.js

```jsx
function About() {
  return (
    <>
      <main>
        <h1>About Page</h1>
      </main>
    </>
  );
}

export default About;
```

Defines the **About page component**.

- Displays information for the About section.
- Rendered when the page state is set to `"about"`.

### pages/Items.js

```jsx
function Items() {
  return (
    <>
      <main>
        <h1>Items Page</h1>
      </main>
    </>
  );
}

export default Items;
```

Defines the Items page component.

- Displays the Items section of the application.
- Rendered when the page state is set to `"items"`.

### index.js

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

Acts as the entry point of the React application.

- Imports the main `App` component.
- Renders the application into the root DOM element using React DOM.
- Also,`index.css` contains global styling for layout, navigation bar, and page headings.

This setup demonstrates **how page navigation can be simulated using React state before learning React Router**.

#### 🖥️ What You See in Browser:

<img src="./images/react-router-setup.png" alt="React Router Setup" width="700" height="auto">

## Types of React Router

In React Router v6.4, there are different types of routers that can be used depending
on the needs of the application:

1. `<BrowserRouter>`: This is the most commonly used router and is designed
   for applications that will be hosted on a server that will serve all requests to
   the application. It uses HTML5 history API to keep the UI in sync with the
   URL.
2. `<HashRouter>`: This router is designed for applications that will be hosted on
   a server that does not support HTML5 history API, such as GitHub Pages or
   static file servers. It uses the URL hash to keep the UI in sync with the URL.
3. `<MemoryRouter>`: This router is designed for testing and non-visual use
   cases, such as server-side rendering or testing.
4. `<NativeRouter>`: This router is designed for React Native applications and
   uses the native routing features of the platform.
5. `<StaticRouter>`: This router is designed for server-side rendering and
   generates a set of static routes based on a given location.

In v6.4, new routers were introduced that support the new data APIs and to create
custom routers:

- **createBrowserRouter**: This function creates a custom `<BrowserRouter>`
  router with a custom history object. The custom history object can be used to
  manipulate the browser's URL and handle navigation between pages without
  causing a full page refresh.
- **createMemoryRouter**: This function creates a custom `<MemoryRouter>`
  router with a custom history object. The custom history object can be used to
  manipulate the router's state and handle navigation between pages.
- **createHashRouter**: This function creates a custom `<HashRouter>` router with
  a custom history object. The custom history object can be used to manipulate
  the browser's URL hash and handle navigation between pages without
  causing a full page refresh.
