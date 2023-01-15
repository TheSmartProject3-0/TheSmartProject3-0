import React from 'react'
import { NavLink, HashRouter } from 'react-router-dom';
import { Button } from 'flowbite-react/lib/cjs/components/Button';
import { Navbar } from 'flowbite-react/lib/cjs/components/Navbar';

const NavbarSite = () => {
  return (
    <>
      <Navbar fluid={true}  rounded={false} className='bg-inherit'>
        <Navbar.Brand href="https://flowbite.com/">
          <img src="/src/assets/images/LogoTSP.png" className="mr-3 h-6 sm:h-9" alt="The Smart Project 3.0 Logo" />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button>Get started</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavbarSite