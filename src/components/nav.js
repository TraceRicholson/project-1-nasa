import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../nav.style.css';

const Nav = () => {
  return (
    <ul className="Navbar">
        <li><h2>Cool Mars Shit</h2></li>
        <li><NavLink exact to="/" activeStyle={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Home</NavLink></li>
        <li><NavLink exact to="/rover-photos" activeStyle={{fontWeight: "bold", color:"white", textDecoration: "none"}}>Mars Rover Photos</NavLink></li>
        <li><NavLink exact to="/weather" activeStyle={{fontWeight: "bold", color:"white", textDecoration: "none"}}>Mars Weather</NavLink></li>
    </ul>
  )
}

export default Nav;