import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './providers/theme-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider storageKey="ui-theme">
    <App />
  </ThemeProvider>

)
