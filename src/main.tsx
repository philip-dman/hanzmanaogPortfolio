import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header/header.tsx';
import Hero from './components/hero/hero.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Hero />
  </StrictMode>,
)
