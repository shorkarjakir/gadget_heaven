import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Error from './Components/ErrorPage/Error';
import Home from './Components/Home/Home';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Dashboard from './Components/Dashboard/Dashboard';
import Chart from './Components/Statistics/Chart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'book/:product_id',
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('/public/Products.json')
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        loader: () => fetch('/public/Products.json')
      },
      {
        path: '/Statistics',
        element: <Chart></Chart>,
        loader: () => fetch('/public/Products.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
