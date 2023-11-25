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
  <div className='max-w-7xl mx-auto'>
  <RouterProvider router={router} />
  </div>
   </HelmetProvider>
  

  
   </Authprovider>
  </React.StrictMode>,
)
