import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Create from "./Create.jsx";
import NotFound from "./NotFound.jsx";
import BlogDetails from "./BlogDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/blogs/:id",
    element: <BlogDetails />,
    errorElement: <NotFound />,
  },
  {
    path: "/create",
    element: <Create />,
    errorElement: <NotFound />,
  },
]);

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
