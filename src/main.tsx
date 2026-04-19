import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "@fontsource-variable/epilogue";
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './component/scroll-to-top.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>    
  </StrictMode>,
)
