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


