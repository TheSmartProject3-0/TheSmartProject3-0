import React from 'react'
import { NavLink } from 'react-router-dom';
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
          <Navbar.Link href="/services">Services</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavbarSite