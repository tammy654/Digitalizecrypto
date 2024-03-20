import React from 'react';
import { Helmet } from "react-helmet";
import { Outlet} from "react-router-dom";
import {motion} from "framer-motion";
import HeroSection from '../Components/HeroSection'
import HomeStartLearning from '../Components/HomeStartLearning'
import HomeWhyChooseUs from '../Components/HomeWhyChooseUs'


function Home() {
  return (
    <>
    <div class="homepage-section-three">
     <div class="sub">
        <div class="top">
          <h1 class="sub-title">
            Navigate Through Our <span class="marker"> Ecosystem </span>
            Beyond Learn Stack, <span class="marker"> Our Connected Platforms</span> Await Your Exploration
          </h1>
        </div>
        <div class="bottom">
          <div className='client a w3-col l3 m3 s6'><img src={require("../img/client-logo-1.png")}/></div>
          <div className='client b w3-col l3 m3 s6'><img src={require("../img/client-logo-2.png")}/></div>
          <div className='client c w3-col l3 m3 s6'><img src={require("../img/client-logo-3.png")}/></div>
          <div className='client d w3-col l3 m3 s6'><img src={require("../img/client-logo-4.png")}/></div>
          <div className='client e w3-col l3 m3 s6'><img src={require("../img/client-logo-5.png")}/></div>
          <div className='client f w3-col l3 m3 s6'><img src={require("../img/client-logo-5.png")}/></div>
        </div>
     </div>

    </div>
    <div class="homepage-section-four">
     <div class="sub">
        <div class="top">
          <div class="line"></div>
          <h1 class="sub-heading">
                Categories of courses we offer
          </h1>
        </div>
        <div class="bottom">
          <div class="tag a">
            <div className='box a'>
                <div class="icon"  style={{ background: "#E2D2F5"}}><img src={require("../img/icon-1.png")} style={{ width:'60%' }} /></div>
                <h1 class="sub-title">Web Development</h1>
            </div>
            <div className='box b'>
                <div class="icon"  style={{ background: "#C7CDFD"}}><img src={require("../img/icon-2.png")} style={{ width:'60%' }} /></div>
                <h1 class="sub-title">UI/UX Design</h1>
            </div>
            <div className='box c'>
                <div class="icon" style={{ background: "#E4FCE9"}}><img src={require("../img/icon-3.png")} style={{ width:'60%' }} /></div>
                <h1 class="sub-title">Enterprenuer</h1>
              

            </div>
            <div className='box d'>
                <div class="icon" style={{ background: "#DDE7F5"}}><img src={require("../img/icon-4.png")} style={{ width:'60%' }} /></div>
                <h1 class="sub-title">Cyber Security</h1>
            </div>
          </div>
          <div class="tag b">
            <div className='box e'>
                <div class="icon" style={{ background: "#EBBBE6"}}><img src={require("../img/icon-5.png")} style={{ width:'60%' }} /></div>
                <h1 class="sub-title">Web Development</h1>
            </div>
            <div className='box f'>
                <div class="icon" style={{ background: "#F8E7D3"}}><img src={require("../img/icon-6.png")} style={{ width:'60%' }} /></div>
                <h1 class="sub-title">Web Development</h1>
            </div>
            <div className='box g'>
                <div class="icon" style={{ background: "#FABCDA"}}><img src={require("../img/icon-7.png")} style={{ width:'60%' }} /></div>
                <h1 class="sub-title">Web Development</h1>
            </div>
            <div className='box h'>
                <div class="icon" style={{ background: "#CAEEE1"}}><img src={require("../img/icon-8.png")} style={{ width:'60%' }} /></div>
                <h1 class="sub-title">Web Development</h1>
            </div>
          </div>
        </div>
     </div>

    </div>
    
    </>
  )
}

export default Home