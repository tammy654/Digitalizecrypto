import React from 'react';
import { Helmet } from "react-helmet";
import { Outlet} from "react-router-dom";
import {motion} from "framer-motion";



function Home() {
  return (
    <>
    <div class="homepage-section-fx">

    </div>
    <div class="homepage-hero-section">
      <div className='write-up'>
        <h1 className='heading'>
        SAFE INVESTMENT WITH DIGITALIZE CRYPTO
        </h1>
        <p className='details'>
        Digitalizecryoto sit amet consectetur. Diam metus lacus dui hac etiam metus amet. Sagittis diam duis tortor in. Id curabitur egestas donec mauris ipsum vitae l
        </p>
        <button className='btn3'>Open Deposit</button>
      </div>

    </div>
    <div className="homepage-section-fx two">

    </div>
    <div className="homepage-section-one">
     <div className='sub'>
      <div className='left'>
      <img src={require("../img/threed_logo.png")}/>
      </div>
      <div className='write-up right'>
        <h1 className='sub-heading'>
        ABOUT US
        </h1>
        <p className='details'>
        Lorem ipsum dolor sit amet consectetur. Diam metus lacus dui hac etiam metus amet. Sagittis diam duis tortor in. Id curabitur egestas donec mauris ipsum vitae lorem non semper. Quam urna felis massa nisl eget neque auctor sit. Volutpat fermentum arcu lorem tortor vitae morbi. Sit viverra aliquet
        </p>
        <button className='btn4'>Read More</button>
      </div>
     </div>
    </div>
    <div className="homepage-section-two">
      <div className='sub'>
        <div className="headline">
            <div class="line"></div>
            <h1 className="sub-heading">Investment Proposals</h1>
            <div class="line"></div>
        </div>
        <div className='tab'>
          <div className='side top'>
            <div className="tag a"></div>
            <div className="tag b"></div>
            <div className="tag c"></div>
          </div>
          <div className='side bottom'>
          <div className="tag a"></div>
            <div className="tag b"></div>
            <div className="tag c"></div>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
    <div className="homepage-section-three">
     <div className='sub'>
      <div className='write-up tab'>
        <h1 className='sub-heading'>
        GENERAL COMMISION
        </h1>
        <p className='details'>
        Lorem ipsum dolor sit amet consectetur. Diam metus lacus dui hac etiam metus amet. Sagittis diam duis tortor in. Id curabitur egestas donec mauris ipsum vitae lorem non semper. Quam urna felis massa nisl eget neque auctor sit. Volutpat fermentum arcu lorem tortor vitae morbi. Sit viverra aliquet 
        <br></br><br></br><br></br>

        <li>
        COMPANY COMMISSION: curabitur egestas donec mauris ipsum vitae lorem non semper. Quam urna felis massa nisl eget neque auctor sit. Volutpat fermentum arcu lorem tortor vitae morbi. Sit viverra aliquet 
        </li>
        <li>
        ADMINISTRATIVE COMMISION: curabitur egestas donec mauris ipsum vitae lorem non semper. Quam urna felis massa nisl eget neque auctor sit. Volutpat fermentum arcu lorem tortor vitae morbi. Sit viverra aliquet 
      </li>
</p>
      </div>
     </div>
    </div>
    <div className="homepage-section-two">
      <div className='sub'>
        <div className="headline">
            <div class="line"></div>
            <h1 className="sub-heading">Live Testimonials</h1>
            <div class="line"></div>
        </div>
        <div className='tab'>
          <div className='side top'>
            <div className="tag a">              
              <div className='tab'>
                <h1 className='heading'>1.8</h1>
                <p className='details'>
                  % 
                  <br></br>
                  STARTING
                </p>
              </div>
              <h1 className="details">DAILY:</h1>
              <h1 className="details">DEPOSIT:</h1>
              <h1 className="sub-heading">$1000-$5000</h1>
              <p className="details"> 7 Days</p>
            </div>
            <div className="tag b"></div>
            <div className="tag c"></div>
          </div>
          <div className='side bottom'>
          <div className="tag a"></div>
            <div className="tag b"></div>
            <div className="tag c"></div>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
    </>
  )
}

export default Home