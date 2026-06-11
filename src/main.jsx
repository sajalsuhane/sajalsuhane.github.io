import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const container = document.getElementById('root')

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

if (container.hasChildNodes()) {
  // Prerendered HTML is present — hydrate over it.
  hydrateRoot(container, app)
} else {
  // Dev server / no prerender — render from scratch.
  createRoot(container).render(app)
}
