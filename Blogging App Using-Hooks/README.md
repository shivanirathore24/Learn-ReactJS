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


