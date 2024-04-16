import React from "react";
import { Helmet } from "react-helmet";
import { Outlet, Link } from "react-router-dom";
import { motion } from "framer-motion";

function HelpDesk() {
  return (
    <motion.div
      initial={{ width: "0", opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ transition: { type: "spring", duration: 0.5, delay: 0 } }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Help Desk - Digitalizecrpyto.com</title>
        <link rel="canonical" href="http://digitalizecrpyto.com/help-desk" />
      </Helmet>
      <div class="investment  w3-col l12 m12 s12">
        <div class="sub">
          <div class="dashboard">
            <h1 class="title-d">Help Desk</h1>
            <div class="dp">
              <img
                class="image"
                src={require("../img/dp.jpg")}
                alt="oracle_trading_logo"
              />
              <p>John Doe</p>
            </div>
          </div>

          <div className="w-full">
            <p className="text-lg xl:text-2xl gradient-text text-center mb-5 font-bold">
              Digitalizecrypto Customer Care
            </p>
            <p className="text-sm text-center mb-5">
              For inquiries, suggestions or complains. Mail us
            </p>
            <p className="text-lg xl:text-2xl font-bold text-center">
              support@digitalizecrypto.com
            </p>

            <div>
              <label htmFor="message">Message</label>
              <textarea className="resize-none border border-solid rounded-xl border-black w-full h-52"></textarea>
            </div>

            <div className="flex mt-10 justify-center">
              <Link to="/dashboard">
                  <button className="btn px-10 py-2 rounded-lg duration-300 text-white bg-primary-blue border border-solid border-primary-blue hover:bg-transparent hover:text-primary-blue">
                Send
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </motion.div>
  );
}

export default HelpDesk;
