import { useState } from 'react'
import { NavLink } from 'react-router'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Outlet } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
     <Header />
     <main>
      <Outlet />
     </main>
     <Footer />
   </div>
  )
}

export default App
