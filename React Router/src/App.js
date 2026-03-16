import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import { createRoutesFromElements, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemDetails from "./pages/ItemDetails";
import ErrorPage from "./pages/ErrorPage";

function App() {
  //Way-2
  // const routes = createRoutesFromElements(
  //   <>
  //     <Route path="/" element={<Navbar />}>
  //       <Route index element={<Home />} />
  //       <Route path="about" element={<About />} />
  //       <Route path="items" element={<Items />} />
  //     </Route>
  //   </>,
  // );

  // const router = createBrowserRouter(routes);

  //Way-1
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        {
          path: "items",
          children: [
            { index: true, element: <Items /> },
            {
              path: ":id",
              element: <ItemDetails />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
