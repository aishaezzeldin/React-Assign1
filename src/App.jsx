// import './App.css';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import About from './assets/Components/About/About';
// import Contact from './assets/Components/Contact/Contact';
// import Portfolio from './assets/Components/Portfolio/Portfolio'; 
// import Home from './assets/Components/Home/Home'; 


// const Router = createBrowserRouter([
 
//   { path: '*', element:<h5>404</h5> },
//   { path: 'Home', element: <Home />,  children:[
//   { path: 'About', element: <About /> },
//   { path: 'Contact', element: <Contact /> },
//   { path: 'Portfolio', element: <Portfolio /> },
//   ]
// }
 
// ])
// App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./assets/Components/Home/Home";
import About from "./assets/Components/About/About";
import Portfolio from "./assets/Components/Portfolio/Portfolio";
import Contact from "./assets/Components/Contact/Contact";

const router = createBrowserRouter([
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
  { path: "*", element: <h5>404 - Page Not Found</h5> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
