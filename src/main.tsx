import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Footer from './components/Footer.tsx'
import Header from './components/Header.tsx'
import Filter from './components/Filter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='flex flex-col h-screen bg-[#F4FBFF]'>
      <Header />
      <div className='flex-1 max-w[1200px] m-auto w-full'>
        <Filter 
        title ='Busque o conteúdo que deseja assitir hoje'
        placeholder='Curso de react'
        />
      </div>
      <Footer />
    </div>
  </StrictMode>,
)
