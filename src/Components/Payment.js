import React from 'react';
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import {motion} from "framer-motion";


function Payment() {
  return (
<motion.div 
    initial={{width: "0",  opacity: 0}} 
    animate={{width: "100%", opacity: 1}}
    exit={{ transition: {type: "spring", 
    duration: .5, delay: 0}}}> 
        <Helmet>
            <meta charSet="utf-8" />
            <title>Dashboard/invest/payment - Digitalizecrpyto.com</title>
            <link rel="canonical" href="http://digitalizecrpyto.com/Dashboard/invest/payment" />
        </Helmet>
        <div class="payment  w3-col l12 m12 s12">     
            <div class="sub">
                <div class="dashboard">
                    <h1 class="title">Make Payment</h1>
                    <div class="dp">
                        <img class="image" src={ require ("../img/dp.jpg")} alt="profile-dp" />
                        <p>John Doe</p>
                    </div>
                </div>
               
                <div class="account-tab">
                    
                    <div class="tag a">
                        <div class="content">
                            <div class="tier w3-col l4 m4 s6">
                                <h1 class="details">CRYPTO PAYMENT</h1>
                            </div>
                            <div class="tier w3-col l4 m4 s6">
                                <h1 class="details">CRYPTO: BTC</h1>
                            </div>
                            <div class="tier w3-col l4 m4 s6">
                                <h1 class="details">AMOUNT: $XXXX</h1>
                            </div>
                        </div>
                    </div>
                    <h1 class="sub-title">ALL PAYMENT METHOD AVAILABLE</h1>
                    <li class="details">Not your country? Change Country</li>
                    <div class="tag b">
                        <div class="content">
                            <div class="left w3-col l6 m6 s6">
                                <h1 class="details">PAY WITH YOUR BANK OR ATM CARD</h1>
                                <div class="write-up">
                                    <img src={ require ("../img/paymentgateway.png")} alt="ATM PAYMENT" />
                                    <p class="details">YOUR ACCOUNT WILL BE FUNDED AUTOMATICALLY AFTER SUCCESSFUL TRANSACTION</p>
                                    <button class="btn">Pay $XXXX</button>
                                </div>
                            </div>
                    
                            <div class="right w3-col l6 m6 s6">
                                <h1 class="details">BANK PAYMENT/MOBILE TRANSFER</h1>
                                <div class="write-up">
                                    <img src={ require ("../img/bank_transfer.jpg")} alt="ATM PAYMENT" />
                                    <p class="details">
                                        <span class="bold">Account Name:</span>       <span class="marker2">John Doe</span> <br/>
                                        <span class="bold">Account Number:</span>     <span class="marker2">123xxxxxx</span>  <br/>
                                        <span class="bold">Bank Name:</span>          <span class="marker2">XXXX Bank</span>  <br/><br/> 
                                        After Successful transaction, Kindly Forward us a mail containing “Your Digitalizecrpyto Account Email, 
                                        Account Number, Account Name and Amount Paid, to contact@digitalizecrpyto.com or 
                                        through WhatsApp to +XXX-XXX-XXX-XXXX <br/><br/>
                                        <br/><br/>
                                        Your account will be funded once we receive your payment.
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
                        bears no responsibility for any monetary losses or gains. 
                        You can read through Our Disclaimer for more information on digitalizecrypto.
                    </p>
                </div>
            </div>
        </div>
        <Outlet/>
  
</motion.div>
  )
}

export default Payment