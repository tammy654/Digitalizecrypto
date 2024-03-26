import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { scrollButton } from "../scripts/all_scripts";
import { useLocation } from "react-router-dom";

const withouNavbarRoutes = ["/error-404"];

function Footer() {
  const { pathname } = useLocation();

  if (withouNavbarRoutes.some((item) => pathname.includes(item))) return null;

  return (
    <div className="footer">
      <div class="sub">
        <div class="top">
          <div class="info w3-rest w3-stretch">
          <div class="footerMenu a ">
              <div class="links logo ">
               <img class="logoMark" src={ require ("../img/digitalizecrypto_logo_white.png")} alt="oracle_trading_logo"></img><p class="details">
                Learn Stack is more than just an academy; 
                it's a gateway to unlocking your full potential. 
                Explore our diverse courses, embark on a journey of skill enhancement, 
                and elevate your expertise in the ever-evolving digital landscape.
                </p>
              </div>
            </div>
            <div class="footerMenu b  ">
              <div class="links ">
                <h1 class="subtitle">Company</h1>
                <a>
                  <NavLink exact activeClassName="active" to="/" id="home">
                    Home
                  </NavLink>
                </a>
                <a>
                  <NavLink activeClassName="active" to="/about" id="about">
                    About Us
                  </NavLink>
                </a>
                <a>
                  <NavLink activeClassName="active" to="/courses" id="courses">
                    Our Courses
                  </NavLink>
                </a>
                <a>
                  <NavLink activeClassName="active" to="/blogs" id="blogs">
                   Blogs
                  </NavLink>
                </a>
                <a>
                  <NavLink activeClassName="active" to="/contact" id="contact">
                    Contact Us
                  </NavLink>
                </a>
              </div>
              <div class="links  ">
                <h1 class="subtitle">Contact</h1>
                <div className="contact-details phone">
                  <p className="details">
                    <i class="fa-solid fa-phone icon"></i>
                    +916908827
                  </p>
                </div>
                <div className="contact-details email">
                  <p className="details">
                    <i class="fa-solid fa-phone icon"></i>
                    +916908827
                  </p>
                </div>
                <div className="contact-details address">
                  <p className="details">
                    <i class="fa-solid fa-location-dot icon"></i>
                    20 Peremabiri Street D-Line PH City Nigeria
                  </p>
                </div>
              </div>
              <div class="links aboutus ">
                <h1 class="subtitle">Subscribe</h1>
                <div class="sub_input">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Email"
                    class="w3-col l10 m10 s10"
                  />
                  <button class="btn">
                    <span class="">Subscribe</span>
                  </button>
                </div>
                <div class="socials">
                  <a>
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a>
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  <a>
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="line"></div>
          <div id="copyrights">
            <p>
            Copyright 2023 All right reserve LearnStack.com Powered by Starpro Version Affiliate LTD
            </p>
          </div>
        </div>
      </div>
      <div class="float" onClick={scrollButton}>
        <div class="float-btn">
          <a href="#" class="fas fa-level-up-alt"></a>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Footer;
