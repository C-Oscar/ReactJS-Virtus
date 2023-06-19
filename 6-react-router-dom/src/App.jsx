import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Products from "./pages/products";
import Contact from "./pages/contact";
import Error from "./pages/error";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home />, errorElement: <Error /> },
    { path: "/products", element: <Products /> },
    { path: "/contact", element: <Contact /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
