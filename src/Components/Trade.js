import React from 'react';
import { Helmet } from "react-helmet";
import { Outlet} from "react-router-dom";
import {motion} from "framer-motion";


function Trade() { 
  return (
    <motion.div 
    initial={{width: 0, opacity: 0}}
    animate={{width: "100%", opacity: 1}}
    exit={{ x: window.innerWidth, transition: {type: "spring", 
    duration: 0.1, delay: 0}, opacity: 0}} > 
        <Helmet>
            <meta  charSet="utf-8" />
            <title>Dashboard/Trade - Oracle Trading</title>
            <link rel="canonical" href="http://oracletrading.com/Dashboard/payment" />
        </Helmet>
        <div class="trade w3-col l12 m12 s12"> 
            <div class="sub">
                <div class="dashboard">
                    <h1 class="title">Trades</h1>
                    <div class="dp">
                        <img class="image" src={ require ("../img/dp.jpg")} alt="oracle_trading_logo" />
                        <p>majorsignature</p>
                    </div>
                </div>
                <div class="tab">
                    <div class="board w3-row">
                            <div class="column w3-col l2 m6 s6">
                            <h1 class="caption sub-title">DATE</h1>
                            <div class="row">
                                <p class="details">09/11/23</p>
                                <p class="details">09/11/23</p>
                                <p class="details">09/11/23</p>
                                <p class="details">09/11/23</p>
                                <p class="details">09/11/23</p>
                                <p class="details">09/11/23</p>
                                <p class="details">09/11/23</p>
                            </div>
                            </div>
                            <div class="column w3-col l2 m6 s6">
                            <h1 class="caption sub-title">TRADE/ODDS </h1>
                            <div class="row">
                                <p class="details">Trade 1</p>
                                <p class="details">Trade 1</p>
                                <p class="details">Trade 1</p>
                                <p class="details">Trade 1</p>
                                <p class="details">Trade 1</p>
                                <p class="details">Trade 1</p>
                                <p class="details">Trade 1</p>
                            </div>
                            </div>
                            <div class="column w3-col l2 m6 s6">
                            <h1 class="caption sub-title">FIXTURE</h1>
                            <div class="row">
                                <p class="details">PSG vs Man U</p>
                                <p class="details">PSG vs Man U</p>
                                <p class="details">PSG vs Man U</p>
                                <p class="details">PSG vs Man U</p>
                                <p class="details">PSG vs Man U</p>
                                <p class="details">PSG vs Man U</p>
                                <p class="details">PSG vs Man U</p>
                            </div>
                            </div>
                            
                            <div class="column w3-col l2 m6 s6">
                            <h1 class="caption sub-title">TIPS</h1>
                            <div class="row">
                                <p class="details">LT-</p>
                                <p class="details">HT+</p>
                                <p class="details">LT-</p>
                                <p class="details">HT+</p>
                                <p class="details">HT+</p>
                                <p class="details">HT+</p>
                                <p class="details">HT+</p>
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

export default Trade