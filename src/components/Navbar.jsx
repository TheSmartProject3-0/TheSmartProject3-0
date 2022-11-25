import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button } from 'flowbite-react/lib/cjs/components/Button';
import { Navbar } from 'flowbite-react/lib/cjs/components/Navbar';

const NavbarSite = () => {
  return (
    <>

      <Navbar fluid={true}  rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button>Get started</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink to="/">Home</NavLink>
          <Navbar.Link href="/navbars">About</Navbar.Link>
          <Navbar.Link href="/services">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavbarSite