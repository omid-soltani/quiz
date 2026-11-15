import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import App from './App.jsx'
import './index.css'
import MyRouter from './lib/router.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={MyRouter} >
      <App />
    </RouterProvider >
  </StrictMode>,
)
