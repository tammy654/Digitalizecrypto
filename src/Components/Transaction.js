import React from 'react';
import { Helmet } from "react-helmet";
import { Outlet} from "react-router-dom";
import {motion} from "framer-motion";


function Transaction() { 
  return (
    <motion.div 
    initial={{width: 0, opacity: 0}}
    animate={{width: "100%", opacity: 1}}
    exit={{ x: window.innerWidth, transition: {type: "spring", 
    duration: 0.1, delay: 0}, opacity: 0}} > 
        <Helmet>
            <meta  charSet="utf-8" />
            <title>Dashboard/Transaction - Digitalizecrpyto</title>
            <link rel="canonical" href="http://digitalizecrypto.com/Dashboard/payment" />
        </Helmet>
        <div class="transaction w3-col l12 m12 s12"> 
            <div class="sub">
                <div class="dashboard">
                    <h1 class="title-d">Transactions</h1>
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

export default Transaction