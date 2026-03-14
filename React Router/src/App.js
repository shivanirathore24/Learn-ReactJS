import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "about", element: <About /> },
    { path: "items", element: <Items /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
