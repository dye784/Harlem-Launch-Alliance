import React from 'react';
import {Navbar, NavItem} from 'react-materialize'
import { Link } from 'react-router'

const NavBar = (props) => {
  return (
    <Navbar style={{ backgroundColor: '#39185D' }} brand="Harlem Launch Alliance" right>
      <Link to="projects">PROJECTS</Link>
      <Link to="about" >ABOUT</Link>
      <Link to="contact" >CONTACT</Link>
      <Link to="sponsors" >SPONSORS</Link>
      <Link to="gallery" >GALLERY</Link>
    </Navbar>
  )
}

export default NavBar;
