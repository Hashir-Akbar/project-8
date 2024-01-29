import React from "react";
import css from './navbar.module.css'

const Navbar = () => {

  return (
    <nav className={css.nav}>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Menu</a></li>
        <li><a href="">Where</a></li>
      </ul>

    </nav>
  )
}
export default Navbar;