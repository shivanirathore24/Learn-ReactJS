# CREATE REACT APP

## CDN (Content Delivery Network)

A CDN is a network of servers that distributes content from an "origin" server
to end users around the globe by caching content nearby each user's point of
internet access. They initially request content from the origin server, which is
copied and stored elsewhere as needed. Both React and ReactDOM are
available over a CDN.

### Drawbacks of using CDNs

- An essential prerequisite is an internet connection.
- If there is a server issue, packages might not load.
- Since one script file may be dependent on another, the order of CDN links is important. Browsers are not capable of linking files together. It's possible that script files won't link correctly.
- You may forget to list all of the CDN connections required for an
  application.

### How to overcome the drawbacks?

We can overcome drawbacks by installing packages locally and using
webpack which helps in file management and linking.

## Webpack

**Webpack** is a module bundler. Its main purpose is to bundle JavaScript files
for usage in a browser. For eg: if there are 2-3 files like - index.js, app.js,
form.js, button.js. A module bundler will create a bundle of these files with
their dependencies. Webpack goes through your package and creates a
**dependency graph** which consists of various modules which your web app
would require to function as expected. Then, depending on this graph, it
creates a new package which consists of the minimum number of files
required, often just a single bundle.js file which can be plugged into the html
file easily and used for the application. CRA comes pre configured with a
webpack.

### Webpack Configuration

Webpack can be configured by adding a webpack.config.js file in the root of
our application structure. It requires the following:

- **Entry property**, which is used to specify which file webpack should
  start with to get the internal dependency graph created. A path is
  passed while creating the entry point (for eg: src/index.js).
- **Loaders** check all the imports if any file needs any transformations or
  not. So, it internally transforms the files which need transformations.
- **Output property** specifying where the bundled file should be
  generated. Generally kept in the “dist” or “build” folder

## Tools Installation

### Nodejs

**Node.js** is a **run-time environment** that comes with everything you need to
run a JavaScript programme. It is used for running scripts on the server to
render content before it is delivered to a web browser. **Node Package Manager, or NPM**,
is a tool and repository for developing and sharing JavaScript code.
You can Download Node.js Installer from [here](https://nodejs.org/en/download/).
NPM is installed automatically when node js is installed.

### Google Chrome Browser

Chrome, an Internet browser released by Google, Inc. It is an open source
program for accessing the World Wide Web and running Web-based
applications. Chrome DevTools is a amazing set of web developer tools built
directly into the Google Chrome browser. You can go [here](https://support.google.com/chrome/answer/95346?hl=en&co=GENIE.Platform%3DDesktop#zippy=%2Cwindows) to check the instructions for downloading Google chrome.

### VS Code

Visual Studio Code is a lightweight but powerful source code editor which runs
on your desktop and is available for Windows, macOS and Linux.. Visit the
official website of the [Visual Studio Code](https://code.visualstudio.com/download) using any web browser
like Google Chrome, Microsoft Edge, etc to install the VS Code according to your operating system.

## Create React App

**Create-React-App** is a tool given by Facebook that provides us with
**boilerplate code** and helps us to create our own react app. It comes pre
configured with webpack and babel.

### Instructions to create react app:

1. Go to the desktop using cd Desktop or your project root directory
   where you want to create the project.
2. Use command `npx create-react-app <app_name>`, to create the react app.
3. Use the command `cd <app_name>` and go to the app.
4. Use `ls` to display the list of files in the current directory.
5. And now open the file in VS Code.
6. Use `npm start` to start your first react project.

Create-React-App can also be installed globally so that you can create a react
project anywhere inside your system. `npm install -g create-react-app`
is used to install CRA globally. But it is not recommended as versions may
change, and you may have two projects going that use two different versions.
It's not even needed to install create-react-app as you can do `npx create-react-app <app_name>`
and always use the latest version without polluting your system.

### Folder & File structure

The React application automatically creates required folders, as shown below.

1. **node_modules** -> This folder will contain all the third party libraries and
   other react js dependencies.
2. **index.html** -> It is the html file which gets loaded on the browser. It
   contains html tags.
3. **manifest.json** -> It contains information about your app like name,
   description, icon, etc.
4. **src folder** -> src is one of the main folders in react project. You can
   delete or modify any file of this folder except index.js as it is the entry
   point for webpack.
5. **index.js** -> index.js is the file that will be called once we will run the
   project.
6. **app.js** -> App.js is a component that will get loaded under index.js file.
7. **.gitignore** -> This file is used by source control tool to identify which files
   and folders should be included or ignored during code commit
8. **package.json** -> This file contains dependencies and scripts required for
   the project.
9. **package.lock.json** -> It is created for locking the dependency with the
   installed version. It will install the exact latest version of that package in
   your application and save it in the package.
