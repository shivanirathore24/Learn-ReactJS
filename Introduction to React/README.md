# INTRODUCTION TO REACTJS

## What is React?

React is a JavaScript library for building user interfaces. JavaScript libraries like
React are collections of prewritten code snippets that can be used and reused to
perform common JavaScript functions, helps in faster development with fewer
vulnerability to have errors. UI(User Interface) is built from small units like buttons,
text, and images. Everything on the screen can be broken down into components,
from websites to phone apps. React lets you combine them into reusable, nestable
components.

### History of React

- React was originally created by Jordan Walke, a software engineer at
  Facebook. But today, it is maintained by Meta(formerly Facebook) and a
  community of over a thousand open-source developers.
- It was first deployed on Facebook's News Feed in 2011 and later on
  Instagram in 2012. It was open-sourced at JSConf US in May 2013.
- Some of the major companies that currently use React include Netflix,
  Facebook, Instagram, Airbnb, Reddit, Dropbox, and Postmates.
- Current(Latest) version of React is v18.

### Why React?

1. **React is Composable**: Components are the building blocks of any React
   application, and a single app usually consists of multiple components. These
   components have their logic and controls, and they can be reused throughout
   the application, which in turn dramatically reduces the application’s
   development time.
2. **Faster performance**: React uses Virtual DOM, thereby creating web
   applications faster. Virtual DOM compares the components’ previous states and updates only the items in the Real DOM that were changed, instead of
   updating all of the components again, as conventional web applications do.
3. **React is Declarative**: React is easy to learn, mostly combining basic HTML
   and JavaScript concepts with some beneficial additions. Still, as is the case
   with other tools and frameworks, you have to spend some time to get a proper
   understanding of React’s library.
4. **Dedicated tools for easy debugging**: Facebook has released a Chrome
   extension that can be used to debug React applications. This makes the
   process of debugging React web applications faster and easier.

### Multi-Page Applications vs Single-Page Applications

**Multi-Page Application (MPA)** is a traditional implementation of a web application
that reloads the whole page when a user interacts with the app.

<img src="./images/multi-page_application.png" alt="Multi-Page Application" width="600" height="auto">

**Single-Page Application (SPA)** is a web application that loads a single document(HTML) and updates the parts of the document using APIs(AJAX).

<img src="./images/single-page_application.png" alt="Single-Page Application" width="600" height="auto">

### Difference between MPA and SPA

#### Multi-Page Application:

1. In MPAs, content is constantly loaded, which increases the load on your server. This can adversely affect
   web page speed and overall system performance.
2. Multi-page applications have more features than single-page applications. Therefore, more effort and resources are required to make them. Development time increases in proportion to the number of pages created and the activity to be executed.
3. Multi-page applications are more SEO-friendly than single-page applications. Their content is constantly updated. In addition, they have many pages for adding various keywords, images, and meta tags.
4. It is difficult to maintain and is not budget-friendly.
5. It always requires an internet connection as it does not load all the data at once.

#### Single-Page Application:

1. SPAs provide increased content load speed because they do not have many pages and load content at once.
2. Single-page app development is easy because you need to create fewer pages, create less functionality, and test and display less content.
3. Single-page app developers have trouble indexing a website properly Multi-page applications are more SEO-friendly than single-page and achieve high search rankings.
4. It is easy to maintain at a low cost.
5. It has the ability to work offline if there are some problems with the internet connection, as it loads all the data at once.

## How to include Javascript in HTML?

You can include JavaScript in your HTML in two ways:

1. Embedding code in your HTML file using `<script>` tag
2. Including it as a link to an external file.

### Embedding Code

You can add JavaScript code in an HTML document by employing the dedicated
HTML tag `<script`> that wraps around JavaScript code. The `<script>` tag can be
placed in the `<head>` section of your HTML or in the `<body>` section, depending on
when you want the JavaScript to load.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
    <script>
      document.write("Welcome to the session");
    </script>
  </head>
  <body>
    <h1>Hello</h1>
  </body>
</html>
```

### External File

To include an external JavaScript file, we can use the script tag with the attribute src.
The value for the src attribute should be the path to your JavaScript file. This script
tag should be included between your HTML document's `<head>` tags.When
JavaScript files are cached, pages load more quickly.

```html
<script type="text/javascript" src="path-to-javascript-file.js"></script>
```

## How React is declarative?

Declarative programming is when you say what you want to do, and describe the
final state of the desired UI. Imperative programming is when you say how to get
what you want and provide step-by-step DOM mutations until you reach the desired
UI. Javascript is an imperative Language whereas React is a declarative language.

For eg: For the following output, You need to add an element to the DOM
imperatively using JavaScript. As your app gets bigger, with more DOM elements you
being created, this can become hard to maintain. But, React it performs all of the
JavaScript/DOM steps as per the declared code to get us to our desired result. It
abstracts away all the nuts and bolts of how the DOM renders these elements. In
your code you tell your page "Look like this" and you'll get that result. Declarative
programming is much easier to read and figure out what is going on in your code.
That makes it easier to debug and easier for other devs to work on.

### Javascript CODE

#### index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <title>HTML</title>
  </head>
  <body>
    <div id="root"></div>

    <script src="script.js" type="text/javascript"></script>
  </body>
</html>
```

#### script.js

```javascript
const div = document.createElement("div");

const heading = document.createElement("h1");
heading.textContent = "Hello";
heading.className = "header";

const para = document.createElement("p");
para.textContent = "Welcome to the session";
para.className = "para";

const btn = document.createElement("button");
btn.textContent = "Click";
btn.className = "btn";

div.append(heading);
div.append(para);
div.append(btn);

document.getElementById("root").append(div);
```

### React CODE

#### index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>

    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>

    <script src="scripts.js" type="text/babel"></script>
  </body>
</html>
```

#### script.js

```javascript
const heading = React.createElement("h1", null, "Hello");

const para = React.createElement(
  "p",
  { className: "para" },
  "Welcome to the session"
);

const btn = React.createElement("button", { className: "btn" }, "Click");

const div = React.createElement("div", {
  className: "App",
  children: [heading, para, btn],
});

ReactDOM.createRoot(document.getElementById("root")).render(div);
```

#### script.js (Using JSX)

```javascript
const header = (
  <div>
    <h1 className="header">Hello</h1>
    <p className="para">Welcome to the session</p>
    <button className="btn">Click</button>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(header);
```

## Creating First React Element

To include React in a simple web page, CDN(Content Delivery Network) can be
used. You need to create a new HTML file and include the CDN links of the following:

**React**: React-script-tag is an npm package that provides a React `<script>` tag which
supports universal rendering. With this library, we can create react components, that
is, a plain javascript object with some properties.

```html
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.development.js"
></script>
```

**React-DOM**: React-DOM basically converts the javascript object returned by React
script tag to HTML nodes that can be rendered in the browser.

```html
<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
></script>
```

**Babel**: JSX files are not understandable by the browser. It is a tool that converts JSX
files to simple javascript code that the browser understands. Moreover, it also
converts ES6 and ES5 code to javascript code.

```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

Now, we are ready to use React library in our webpage. So, introduce a div tag with
an id “root” in the body. We call this a “root” DOM node because everything inside it
will be managed by React DOM.

```html
<div id="root" type="text/babel"></div>
```

Now, create a script section at the end of the document. Then, pass the DOM
element to `ReactDOM.createRoot()`, and then to `root.render()` to render an
HTML element dynamically.

```html
<script language="JavaScript">
  const heading = React.createElement("h1", null, "Hello");
  ReactDOM.createRoot(document.getElementById("root")).render(heading);
</script>
```

After that, use the **live server** extension of VS Code to serve the webpage and see
the output.

### React.createElement

A React element describes what the real Document Object Model (DOM) element
should look like. React.js uses virtual DOM to design the UI and interact with the
browser. It is made up of react elements that seem similar to HTML elements but
are JavaScript objects. In simple words, react elements are the instructions for how
the browser DOM should be created. We can create the react elements using the
below syntax by embedding HTML elements in JavaScript to display the content on
the screen.

`React.createElement(type,{props},children);`

It takes three arguments. They are:

- **type**: specifies the type of the HTML element (h1, p, button).
- **props**: specifies properties of the object ({style:{size:10px}} or event handlers,
  classNames,etc).
- **children**: anything that needs to be displayed on the screen.

### React.createRoot

It creates a React root for the supplied container and returns the root. The root can
be used to render a React element into the DOM with render:

`const root = createRoot(container);`

`root.render(element);`

### Root.render

React elements are immutable. Once you create an element, you can’t change its
children or attributes. The only way to update the UI is to create a new element, and
pass it to root.render().

`root.render(element, container element);`

It takes two arguments:

- element: The element that needs to be rendered in the DOM.
- container element: It specifies where to render the element in the DOM.

#### Note:

For running your React.js project, there are two modes available –
development and Reactjs build production. During the development phase, we will
be running our code locally using the development mode where React provides us
with many helpful warnings and tools for easily detecting and fixing problems in our
application code and eliminating potential bugs. But in production mode, the
warning messages and other features present in development mode for debugging
are suppressed. It minifies your code, optimizes assets, and produces lighter-weight
source maps. As a result, the bundle size is drastically reduced, improving page load
time. React recommends utilizing the production mode while deploying the
application.
