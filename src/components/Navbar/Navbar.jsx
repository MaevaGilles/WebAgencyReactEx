import React from 'react'
import {Link} from "react-router-dom"
import menu from "../../assets/menu.png"


export default function Navbar() {
  return (
    <nav className='navbar'>
        <Link to="/" className='logo'>Web Agency</Link>
        <div className='menusimple'>
            <ul>
                <li><Link to="/" className='navlinks'>Home</Link></li>
                <li><Link to="/works" className='navlinks'>Works</Link></li>
                <li><Link to="/about" className='navlinks'>About</Link></li>
            </ul>
        </div>
        <img src={menu} alt="menu-burger" className='menu-burger' />
    </nav>
  )
}
