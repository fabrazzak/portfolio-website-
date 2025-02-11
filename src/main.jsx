import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {
  RouterProvider,
} from "react-router-dom";
import Router from './Routes/Router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <RouterProvider router={Router} />
    </HelmetProvider> 
  </StrictMode>,
)
