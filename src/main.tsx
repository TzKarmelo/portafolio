// @ts-expect-error: Font package may not have TypeScript types
import '@fontsource/roboto';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/global.css'
import './components/scrollbar/scrollbar.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
