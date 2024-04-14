import React from "react";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <motion.div
      initial={{ width: "0", opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ transition: { type: "spring", duration: 0.5, delay: 0 } }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard/profile - Oracle Trading</title>
        <link
          rel="canonical"
          href="http://oracletrading.com/dashboard/profile"
        />
      </Helmet>
      <div class="profile w3-col l12 m12 s12">
        <div class="sub">
          <div class="dashboard">
            <h1 class="title-d">Profile</h1>
            <div class="dp">
              <img
                class="image"
                src={require("../img/dp.jpg")}
                alt="oracle_trading_logo"
              />
              <p>John Doe</p>
            </div>
          </div>
          <div class="account-tab">
            <div class="tag a w3-col l3 m3 s12">
              <img
                class="img"
                src={require("../img/dp.jpg")}
                alt="oracle_trading_logo"
              />
            </div>
            <div class="tag b w3-col l9 m9 s12">
              <div class="content">
                <div class="left w3-col l6 m6 s6">
                  <div class="write-up">
                    <h1 class="details">Full Name</h1>
                    <p class="details">John</p>
                  </div>
                  <div class="write-up">
                    <h1 class="details">Email Address</h1>
                    <p class="details">john@xxxx.com</p>
                  </div>
                  <div class="write-up">
                    <h1 class="details">Country</h1>
                    <p class="details">France</p>
                  </div>
                </div>
                <div class="right  w3-col l6 m6 s6">
                  <div class="write-up">
                    <h1 class="details">Username</h1>
                    <p class="details">johndoe</p>
                  </div>
                  <div class="write-up">
                    <h1 class="details">Phone Number</h1>
                    <p class="details">XXX-XXX-XXXX</p>
                  </div>
                  <div class="write-up">
                    <h1 class="details">Date Created</h1>
                    <p class="details">12 April, 2024</p>
                  </div>
                </div>
              </div>
              <button class="btn">Edit Profile</button>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </motion.div>
  );
};

export default Profile;
