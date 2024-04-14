import React from 'react';
import { Helmet } from "react-helmet";
import {  Outlet, Link } from "react-router-dom"
import {motion} from "framer-motion";

function Referral() {
  return (
    <motion.div  
    initial={{width: "0",  opacity: 0}}
    animate={{width: "100%", opacity: 1}}
    exit={{ transition: {type: "spring", 
    duration: .5, delay: 0}}} > 
        <Helmet>
            <meta charSet="utf-8" />
            <title>Referral - Digitalizecrpyto.com</title>
            <link rel="canonical" href="http://digitalizecrpyto.com/referral" />
        </Helmet>
        <div class="investment  w3-col l12 m12 s12"> 
            <div class="sub">
                <div class="dashboard">
                    <h1 class="title-d ">Refer users to <span className='marker'>Digitalizecrypto Community</span></h1>
                    <div class="dp">
                        <img class="image" src={ require ("../img/dp.jpg")} alt="oracle_trading_logo" />
                        <p>John Doe</p>
                    </div>
                </div>
                 
            </div> 
                      
        </div>
       
        <Outlet/>
  
    </motion.div>
  )
}

export default Referral