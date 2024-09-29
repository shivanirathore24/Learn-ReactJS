//Blogging App using Hooks
import { useState, useRef, useEffect, useReducer } from "react";
import { db } from "../firebaseInit";
import {
  collection,
  doc,
  deleteDoc,
  setDoc,
  onSnapshot,
} from "firebase/firestore";

function blogsReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [action.blog, ...state];
    case "SET":
      return action.blogs; // Set blogs from Firestore
    case "REMOVE":
      return state.filter((blog, index) => index !== action.index);
    default:
      return [];
  }
}

export default function Blog() {
  // const [title,setTitle] = useState("");
  // const [content,setContent] = useState("");
  const [formData, setformData] = useState({ title: "", content: "" });
  //const [blogs, setBlogs] = useState([]);
  console.log(formData);
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
    /** get all the documents from the fireStore using getDocs() */
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
    //   // Update the blogs state with the fetched blogs
    //   dispatch({ type: "SET", blogs: blogs });
    // }

    // fetchData();

    //Realtime Update
    const unsub = onSnapshot(collection(db, "blogs"), (snapShot) => {
      const blogs = snapShot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      console.log(blogs);
      // Update the blogs state with the fetched blogs
      dispatch({ type: "SET", blogs: blogs });
    });

    // Cleanup the listener when the component unmounts
    return () => {
      unsub();
    };
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    titleRef.current.focus();

    try {
      dispatch({
        type: "ADD",
        blog: { title: formData.title, content: formData.content },
      });

      // Add a new document to Firestore
      // const docRef = await addDoc(collection(db, "blogs"), {
      //   title: formData.title,
      //   content: formData.content,
      //   createdOn: new Date(),
      // });
      const docRef = doc(collection(db, "blogs"));
      await setDoc(docRef, {
        title: formData.title,
        content: formData.content,
        createdOn: new Date(),
      });

      console.log("Document written with ID: ", docRef.id);
      //setformData({ title: "", content: "" });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  function removeBlog(id) {
    //setBlogs(blogs.filter((blog, index) => index !== i));
    //dispatch({ type: "REMOVE", index: i });
    const docRef = doc(db, "blogs", id);
    deleteDoc(docRef);
  }

  return (
    <>
      <h1>Write a Blog!</h1>
      <div className="section">
        {/* Form for to write the blog */}
        <form onSubmit={handleSubmit}>
          <Row label="Title">
            <input
              className="input"
              placeholder="Enter the Title of the Blog here.."
              value={formData.title}
              ref={titleRef}
              onChange={(e) =>
                setformData({
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
                setformData({ title: formData.title, content: e.target.value })
              }
            />
          </Row>

          <button className="btn">ADD</button>
        </form>
      </div>

      <hr />

      {/* Section where submitted blogs will be displayed */}
      <h2> Blogs </h2>
      {blogs.map((blog, i) => (
        <div className="blog">
          <h3>{blog.title}</h3>
          <hr />
          <p>{blog.content}</p>

          <div className="blog-btn">
            <button
              onClick={() => {
                removeBlog(blog.id);
              }}
              className="btn remove"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

//Row component to introduce a new row section in the form
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
