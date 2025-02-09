import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/Router.jsx'
import './index.css'
import Authprovider from './Provider/Authprovider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={Router}>

      </RouterProvider>
    </Authprovider>
  </StrictMode>,
)
