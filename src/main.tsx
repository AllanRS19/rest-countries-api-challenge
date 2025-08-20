import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { ThemeProvider } from './providers/theme-provider.tsx'
import './index.css'
import Home from './pages/Home.tsx'
import CountryPage from './pages/CountryPage.tsx'
import Layout from './Layout.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider storageKey="ui-theme">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <Layout>
            <Home />
          </Layout>
        } />
        <Route path='/country/:alphaCode' element={
          <Layout>
            <CountryPage />
          </Layout>
        }
        />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>

)
