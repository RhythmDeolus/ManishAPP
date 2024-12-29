import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'


import "flowbite"
import './index.css'
import App from './App.tsx'
import { DarkThemeToggle, Flowbite } from "flowbite-react";


createRoot(document.getElementById('root')!).render(
  <Flowbite>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </Flowbite>,
)
