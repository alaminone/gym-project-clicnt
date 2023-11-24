import React from 'react'
import ReactDOM from 'react-dom/client'
import {  HelmetProvider } from 'react-helmet-async';
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/RouterRoot'
import Authprovider from './provider/Authprovider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Authprovider>
   <HelmetProvider>
   <RouterProvider router={router} />
   </HelmetProvider>
  

  
   </Authprovider>
  </React.StrictMode>,
)
