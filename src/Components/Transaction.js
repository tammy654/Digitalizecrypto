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
            <link rel="canonical" href="http://digitalizecrypto.com/Dashboard/transactions" />
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
                <div class="tab">
                    <div class="board w3-row">
                            <div class="column s w3-col l1 m6 s6">
                            <h1 class="caption sub-title">S/N</h1>
                            <div class="row">
                                <p class="details">1</p>
                                <p class="details">2</p>
                                <p class="details">3</p>
                            </div>
                            </div>
                            <div class="column w3-col l2 m6 s6">
                            <h1 class="caption sub-title">AMOUNT </h1>
                            <div class="row">
                                <p class="details">$890</p>
                                <p class="details">$1300</p>
                                <p class="details">$1000</p>
                            </div>
                            </div>
                            <div class="column w3-col l2 m6 s6">
                            <h1 class="caption sub-title">STATUS</h1>
                            <div class="row">
                                <p class="details">Successful</p>
                                <p class="details">Successful</p>
                                <p class="details">Unsuccessful</p>
                            </div>
                            </div>
                            
                            <div class="column w3-col l2 m6 s6">
                            <h1 class="caption sub-title">DATE</h1>
                            <div class="row">
                                <p class="details">07/06/24</p>
                                <p class="details">16/05/24</p>
                                <p class="details">05/05/24</p>
                              
                            </div>
                            </div>
                    </div>
                </div>
            </div> 
        </div>
       
        
        <Outlet/>
  
    </motion.div>
  )
}

export default Transaction