# Getting Started with Create React App


### Instructions to create react app:
1. Go to the desktop using cd Desktop or your project root directory
where you want to create the project.
2. Use command ```npx create-react-app <app_name>```, to create the
react app.
3. Use the command ```cd <app_name>``` and go to the app.
4. Use ```ls``` to display the list of files in the current directory.
5. And now open the file in VS Code.
6. Use ```npm start``` to start your first react project.

Create-React-App can also be installed globally so that you can create a react
project anywhere inside your system. ```npm install -g create-react-app```
is used to install CRA globally. But it is not recommended as versions may
change, and you may have two projects going that use two different versions.
It's not even needed to install create-react-app as you can do ```npx
create-react-app <app_name>``` and always use the latest version without
polluting your system.

### Folder & File structure
The React application automatically creates required folders, as shown below.

1. node_modules -> This folder will contain all the third party libraries and
other react js dependencies.
2. index.html -> It is the html file which gets loaded on the browser. It
contains html tags.
3. manifest.json -> It contains information about your app like name,
description, icon, etc.
4. src folder -> src is one of the main folders in react project. You can
delete or modify any file of this folder except index.js as it is the entry
point for webpack.
5. index.js -> index.js is the file that will be called once we will run the
project.
6. app.js -> App.js is a component that will get loaded under index.js file.
7. .gitignore -> This file is used by source control tool to identify which files
and folders should be included or ignored during code commit
8. package.json -> This file contains dependencies and scripts required for
the project.
9. package.lock.json -> It is created for locking the dependency with the
installed version. It will install the exact latest version of that package in
your application and save it in the package.

### Imports/Exports
If you declare some value/function in some file, and you try to access that in another
file, you won’t be able to do so. As, each individual has its own local scope. To make
all these available in another file, we can use export and import.

The export and import are the keywords to utilize the code of one file to other files.

#### Export
Export keyword is used to provide code to other files.There are two types of
exports:

1. **Named Exports**: This syntax allows you to individually import values
that have been exported by their name. It can be done in two ways: _Export Individually & Export all at once at the bottom_
2. **Default Exports**: You can export multiple named exports and imported
them individually or as one object with each export as a method on the
object. But, files can also contain a default export, using the default
keyword. A default export will not be imported with curly brackets, but
will be directly imported into a named identifier. It can be done in two
ways: Export Individually & Export at the bottom.
Remember -> You can have multiple named exports per module but only one default export.

#### Import
Import keyword is used to read code exported from another files. The as keyword is
used to create an alias to import under different names. Import can be done in three
ways:
1. Importing named exports:
import {x, ...} from "file"
2. Importing the default export:
import x from "file"
3. Import all:
import * as obj from "file"


### Components
A component is a small, reusable chuck of code. It lets you split the UI into
independent, reusable pieces, and think about each piece in isolation.

We can create components with JavaScript classes or functions. To use
React's properties and methods in our class components we must subclass
the Component class from React. This way we can use the code from the
React library without having to write it over and over again.

A function is a valid React component if it accepts a single props object
argument with data and returns a React element. We call these functions as
functional components because they are simple JavaScript functions.

#### Functional Component
1. Functional components cannot extend
from any class
2. Do not require the render function 
3. Do not support a constructor
4. Create and Maintain state information
with hooks

#### Class Component
1. Class components must extend from
the React.Component class
2. Require a render function that returns
an HTML element
3. Require a constructor to store state
4. Create and Maintain state information
with lifecycle methods

#### Why use Functional Components?
1. Make code more reusable and readable
2. Are easy to test and debug
3. Yield better performance
4. Low coupling and cross dependency in code
5. Easy to separate code into container and presentational components

#### Why use Class Components?
1. If you prefer working with classes
2. Still used in some legacy projects

