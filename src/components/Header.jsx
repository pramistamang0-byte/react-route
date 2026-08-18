import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <div>
        <header>
            <h2>This is a header</h2>
            <nav>
                <NavLink to="/home">Home</NavLink>
                <br />
                <NavLink to='/about'>About</NavLink>
                

            </nav>
        </header>
    </div>
  )
}

export default Header