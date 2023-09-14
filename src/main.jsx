import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Owner from './Component/Owner.jsx';
import Homenormal from './Component/Homenormal.jsx'
import HomeUser from './Component/HomeUser.jsx'
import HomeAdmin from './Component/HomeAdmin.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element: <Homenormal/>    
  },
  {
    path:'/owner',
    element: <Owner />  
  },
  {
    path:'/homeuser',
    element: <HomeUser />  
  },
  {
    path:'/homeadmin',
    element: <HomeAdmin />  
  },
]) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}/>
)
