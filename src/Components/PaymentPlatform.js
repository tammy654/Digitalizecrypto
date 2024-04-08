import React from 'react';
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import {motion} from "framer-motion";


function Platform() {
  return (
<motion.div 
    initial={{width: "0",  opacity: 0}} 
    animate={{width: "100%", opacity: 1}}
    exit={{ transition: {type: "spring", 
    duration: .5, delay: 0}}}> 
        <Helmet>
            <meta charSet="utf-8" />
            <title>Dashboard/payment/platform - Oracle Trading</title>
            <link rel="canonical" href="http://oracletrading.com/Dashboard/payment/platform" />
        </Helmet>
        <div class="platform  w3-col l12 m12 s12">     
            <div class="sub">
                <div class="dashboard">
                    <h1 class="title">Make Payment</h1>
                    <div class="dp">
                        <img class="image" src={ require ("../img/dp.jpg")} alt="oracle_trading_logo" />
                        <p>majorsignature</p>
                    </div>
                </div>
               
                <div class="account-tab">
                    
                    <div class="tag a">
                        <div class="content">
                            <div class="tier w3-col l4 m4 s6">
                                <h1 class="details">ORACLE TRADING</h1>
                            </div>
                            <div class="tier w3-col l4 m4 s6">
                                <h1 class="details">DURATION: 1 MONTH</h1>
                            </div>
                            <div class="tier w3-col l4 m4 s6">
                                <h1 class="details">AMOUNT: N50,000</h1>
                            </div>
                        </div>
                    </div>
                    <h1 class="sub-title">ALL PAYMENT METHOD AVAILABLE IN NIGERIA</h1>
                    <li class="details">Not your country? Change Country</li>
                    <div class="tag b">
                        <div class="content">
                            <div class="left w3-col l6 m6 s6">
                                <h1 class="details">PAY WITH YOUR BANK OR ATM CARD</h1>
                                <div class="write-up">
                                    <img src={ require ("../img/paymentgateway.png")} alt="ATM PAYMENT" />
                                    <p class="details">YOUR ACCOUNT WILL BE ACTIVATED AUTOMATICALLY AFTER SUCCESSFUL TRANSACTION</p>
                                    <button class="btn">Pay N50,000</button>
                                </div>
                            </div>
                    
                            <div class="right w3-col l6 m6 s6">
                                <h1 class="details">BANK PAYMENT/MOBILE TRANSFER</h1>
                                <div class="write-up">
                                    <img src={ require ("../img/bank_transfer.jpg")} alt="ATM PAYMENT" />
                                    <p class="details">
                                        <span class="bold">Account Name:</span>       <span class="marker2">Oracle Trading</span> <br/>
                                        <span class="bold">Account Number:</span>     <span class="marker2">1234567890</span>  <br/>
                                        <span class="bold">Bank Name:</span>          <span class="marker2">Wave Bank</span>  <br/><br/> 
                                        After Successful transaction, Kindly Forward us a mail containing “Your Oracle Trading Account Email, 
                                        Account Number, Account Name and Amount Paid, to contact@oracletrading.com or 
                                        through WhatsApp to +23412345678900 <br/><br/>Mobile transfer(USSD) is also accepted.
                                        <br/><br/>
                                        Your account will be activated to receive trades once we receive your payment.
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    </div> 
            
                </div>
                <div class="disclaimer">
                    <h1 class="details">DISCLAIMER</h1>
                    <p class="details">
                        The data conveyed is exclusively intended for individuals or entities above the age of 18. 
                        [Your Company Name] does not reimburse cash payments made for subscriptions and 
                        bears no responsibility for any monetary losses or gains. Residents of countries where
                         soccer betting is illegal should refrain from subscribing to our plans.
                        You can read through Our Disclaimer for more information on oracletrading.
                    </p>
                </div>
            </div>
        </div>
        <Outlet/>
  
</motion.div>
  )
}

export default Platform