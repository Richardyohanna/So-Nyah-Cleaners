// src/main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "@fontsource-variable/epilogue";
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './component/scroll-to-top.tsx';
import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";
import AdminGuard from './Admin/AdminGuard.tsx'; 


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />

      <main>
        <Routes>
          <Route path="/*" element={<App />} />
          <Route path="/admin" element={<AdminGuard />} /> 
        </Routes>
      </main>

    </BrowserRouter>
  </StrictMode>,
)