## Blogging App

### Adding a new Blog

In the updated version of code, the following changes were made:

1. State for Blogs:
   - const [blogs, setBlogs] = useState([]); was added to manage the list of submitted blogs. The state blogs is an array that stores all the blogs, and setBlogs is used to update it.
2. handleSubmit Function:
   - The handleSubmit function was updated to add the current title and content to the blogs array using setBlogs([{ title, content }, ...blogs]);. This creates a new array with the latest blog at the beginning, followed by the previous blogs.
3. Rendering Blogs:
   - A map function was added to render each blog from the blogs array
   - This iterates over the blogs array and displays the title and content of each blog.

These changes enable your application to store and display multiple blogs instead of just the latest one.

### Passing an object in useState()

The main update in the code of the Blog component involves the use of a single state object, formData, to manage both the title and content of the blog post. Here's a breakdown of the changes:

1. State Management:
   - The previous version used two separate useState hooks for title and content.
   - The updated version combines them into a single useState object called formData to store both title and content.
2. Handling Input Changes:
   - In the previous version, separate onChange handlers were used for title and content, each updating its respective state.
   - In the updated version, the onChange handlers update the formData object. For the title input, it updates the title while preserving the content, and vice versa for the content input.
3. Form Submission:
   - The updated version still uses handleSubmit to prevent page refresh and adds the new blog entry to the blogs state. However, it now references formData.title and formData.content for both fields.

This consolidated state approach simplifies handling form data, especially as the form grows in complexity.

### Deleting a Blog

The change made to the original code is the introduction of the removeBlog function, and the associated functionality for deleting a blog post. Here’s an explanation of the changes:

1. New removeBlog Function:

   - A new function, `removeBlog(i)`, was added. It takes the index i of the blog to be removed and updates the blogs state by filtering out the blog at that index.
   - `setBlogs(blogs.filter((blog, index) => index !== i));:` This line updates the state to include only the blogs whose index does not match the one to be deleted.

2. Delete Button in Each Blog:

   - A new `<button>` element was added inside the map function where the blogs are displayed.
   - This button has an onClick handler that calls `removeBlog(i)` with the blog’s index as an argument, triggering the deletion of the corresponding blog.
   - The button is styled with `className="btn remove"` for specific styling (if defined).

This allows users to remove specific blog posts dynamically from the list.

### Focus on Input Field

In the updated code, the following additions were made:

1. useRef Hook:
   - `const titleRef = useRef(null);` is added to create a reference to the title input field. This allows us to programmatically focus on the input field when the component mounts or after the form is submitted.
2. useEffect Hook:
   - `useEffect(() => { titleRef.current.focus(); }, []);` is added to ensure that when the component first renders, the title input field is focused automatically. This is executed only once when the component mounts because of the empty dependency array [].
3. Focus on Submit:
   - Inside the handleSubmit function, `titleRef.current.focus();` is called to return the focus to the title input field every time a new blog is submitted. This improves the user experience by allowing them to continue typing new blog titles without needing to click the input field again.

These changes improve the usability by automatically focusing the title input field when the page loads and when the user submits a blog post.

### Setting the Title

In the updated code, the following changes were made:

1. Second useEffect Hook:
   - A new useEffect is added to update the document title based on the most recent blog title: This effect runs whenever the blogs state changes. It sets the document title to the latest blog's title (the most recent blog is at index 0). If there are no blogs, the title is set to "No Blogs".
2. required Attribute in Textarea:
   - The textarea for the blog content now has a required attribute
   - This ensures that the blog content must be filled out before the form can be submitted.

### The useReducer hook

useReducer is a React Hook that lets you add a reducer to your component. It is
typically used when you have complex state transitions that involve multiple
sub-values or when the next state depends on the previous state.

It is a more powerful alternative to the useState hook and is particularly useful when
managing state for large or deeply nested objects. The useReducer hook provides a
simple API for dispatching actions and updating state in a predictable way.

Parameters

1. reducer: In React, the useReducer hook takes a pure reducer function as its
   first argument, which defines how the state gets updated. The reducer
   function should take in the current state and an action as arguments and
   return the new state. The state and action can be of any type.
2. initialState: The value that represents the initial state of the component. This
   can be any value, including an object or an array.

Returns

useReducer returns an array with exactly two values:

1. The current state. During the first render, it’s set to the initialState.
2. The dispatch function that lets you update the state to a different value and
   trigger a re-render.

Example:

Usage of useReducer hook ->
`const [state, dispatch] = useReducer(reducer, initialState);`
This code snippet uses the useReducer hook to define a state variable named state
with an initial value of initialState, and a function named dispatch that can be used
to dispatch updates to the state.

#### The dispatch function

The dispatch function returned by useReducer lets you update the state to a
different value and trigger a re-render. You need to pass the action as the only
argument to the dispatch function

Example:

`const [timer, dispatch] = useReducer(reducer, initialState)`
`const handleIncrement = () => {`
`dispatch({ type: "INCREMENT_COUNT" });`
`};`

This code snippet uses the dispatch function from the useReducer hook and
passes an action object of type "INCREMENT_COUNT". The reducer function then
checks this action type to update the state of the timer.

#### Writing the reducer function

The reducer function used in useReducer hook of React is a pure function that takes
the current state and an action as arguments, and returns the new state.

The reducer function evaluates the type of the action and updates the state based on
the type of action.

Example:

`const reducer = (state, action) => {`

`switch (action.type) {`

    case "incremented_age": {
        return {
        name: state.name,
        age: state.age + 1,
        };
    }

    case "changed_name": {
        return {
        name: action.nextName,
        age: state.age,
        };
    }

    default:
    return state;

`}`

### Blogs using useReducer()

A detailed explanation of the added code and how it functions in the updated version of the Blogging App:

1. useReducer Hook
   - `import { useReducer } from "react";`
   - This line imports the useReducer hook from React. Unlike useState, which manages simple state updates, useReducer is used when you need to handle more complex state logic (like managing an array of blogs, where actions such as adding or removing blogs are involved).
2. blogsReducer Function -> Purpose: This function defines how the state (the list of blogs) will change based on different actions (ADD and REMOVE).
   - Parameters:
     - state: The current state of blogs (the array of blog objects).
     - action: An object that contains the type of action (like "ADD" or "REMOVE") and any additional data (like the blog to be added or the index of the blog to be removed).
   - ADD case:
     - When the action type is "ADD", the new blog (action.blog) is added to the beginning of the state array. The blog is stored as an object with a title and content.
     - `return [action.blog, ...state]`: This returns a new array with the new blog added at the beginning, followed by the rest of the previous blogs (...state).
   - REMOVE case:
     - When the action type is "REMOVE", the blog at the index specified in action.index is removed from the array.
     - `state.filter((blog, index) => index !== action.index)`: This filters out the blog whose index matches the action.index.
   - Default:
     - If the action type doesn't match any known case, the function returns an empty array, ensuring no accidental state corruption.
3. Using useReducer for Managing Blogs
   - `const [blogs, dispatch] = useReducer(blogsReducer, []);`
   - Purpose: This line initializes the useReducer hook. Instead of useState which holds simple state values, useReducer takes two arguments:
     - The blogsReducer function defined above.
     - The initial state, which in this case is an empty array [] (meaning no blogs are present initially).
   - dispatch: This is the function that will be used to trigger state changes based on actions. Whenever you call dispatch, it triggers the blogsReducer function to update the blogs state accordingly.
4. Dispatching the "ADD" Action - `dispatch({
  type: "ADD",
  blog: { title: formData.title, content: formData.content },
});` - Purpose: This dispatches an action to the reducer to add a new blog. - `type: "ADD"`: This specifies the action type as ADD, so the reducer knows to execute the ADD case. - `blog: { title: formData.title, content: formData.content }`: The new blog to be added is passed as part of the action object. This blog object contains the title and content from the form data. - When this action is dispatched, the reducer adds the new blog to the beginning of the blogs array.
5. Dispatching the "REMOVE" Action
   - `dispatch({ type: "REMOVE", index: i });`
   - Purpose: This dispatches an action to remove a specific blog by its index.
   - `type: "REMOVE"`: Specifies the action type as REMOVE, so the reducer knows to execute the REMOVE case.
   - `index: i`: Passes the index of the blog to be removed.
   - When this action is dispatched, the reducer filters out the blog at the specified index from the blogs array.
6. Summary of Added Code:
   - useReducer replaces useState for managing the blogs array.
   - blogsReducer function handles two actions:
     - ADD: Adds a new blog to the beginning of the blogs array.
     - REMOVE: Removes a blog from the array based on its index.
   - dispatch is used to trigger these actions (ADD and REMOVE) within the reducer, allowing for structured and maintainable state management.

### Connecting Firebase to the App

1. Install Firebase, use this command: `npm install firebase`
2. Created 'firebaseInit.js' -> code initializes a Firebase app using specific project credentials (from firebaseConfig) and sets up Firestore, a cloud database. The db object represents the Firestore instance, which can be used to interact with the database in a web app
3. In 'Blog.js' -> the line `import {db} from "../firebaseInit";` is added to import the Firebase Firestore instance from a separate file (firebaseInit). This allows you to use Firebase Firestore (db) within your blogging app for managing blog data in the cloud.

### Adding a document

In the updated code, the following changes were made:

1. Firestore Integration:
   - Imported collection and addDoc from Firebase Firestore.
   - Inside handleSubmit, after dispatching the blog to the reducer, the code adds a new blog entry to Firestore using addDoc in the "blogs" collection, which includes title, content, and createdOn (the date of creation).
2. Error Handling:
   - Added a try-catch block in handleSubmit to handle any errors during the Firestore document addition process, logging errors to the console if they occur.

These changes enable storing blog data in Firestore alongside the existing local state management.

### addDoc vs setDoc

Difference Between addDoc and setDoc:

1. addDoc:
   - Automatically generates a unique document ID in a collection.
   - Easier when you don’t care about controlling the document ID.
2. setDoc:
   - Allows you to specify the document ID yourself.
   - More control over the structure or location of the document within the collection.

Added Part of Code: setDoc Usage ->
The code now uses setDoc to add a document to Firestore instead of addDoc.

1. The doc function creates a new document reference with a unique ID in the blogs collection.
2. setDoc then adds the blog data to this document in Firestore.

### Getting Documents from Database

The added part in the code includes fetching blogs from Firestore:

1. New action in reducer:
   - "SET" case is added to the blogsReducer to update the blogs with the fetched data from Firestore.
2. Fetching blogs from Firestore:
   - A new useEffect is added to run when the component loads. It fetches blog data using getDocs() from Firestore's "blogs" collection.
   - The fetched blogs are stored in the state using the "SET" action.
3. Mapping Firestore data:
   - The fetched documents are mapped to an array of blog objects, containing id and other data fields (title, content, etc.), and then dispatched to update the blogs state.

These additions enable the app to display existing blogs stored in Firestore when the app loads.

### Realtime Updates

The updated part of the code involves the addition of real-time updates using Firestore's onSnapshot() method, which replaces the previous getDocs() function.

1. Switch from getDocs() to onSnapshot()
   - Previously, you were using getDocs() to fetch blog data once from Firestore. Now, you have replaced it with onSnapshot() for real-time updates.
   - Explanation:
     - onSnapshot(): This method continuously listens for changes to the "blogs" collection in Firestore. Whenever any document is added, removed, or updated in the collection, this function is triggered automatically.
     - Real-time updates: With onSnapshot(), your app can now reflect changes in the blog posts in real-time, without needing to refresh or fetch the data again manually.
2. dispatch({ type: "SET" })
   - The dispatch({ type: "SET", blogs: blogs }) updates the state of blogs with the latest data fetched from Firestore, ensuring the displayed blogs are always current.

Removal of fetchData() ->
The previous code using getDocs() for fetching blogs was removed to make way for the real-time update mechanism provided by onSnapshot(). Now, the blogs are fetched automatically when they change in Firestore.

### Deleting a document
1. Firestore Document Deletion (deleteDoc):
   - The removeBlog function is updated to remove the blog directly from Firestore using the deleteDoc method.
   - The function now takes the blog's id as a parameter to identify the specific document in the Firestore collection and deletes it.
2. Firestore Cleanup (unsub):
   -The onSnapshot listener is now cleaned up when the component unmounts to prevent memory leaks. This ensures that the listener stops listening for real-time updates after the component is removed from the DOM.

These changes enhance the app by adding the ability to delete blogs from Firestore and manage the real-time listener lifecycle.

## Firebase Related Notes

### Storing Data
Why does data get lost after refresh?
   - Here, we are storing the blog's data inside of the state locally in the form of an array.
When you add a new blog, it gets added to the blogs array as well. But, when the
page is reloaded, the App gets rerendered, and this array gets re-initialized to the
empty array. So, This acts as temporary storage where data is not saved after
refresh.

`const [formData, setformData] = useState({title:"", content:""})
const [blogs, setBlogs] = useState([]);`

### Using Databases
A database is an organized collection of data for easy access, management and
updating. To save stored data even after the refresh, you need to connect your React
App with some external database. 

Databases can be classified into two categories:
   - SQL Databases or Relational Databases
   - No SQL Databases

### SQL Databases VS NoSQL Databases
1. Data Storage Model
   - SQL -> Tables with fixed
rows and columns
   - NoSQL -> Document: JSON documents,
Key-value: key-value pairs,
Wide-column: tables with rows and
dynamic columns, Graph: nodes and
edges

2. Development History
   - SQL -> Developed in the
1970s with a focus on
reducing data
duplication
   - NoSQL -> Developed in the late 2000s with a
focus on scaling and allowing for rapid
application change driven by agile and
DevOps practices.

3. Primary Purpose
   - SQL -> General purpose and
best suitable for
structured,
semi-structured, and
unstructured data.
   - NoSQL -> Best suitable for structured data.
Document: general purpose,
Key-value: large amounts of data with
simple lookup queries,
Wide-column: large amounts of data
with predictable query patterns,
Graph: analyzing and traversing
relationships between connected data

4. Schemas 
   - SQL -> Rigid 
   - NoSQL -> Flexible

5. Scaling 
   - SQL -> Vertical (scale-up
with a larger server)
   - NoSQL -> Horizontal (scale-out across
commodity servers)

6. Examples 
   - SQL -> Oracle, MySQL,
Microsoft SQL, Server, and
PostgreSQL
   - NoSQL -> Document: MongoDB and CouchDB,
Key-value: Redis and DynamoDB, Wide-column: Cassandra and HBase, Graph: Neo4j and Amazon Neptune

### Realtime Database
The Realtime database helps our users collaborate. It ships with mobile and web
SDKs, allowing us to build our app without needing servers. When our users go
offline, the Real-time Database SDKs use a local cache on the device for serving
and storing changes. The local data is automatically synchronized when the device
comes online.

### Firebase
The Firebase Realtime Database is a cloud-hosted database in which data is stored
as JSON. The data is synchronized in real-time to every connected client. Clients
share one Realtime Database instance and automatically receive updates with the
newest data when we build cross-platform applications with iOS and JavaScript
SDKs. Firebase offers two cloud-based, client-accessible database solutions that
support real-time data syncing:
   - _Cloud Firestore_ is Firebase's newest database for mobile app development.
It builds on the successes of the Realtime Database with a new, more intuitive
data model. Cloud Firestore also features richer, faster queries and scales
further than the Realtime Database. Data is stored in document format.
   - _Realtime Database_ is Firebase's original database. It's an efficient,
low-latency solution for mobile apps requiring real-time synced states across
clients. Data is stored in JSON format.

### Cloud Firestore
In Cloud Firestore, the unit of storage is the document. A document is a lightweight
record containing fields that map to values. Each document is identified by a name.
Each document includes a set of key-value pairs. Cloud Firestore is optimized for
storing extensive collections of small documents. Documents live in collections,
which are simply containers for documents.

For example, you could have a users collection to contain your various users, each
represented by a document: Collection -> documents -> data

Data types that Cloud Firestore supports are Array, Boolean, Bytes, Date and time,
Floating-point number, Geographical point, Integer, Map, Null, Reference and a Text
string.

#### Understanding the working
Cloud Firestore caches data that your app is actively using, so the app can write,
read, listen to, and query data even if the device is offline. When the device returns
online, Cloud Firestore synchronizes any local changes back to Cloud Firestore. To
keep data in your apps current without retrieving your entire database each time an
update happens, real-time listeners are added. Adding real-time listeners to your
app notifies you with a data snapshot whenever the data your client apps are
listening to changes, retrieving only the new changes.

For Example, Your firebase has a collection of blogs with blogs B1 and B2 as
documents. As soon as the client opens the app, a persistent connection will be
established between the firestore and the client via web socket. On the client side,
the listeners installed, which are nothing but a call-back function, listen to any
changes happening to the client. Similarly, there is a process inside cloud firestore,
which listens to any changes happening in the database. These listeners are used to
notify changes in the apps.

When we open the app for the first time, it is not directly updated to the UI. First, the
data gets stored inside the local cache of the device. Here B1 and B2 will be stored
already in the local cache. When a new document B3, is added, it will be added to
the local cache, and then the listener will be notified. The Listener will send all the
data from the local cache to the firebase, including the changes. Now, the Process
present in firebase gets notified. The Process will notify all the other devices about
the changes, and changes will get updated for all the devices. Only the new data or
changes get updated.

### Using Firestore in your Application
For more detailed steps, you can check this [Link](https://firebase.google.com/docs/firestore/).

#### Create a Cloud Firestore Database
1. In the [Firebase console](https://console.firebase.google.com/u/0/), click _Add project_, then follow the on-screen
instructions to create a Firebase project. Enter a project name, then click
Continue. Select your Firebase account from the dropdown or click Create a
new account if you don't already have one. Click Continue once the process
completes.
2. Next, click the Web icon (</>) towards the top-left of the following page to set
up Firebase for the web. Enter a nickname for your app in the provided field.
Then click the Register app.
3. Copy the generated code and keep it for the following step (discussed in the
following section). Click Continue to the console.
4. Navigate to the Cloud Firestore section of the [Firebase console](https://console.firebase.google.com/u/0/project/_/firestore). Now, Follow
the database creation workflow. Select a starting mode for your Cloud
Firestore Security Rules:
○ Test mode
Good for getting started with the mobile and web client libraries, but
allows anyone to read and overwrite your data.
○ Locked mode
Denies all reads and writes from mobile and web clients. Your
authenticated application servers (C#, Go, Java, Node.js, PHP, Python,
or Ruby) can still access your database.
5. Select a _location_ for your database.
6. Click Done.

#### Initialize Firebase in Your React App
1. Install Firebase using npm:
`npm install firebase`
2. Create a firebaseinit.js file and paste the code generated earlier into this file.
You can also find this code in Project Overview > Project Settings.
3. Replace the TODOs with your app's Firebase project configuration
4. Export the firebase db object from the file and import this object into the files
where it is needed.

### Adding Data to Firebase
Add a document
When you use set() to create a document, you must specify an ID for the document
to create. 

For example:

`import { doc, setDoc } from "firebase/firestore";
await setDoc(doc(db, "cities", "new-city-id"), data);`

But sometimes there isn't a meaningful ID for the document, and it's more
convenient to let Cloud Firestore auto-generate an ID for you. You can do this by
calling the following language-specific add() methods:

`import { collection, addDoc } from "firebase/firestore";`

`// Add a new document with a generated id.`
`const docRef = await addDoc(collection(db, "cities"), {
name: "Tokyo",
country: "Japan"
});`

`console.log("Document written with ID: ", docRef.id);
`


For Blogs app the syntax will be:

`const docRef = collection(db, "blogs");`

`await addDoc(docRef, {
title: formData.title,
content: formData.content,
createdOn: new Date()
});`

#### Set a document
To create or overwrite a single document, use the following language-specific set()
methods:

`import { doc, setDoc } from "firebase/firestore";`

`// Add a new document in collection "cities"`

`await setDoc(doc(db, "cities", "LA"), {
name: "Los Angeles",
state: "CA",
country});
`

If the document does not exist, it will be created. If the document does exist, its
contents will be overwritten with the newly provided data unless you specify that the
data should be merged into the existing document, as follows:

`import { doc, setDoc } from "firebase/firestore";`
`const cityRef = doc(db, 'cities', 'BJ');
setDoc(cityRef, { capital: true }, { merge: true });`

setDoc is useful where you are generating IDs by yourself or adding a new one.


### Fetching Data from the Database
#### Get Data
The following example shows how to retrieve the contents of a single document
using get():

`import { doc, getDoc } from "firebase/firestore";`

`const docRef = doc(db, "cities", "SF");`

`const docSnap = await getDoc(docRef);`

`if (docSnap.exists()) {`

`console.log("Document data:", docSnap.data());`
`}`

`else {`

`// doc.data() will be undefined in this case`

`console.log("No such document!");`
`}`


You can also retrieve multiple documents with one request by querying documents in
a collection. For example, you can use where() to query for all of the documents that
meet a certain condition, then use get() to retrieve the results:

`import { collection, query, where, getDocs } from "firebase/firestore";`

`const q = query(collection(db, "cities"), where("capital", "==", true));`

`const querySnapshot = await getDocs(q);`

`querySnapshot.forEach((doc) => {`

`// doc.data() is never undefined for query doc snapshots`

`console.log(doc.id, " => ", doc.data());`
`});`


In addition, you can retrieve all documents in a collection by omitting the where()
filter entirely:

`import { collection, getDocs } from "firebase/firestore";`

`const querySnapshot = await getDocs(collection(db, "cities"));`

`querySnapshot.forEach((doc) => {`

`// doc.data() is never undefined for query doc snapshots`

`console.log(doc.id, " => ", doc.data());`

`});`


#### For Blogs App, we are using the following code:

`useEffect(() => {`

`async function fetchData(){`

`const snapShot =await getDocs(collection(db, "blogs"));`

`console.log(snapShot);`

`const blogs = snapShot.docs.map((doc) => {`

`return{
id: doc.id,
...doc.data()`

`}`

`})`

`console.log(blogs);`

`setBlogs(blogs);`

`}`

`fetchData();`

`},[]);`


### Deleting the Documents from Database
To delete a document, use the following language-specific delete() methods:

`import { doc, deleteDoc } from "firebase/firestore";`
`await deleteDoc(doc(db, "cities", "DC"));`

#### For blogs app, we are using the following code:
`async function removeBlog(id){`

`const docRef = doc(db,"blogs",id);`

`await deleteDoc(docRef);`

`}`

