import { useState } from 'react'
import { NavLink } from 'react-router'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <header>
      <nav>
        <NavLink to="/home">Home</NavLink>
        <br />
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
   </div>
  )
}

export default App
