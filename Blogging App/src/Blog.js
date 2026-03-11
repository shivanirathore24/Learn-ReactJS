import { useState, useRef, useEffect, useReducer } from "react";
import { db } from "./firebaseInit";
import {
  collection,
  doc,
  setDoc,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";

// 2. Reducer function
const blogsReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [action.blog, ...state];

    case "REMOVE":
      return state.filter((blog, index) => index !== action.index);

    case "INIT":
      return action.blogs;

    default:
      return state;
  }
};

export default function Blog() {
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");

  const [formData, setFormData] = useState({ title: "", content: "" });
  //const [blogs, setBlogs] = useState([]);
  //1. replacing useState for blogs with useReducer hook
  const [blogs, dispatch] = useReducer(blogsReducer, []);
  const titleRef = useRef(null);

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  useEffect(() => {
    if (blogs.length && blogs[0].title) {
      document.title = blogs[0].title;
    } else {
      document.title = "No Blogs";
    }
  }, [blogs]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "blogs"), (snapShot) => {
      const blogs = snapShot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      console.log(blogs);

      dispatch({
        type: "INIT",
        blogs: blogs,
      });
    });
    return () => unsub(); // cleanup

    // async function fetchData() {
    //   const snapShot = await getDocs(collection(db, "blogs"));
    //   console.log(snapShot);
    //   const blogs = snapShot.docs.map((doc) => {
    //     return {
    //       id: doc.id,
    //       ...doc.data(),
    //     };
    //   });
    //   console.log(blogs);
    //   dispatch({
    //     type: "INIT",
    //     blogs: blogs,
    //   });
    // }
    // fetchData();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    //setBlogs([{ title: formData.title, content: formData.content }, ...blogs]);
    // 3. Replacing setBlogs with dispatch function
    dispatch({
      type: "ADD",
      blog: { title: formData.title, content: formData.content },
    });

    const docRef = doc(collection(db, "blogs"));
    await setDoc(docRef, {
      title: formData.title,
      content: formData.content,
      createdOn: new Date(),
    });

    setFormData({ title: "", content: "" });
    titleRef.current.focus();
    console.log(blogs);
  }

  async function removeBlog(id) {
    //setBlogs(blogs.filter((blog, index) => index !== i));
    //4. Replacing setBlogs with dispatch
    // dispatch({ type: "REMOVE", index: i });
    const docRef = doc(db, "blogs", id);
    await deleteDoc(docRef);
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
              value={formData.title}
              ref={titleRef}
              onChange={(e) =>
                setFormData({
                  title: e.target.value,
                  content: formData.content,
                })
              }
            />
          </Row>

          <Row label="Content">
            <textarea
              className="input content"
              placeholder="Content of the Blog goes here.."
              value={formData.content}
              required
              onChange={(e) =>
                setFormData({ title: formData.title, content: e.target.value })
              }
            />
          </Row>

          <button className="btn">ADD</button>
        </form>
      </div>

      <hr />

      <h2>Blogs</h2>
      {blogs.map((blog) => (
        <div className="blog" key={blog.id}>
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>

          <div className="blog-btn">
            <button
              className="btn remove"
              onClick={() => {
                removeBlog(blog.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
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
