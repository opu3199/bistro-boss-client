import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Main/Root.jsx';
import Home from './Main/Home.jsx';
import Ourmenu from './pages/Ourmenu.jsx';
import Order from './pages/Order.jsx';
import Login from './pages/Login.jsx';
import Authprovider from './Hook.jsx/Authprovider.jsx';
import Register from './pages/Register.jsx';
import Secret from './pages/Secret.jsx';
import Privateroute from './Hook.jsx/Privateroute.jsx';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Dashboard from './Admin/Dashboard.jsx';
import DashCart from './Admin/DashCart.jsx';

const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/menu',
        element:<Ourmenu></Ourmenu>
      },
      {
        path:'/order',
        element:<Order></Order>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/secret',
        element:<Privateroute><Secret></Secret></Privateroute>
      }
    ]
  },
  {
    path:'dashboard',
    element:<Privateroute> <Dashboard></Dashboard></Privateroute> ,
    children:[
      {
        path:'Cart',
        element:<DashCart></DashCart>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>

    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>

    </Authprovider>
  </React.StrictMode>,
)
