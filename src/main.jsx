import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}></Route>    
      <Route path='/about' element={<About/>}></Route>    
      <Route path='/home' element={<Home/>}></Route>    
      </Routes>
    {/* <App /> */}
    </BrowserRouter>
  </StrictMode>,
)
