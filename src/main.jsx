import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Deployment marker: remove after verification
// eslint-disable-next-line no-console
console.log('[FE DEPLOY] main.jsx boot', {
  ts: new Date().toISOString(),
  origin: typeof window !== 'undefined' ? window.location.origin : 'ssr',
  mode: import.meta.env.MODE,
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
