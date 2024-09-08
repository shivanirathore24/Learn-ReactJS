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


