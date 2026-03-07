# REACT HOOKS PART-II

## Blogging-App Project Setup

### Blog.js

```jsx
import { useState } from "react";

export default function Blog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <h1>Write a Blog!</h1>

      <div className="section">
        <form onSubmit={handleSubmit}>
          <Row label="Title">
            <input
              className="input"
              placeholder="Enter the Title of the Blog here.."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Row>

          <Row label="Content">
            <textarea
              className="input content"
              placeholder="Content of the Blog goes here.."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Row>

          <button className="btn">ADD</button>
        </form>
      </div>

      <hr />

      <h2>Blogs</h2>
      <h3>{title}</h3>
      <p>{content}</p>
    </>
  );
}

// Row component to introduce a new row section in the form
function Row(props) {
  const { label } = props;
  return (
    <>
      <label>
        {label}
        <br />
      </label>
      {props.children}
      <hr />
    </>
  );
}
```

- Created a Blog component to implement the blog writing feature.
- Added `useState` hooks to manage `title` and `content` input values.
- Implemented a form to allow users to enter a blog title and blog content.
- Added `handleSubmit()` function to prevent the default form refresh behavior.
- Displayed the entered blog `title` and `content` below the form.
- Created a reusable `Row` component to structure each form field with a label and input area.

### App.js

```jsx
import Blog from "./Blog";

function App() {
  return (
    <>
      <Blog />
    </>
  );
}

export default App;
```

- Imported the Blog component.
- Rendered the Blog component as the main UI of the application.

#### 🖥️ What You See in Browser:

<img src="../images/blogging-app_setup.png" alt="Blogging-App Project Setup" width="700" height="auto">

## Adding a new Blog

### Blog.js

```diff
 import { useState } from "react";

 export default function Blog() {
   const [title, setTitle] = useState("");
   const [content, setContent] = useState("");
+  const [blogs, setBlogs] = useState([]);

   function handleSubmit(e) {
     e.preventDefault();
+
+    // Add new blog to the blogs array
+    setBlogs([{ title, content }, ...blogs]);
+    console.log(blogs);
   }

   return (
     <>
       <h1>Write a Blog!</h1>

       ...
       <hr />

       <h2>Blogs</h2>

-      <h3>{title}</h3>
-      <p>{content}</p>

+      {blogs.map((blog, i) => (
+        <div className="blog" key={i}>
+          <h1>{blog.title}</h1>
+          <p>{blog.content}</p>
+        </div>
+      ))}
     </>
   );
 }
```

#### Changes in Blog.js

- Added a new state blogs using `useState([])` to store multiple blog posts instead of just displaying one.
- Updated `handleSubmit()` to add a new blog object (`{ title, content }`) to the blogs array.
- Used the spread operator (`...blogs`) to keep previously added blogs and prepend the new blog.
- Implemented dynamic rendering of blogs using `blogs.map()` instead of directly displaying `title` and `content`.
- Each blog is displayed inside a `<div className="blog">` with a unique key.
- Added `console.log(blogs)` to debug and verify blog data after submission.

#### 🖥️ What You See in Browser:

<img src="../images/adding-blogs.png" alt="Adding a new Blog" width="700" height="auto">

## Passing an Object in useState()

### Blog.js

```diff
 import { useState } from "react";

 export default function Blog() {
-  const [title, setTitle] = useState("");
-  const [content, setContent] = useState("");
+  const [formData, setFormData] = useState({ title: "", content: "" });
   const [blogs, setBlogs] = useState([]);

   function handleSubmit(e) {
     e.preventDefault();

-    setBlogs([{ title, content }, ...blogs]);
+    setBlogs([{ title: formData.title, content: formData.content }, ...blogs]);
+    setFormData({ title: "", content: "" });
     console.log(blogs);
   }

   return (
     <>
       ...
       <Row label="Title">
         <input
-          value={title}
-          onChange={(e) => setTitle(e.target.value)}
+          value={formData.title}
+          onChange={(e) =>
+            setFormData({
+              title: e.target.value,
+              content: formData.content,
+            })
+          }
         />
       </Row>

       <Row label="Content">
         <textarea
-          value={content}
-          onChange={(e) => setContent(e.target.value)}
+          value={formData.content}
+          onChange={(e) =>
+            setFormData({
+              title: formData.title,
+              content: e.target.value,
+            })
+          }
         />
       </Row>
       ...
     </>
   );
 }
```

#### Changes in Blog.js

- Replaced two individual state variables (`title`, `content`) with a single state object `formData`.
- Updated form inputs to use `formData.title` and `formData.content` as values.
- Updated `onChange` handlers to update specific fields inside the `formData `object.
- Modified `handleSubmit()` to create new blog entries using `formData` values.
- Added form reset logic `(setFormData({ title: "", content: "" }))` after blog submission to clear the inputs.

#### Why the Entire `formData` Object is Passed to `setFormData`?

- `formData` is **one object state**. So when you call `setFormData`(), React expects the complete new object.

- If you update only one field like this:

  ```jsx
  setFormData({ title: e.target.value });
  ```

  - React will replace the whole object and `content` will be lost.

- So we pass the entire object:
  ```jsx
  setFormData({
    title: e.target.value, // changed field
    content: formData.content, // unchanged field (kept from previous state)
  });
  ```

  - `title`→ updated with the new value from the input.
  - `content` → remains the same by using the existing value from `formData`

- This ensures both fields remain in the state object.

The entire `formData` object is passed to `setFormData` because React replaces the whole state object during updates, so unchanged fields must be preserved.


#### 🖥️ What You See in Browser:

<img src="../images/form-reset.png" alt="Form Reset" width="700" height="auto">
