import React from 'react';
import { Helmet } from "react-helmet";
import {  Outlet, Link } from "react-router-dom"
import {motion} from "framer-motion";

function Payment() {
  return (
    <motion.div  
    initial={{width: "0",  opacity: 0}}
    animate={{width: "100%", opacity: 1}}
    exit={{ transition: {type: "spring", 
    duration: .5, delay: 0}}} > 
        <Helmet>
            <meta charSet="utf-8" />
            <title>payment - Oracle Trading</title>
            <link rel="canonical" href="http://oracletrading.com/payment" />
        </Helmet>
        <div class="payment  w3-col l12 m12 s12"> 
            <div class="sub">
                <div class="dashboard">
                    <h1 class="title">Make Payment</h1>
                    <div class="dp">
                        <img class="image" src={ require ("../img/dp.jpg")} alt="oracle_trading_logo" />
                        <p>majorsignature</p>
                    </div>
                </div>
                <h1 class="sub-title w3-hide-large">CHAMPIONS PLANS SUCSCRIPTION</h1>
                <div class="account-tab">
                        <div class="tag a w3-col l5 m5 s12">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                            <mask id="mask0_337_1761" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_337_1761)">
                                <path d="M50.0007 87.5L8.33398 37.5L20.834 12.5H79.1673L91.6673 37.5L50.0007 87.5ZM40.1048 
                                33.3333H59.8965L53.6465 20.8333H46.3548L40.1048 33.3333ZM45.834 69.4792V41.6667H22.709L45.834 
                                69.4792ZM54.1673 69.4792L77.2923 41.6667H54.1673V69.4792ZM69.1673 33.3333H80.209L73.959 
                                20.8333H62.9173L69.1673 33.3333ZM19.7923 33.3333H30.834L37.084 20.8333H26.0423L19.7923 33.3333Z" />
                            </g>
                            </svg> 
                            <h1 class="sub-title"> ONE MONTH</h1>
                            <Link to="/dashboard/payment-platform" id="platform">
                                <button class="btn">Subscribe</button>
                            </Link>
                            
                        </div>
                        <div class="tag a w3-col l5 m5 s12">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                            <mask id="mask0_337_1761" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_337_1761)">
                                <path d="M50.0007 87.5L8.33398 37.5L20.834 12.5H79.1673L91.6673 37.5L50.0007 87.5ZM40.1048 
                                33.3333H59.8965L53.6465 20.8333H46.3548L40.1048 33.3333ZM45.834 69.4792V41.6667H22.709L45.834 
                                69.4792ZM54.1673 69.4792L77.2923 41.6667H54.1673V69.4792ZM69.1673 33.3333H80.209L73.959 
                                20.8333H62.9173L69.1673 33.3333ZM19.7923 33.3333H30.834L37.084 20.8333H26.0423L19.7923 33.3333Z" />
                            </g>
                            </svg> 
                            <h1 class="sub-title"> TWO MONTH</h1>
                            <Link to="/dashboard/payment-platform" id="platform">
                                <button class="btn">Subscribe</button>
                            </Link>
                            
                        </div>
                        <div class="tag a w3-col l5 m5 s12">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                            <mask id="mask0_337_1761" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_337_1761)">
                                <path d="M50.0007 87.5L8.33398 37.5L20.834 12.5H79.1673L91.6673 37.5L50.0007 87.5ZM40.1048 
                                33.3333H59.8965L53.6465 20.8333H46.3548L40.1048 33.3333ZM45.834 69.4792V41.6667H22.709L45.834 
                                69.4792ZM54.1673 69.4792L77.2923 41.6667H54.1673V69.4792ZM69.1673 33.3333H80.209L73.959 
                                20.8333H62.9173L69.1673 33.3333ZM19.7923 33.3333H30.834L37.084 20.8333H26.0423L19.7923 33.3333Z" />
                            </g>
                            </svg> 
                            <h1 class="sub-title"> THREE MONTH</h1>
                            <Link to="/dashboard/payment-platform" id="platform">
                                <button class="btn">Subscribe</button>
                            </Link>
                            
                        </div>
                        <div class="tag a w3-col l5 m5 s12">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                            <mask id="mask0_337_1761" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_337_1761)">
                                <path d="M50.0007 87.5L8.33398 37.5L20.834 12.5H79.1673L91.6673 37.5L50.0007 87.5ZM40.1048 
                                33.3333H59.8965L53.6465 20.8333H46.3548L40.1048 33.3333ZM45.834 69.4792V41.6667H22.709L45.834 
                                69.4792ZM54.1673 69.4792L77.2923 41.6667H54.1673V69.4792ZM69.1673 33.3333H80.209L73.959 
                                20.8333H62.9173L69.1673 33.3333ZM19.7923 33.3333H30.834L37.084 20.8333H26.0423L19.7923 33.3333Z" />
                            </g>
                            </svg> 
                            <h1 class="sub-title"> FOUR MONTH</h1>
                            <Link to="/dashboard/payment-platform" id="platform">
                                <button class="btn">Subscribe</button>
                            </Link>
                            
                        </div>
                        
                </div>  
            </div> 
                      
        </div>
       
        <Outlet/>
  
    </motion.div>
  )
}

export default Payment