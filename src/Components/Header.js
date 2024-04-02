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
                    <div class="navbrand w3-col l1 m1 s1"><img class="logoMark" src={ require ("../img/threed_logo.png")} alt="digitalizecrypto_logo" /></div>
                    <div class="menu ">
                        <ul class="linkSecInHeader w3=cell">
                            <li class="home menuLink w3-hide-medium w3-hide-small" >
                                <a ><NavLink exact activeClassName="active" to="/"  id="home">Home</NavLink></a >
                            </li>
                            <li class="about menuLink w3-hide-medium w3-hide-small" >
                                <a ><NavLink activeClassName="active" to="/about"  id="about">About Us</NavLink></a >
                            </li>
                            <li class="menuLink w3-hide-medium w3-hide-small" >
                                <a ><NavLink activeClassName="active" to="/investments"  id="investments">Investments</NavLink></a >
                            </li>
                            <li class="faq menuLink w3-hide-medium w3-hide-small" >
                                <a ><NavLink activeClassName="active" to="/faq"  id="faq">FAQ</NavLink></a>
                            </li>
                           
                            <li class="statistics menuLink w3-hide-medium w3-hide-small" >
                                <a ><NavLink activeClassName="active" to="/statistics"  id="statistics">Statistics</NavLink></a>
                            </li>

                            <li class="contact menuLink w3-hide-medium w3-hide-small" >
                                <a ><NavLink activeClassName="active" to="/contact"  id="contact">Contact</NavLink></a>
                            </li>
                        </ul>
                    </div>
                    <div className='click'>
                        <Link to="/register">
                            <button className="btn  w3-hide-medium w3-hide-small">
                            <p>Registration</p>
                            </button>
                        </Link>
                        <Link to="/signin">
                            <button className="btn2  w3-hide-medium w3-hide-small">
                            <p>Login</p>
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
                <a className='menuSmall'><NavLink activeClassName="active" to="/about"  id="about" onClick={menuDropClose}>About Us</NavLink></a>
                </li>
                <li class="investments menuLink">
                <a className='menuSmall'><NavLink activeClassName="active" to="/investments"  id="investments" onClick={menuDropClose}>Investments</NavLink></a>
                </li>
                <li class="faq menuLink"  >
                    <a ><NavLink activeClassName="active" to="/faq"  id="faq" onClick={menuDropClose}>FAQ</NavLink></a>
                </li>
                <li class="statistics menuLink" >
                <a className='menuSmall'><NavLink activeClassName="active" to="/statistics"  id="statistics" onClick={menuDropClose}>Statistics</NavLink></a>
                </li> 

                <li class="contact menuLink" >
                    <a className='menuSmall'><NavLink activeClassName="active" to="/contact"  id="contact">Contact</NavLink></a>
                </li>
                <div className='click'>
                        <Link to="/register">
                            <button className="btn">
                            <p>Registration</p>
                            </button>
                        </Link>
                        <Link to="/login">
                            <button className="btn2">
                            <p>Login</p>
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