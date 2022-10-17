import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


import Home from './Home';
import Picture from './Gallery.js'
import Header from './Header.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header header={"Andy He"} page={'home'} />
        <Home />
      </div>
    ),
  },
  {
    path: "/photos",
    element: (
      <div>
        <Header header={"Photography"} page={'photos'} />
        <Picture />
      </div>

    )
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

