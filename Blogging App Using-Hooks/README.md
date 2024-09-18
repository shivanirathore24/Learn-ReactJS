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
4. Dispatching the "ADD" Action
    - `dispatch({
  type: "ADD",
  blog: { title: formData.title, content: formData.content },
});`
    - Purpose: This dispatches an action to the reducer to add a new blog.
    - `type: "ADD"`: This specifies the action type as ADD, so the reducer knows to execute the ADD case.
    - `blog: { title: formData.title, content: formData.content }`: The new blog to be added is passed as part of the action object. This blog object contains the title and content from the form data.
    - When this action is dispatched, the reducer adds the new blog to the beginning of the blogs array.
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