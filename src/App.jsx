import {  createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./assets/Components/Home/Home";
import About from "./assets/Components/About/About";
import Portfolio from "./assets/Components/Portfolio/Portfolio";
import Contact from "./assets/Components/Contact/Contact";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      { index: true, element: <Home/>
       }, 
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  // { path: "*", element: <h5>404 - Page Not Found</h5> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
