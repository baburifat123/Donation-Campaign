import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Donation from './Compo/Donation/Donation';
import Home from './Compo/Home/Home';
import Statistics from './Compo/Statistics/Statistics';
import Details from './Compo/DonationDetails/Details';
import Leayout from './Compo/Leayout/Leayout';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Leayout></Leayout> ,
    children:[
      {
        path:'/',
        element: <Home></Home>
       
      },
      {
        path: "/Donation",
        element: <Donation></Donation>,
        loader: ()=> fetch('../Data.json')
      },
      {
        path:'/Statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/details/:id',
        element:<Details></Details>,
        loader: ()=> fetch('../Data.json')
        
      }
    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
