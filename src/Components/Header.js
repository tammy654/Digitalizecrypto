import React from 'react';
import { Outlet, Link, NavLink } from "react-router-dom";
import { menuDropClose } from '../scripts/all_scripts';
import { useLocation } from "react-router-dom";
import {Menu, MenuList, MenuButton, MenuItem} from '@chakra-ui/react';

const withouNavbarRoutes = [ "/login", "/register", "/dashboard", "/profile", "/error-404"];


function Header() {
    const { pathname } = useLocation();
    if (withouNavbarRoutes.some((item) => pathname.includes(item))) return null;

  return (
    <>
        <main>
            <div class="nav w3-bar w3-top">
                <div class="sub w3-cell">
                    <div class="navbrand w3-col l1 m1 s1"><img class="logoMark" src={ require ("../img/digitalizecrypto_logo.png")} alt="digitalizecrypto_logo" /></div>
                    <div class="menu ">
                        <ul class="linkSecInHeader w3=cell">
                            <li class="home menuLink w3-hide-medium w3-hide-small" >
                                <a ><NavLink exact activeClassName="active" to="/"  id="home">Home</NavLink></a >
                            </li>
                            <li class="about menuLink w3-hide-medium w3-hide-small" >
                                <a ><NavLink activeClassName="active" to="/about"  id="about">About Us</NavLink></a >
                            </li>
                            <li class="menuLink w3-hide-medium w3-hide-small" >
                                <a ><NavLink activeClassName="active" to="/courses"  id="courses">Our Courses</NavLink></a >
                            </li>
                            <li class="menuLink w3-hide-medium w3-hide-small" >
                                <a ><NavLink activeClassName="active" to="/blogs"  id="blogs">Blogs</NavLink></a>
                            </li>
                           
                            <li class="contact menuLink w3-hide-medium w3-hide-small" >
                                <a ><NavLink activeClassName="active" to="/contact"  id="contact">Contact Us</NavLink></a>
                            </li>
                        </ul>
                    </div>
                    <div className='click'>
                        <Link to="/register">
                            <button className="btn2  w3-hide-medium w3-hide-small">
                            <p>Sign In</p>
                            </button>
                        </Link>
                        <Link to="/register">
                            <button className="btn  w3-hide-medium w3-hide-small">
                            <p>Register</p>
                            </button>
                        </Link>
                    </div>
                    
                    <a href="javascript:void(0)" class="w3-right w3-hide-large  w3-cell-middle toggleMenu" onClick={menuDropClose} >&#9776;</a>
                    
                </div>
            </div> 
            <ul id="menuDrpdown" class="menuDrpdown  w3-hide w3-hide-large  w3-bar-block w3-top">
                <li class="home menuLink" id="home" >
                <a className='menuSmall'> <NavLink exact activeClassName="active" to="/"  id="home" onClick={menuDropClose}>Home</NavLink></a>
                </li>
                <li class="about menuLink" >
                <a className='menuSmall'><NavLink activeClassName="active" to="/about"  id="about" onClick={menuDropClose}>About</NavLink></a>
                </li>
                <li class="menuLink">
                <a className='menuSmall'><NavLink activeClassName="active" to="/courses"  id="courses" onClick={menuDropClose}>Our Courses</NavLink></a>
                </li>
                <li class="menuLink"  >
                    <a ><NavLink activeClassName="active" to="/blogs"  id="blogs" onClick={menuDropClose}>Blogs</NavLink></a>
                </li>

                <li class="contact menuLink" >
                <a className='menuSmall'><NavLink activeClassName="active" to="/contact"  id="contact" onClick={menuDropClose}>Contact</NavLink></a>
                </li> 
                <div className='click'>
                        <Link to="/register">
                            <button className="btn2  ">
                            <p>Sign In</p>
                            </button>
                        </Link>
                        <Link to="/register">
                            <button className="btn ">
                            <p>Register</p>
                            </button>
                        </Link>
                    </div>  
            </ul>
            <Outlet />
        </main>
    </>    
  )
}

export default Header