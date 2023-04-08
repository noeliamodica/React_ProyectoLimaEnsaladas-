import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/img/logo-lima.png';
import {  Link } from 'react-router-dom';
import './NavBar.css';
import { useSelector } from 'react-redux'


export const NavBar = () => {
   
   const { amount } = useSelector( (state) => state.cart)

   const [activeLink, setActiveLink] = useState('home');
   const [scrolled, seScrolled] = useState(false);
   useEffect(() => {
      const onScroll = () => {
         if (window.scrollY > 50) {
            seScrolled(true);
         } else {
            seScrolled(false);
         }
      };

      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
   }, []);

   const onUpdateActiveLink = (value) => {
      setActiveLink(value);
   };

   return (
      <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
         <Container>
            <Navbar.Brand href="/">
               <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
               <span className="navbar-toggler-icon" />
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                  <Nav.Link
                     href="#cart"
                     className={activeLink === 'cart' ? 'active navbar-link' : 'navbar-link'}
                     onClick={() => onUpdateActiveLink('home')}
                  >
                     Ensaladas
                  </Nav.Link>
                  <Nav.Link
                     href="#skills"
                     className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                     onClick={() => onUpdateActiveLink('skills')}
                  >
                     Nosotros
                  </Nav.Link>
                  <Nav.Link
                     href="../pages/Login.js"
                     className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                     onClick={() => onUpdateActiveLink('projects')}
                  >
                     Contacto
                  </Nav.Link>
               </Nav>
               <span className="navbar-text">
                  <Link to="/Login">
                     <button className="vvd">
                        <span>Iniciar Sesion</span>
                     </button>
                  </Link >
                  <Link to="/cart">
                     🛒 {amount}
               </Link>
               </span>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};
