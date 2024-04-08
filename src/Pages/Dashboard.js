import React, { useState } from "react"
import { Helmet } from "react-helmet"
import { Flex, IconButton } from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollToTop } from '../scripts/all_scripts';

import { Routes, Route, Outlet, NavLink, useLocation } from "react-router-dom"

import Profile from "../components/Profile"
import Payment from "../components/Payment"
import Platform from '../components/PaymentPlatform';
import Trade from "../components/Trade"
import NavItem from "../components/NavItem"

import { MdPayment, MdLogout } from "react-icons/md"
import { LuSettings } from "react-icons/lu"
import { BsArrowsAngleContract } from "react-icons/bs"
import { FiMenu, FiHome, FiUser } from "react-icons/fi"

export default function Dashboard ({ children }) {
  const [navSize, changeNavSize] = useState("large")
  const location = useLocation()

  const locationArr = location.pathname?.split("/") ?? []

  const sideBarToggle = () => {
              if (navSize == "small") changeNavSize("large")
                else changeNavSize("small")
            }
 return (
    <motion.div 
    initial={{width: "0",  opacity: 0}}
    animate={{width: "100%", opacity: 1}}
    exit={{ transition: {type: "spring", 
    duration: .5, delay: 0}}}
    >
      <ScrollToTop />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard - Oracle Trading</title>
        <link rel="canonical" href="http://oracletrading.com/dashboard" />
      </Helmet>
      <Flex w="100%" backgroundColor={"white"}>
        <Flex  bgColor={"none"}>
          <Flex
            pos="sticky"
            left="5"
            h="100vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize == "small" ? "0px" : "0px"}
            maxW={300}
            minW={100}
            w={navSize == "large" ? "300px" : "100px"}
            
            flexDir="column"
            bgColor={"var(--light-1)"}
            ml={navSize == "small" ? "10px" : "50px"}
          >
            <Flex
              flexDir="column"
              w="100%"
              alignItems={navSize == "small" ? "flex-start" : "flex-start"}
              as="nav"
            
            >
              <div class="logo-align" mt={5} px="20px" flexWrap="wrap">
                <div
                  class="bar-menu-logo"
                  w={navSize == "small" ? "70px" : "90px"}
                  h={navSize == "small" ? "80px" : "100px"}
                  mb={3}
                >
                  <img
                    class="logoMark"
                    src={require("../img/logo-oracle-trading-2.png")}
                    alt="oracle_trading_logo"
                  />
                </div>
                <IconButton
                  background="none"
                  display={"flex"}
                  fontSize="clamp(1.5rem, 2vw, 1.7rem)"
                  mt={5}
                  mb={0}
                  m={"auto"}
                  _hover={{ background: "none" }}
                  icon={<FiMenu />}
                  onClick={sideBarToggle}
                />
              </div>
              <NavLink exact activeClassName="active" to="/" id="home">
                <NavItem navSize={navSize} icon={FiHome} title="Homepage" 
                  description="This is the description for the dashboard."
                />
              </NavLink>

              <NavLink activeClassName="active" to="/dashboard/profile" id="profile" onClick={sideBarToggle}>
                <NavItem navSize={navSize} icon={FiUser} title="Profile" />
              </NavLink>

              <NavLink activeClassName="active" to="/dashboard/trade" id="trade" onClick={sideBarToggle}>
                <NavItem navSize={navSize} icon={BsArrowsAngleContract} title="Trade"
                />
              </NavLink>
              
              <NavLink activeClassName="active" to="/dashboard/payment" id="payment" onClick={sideBarToggle}> 
                <NavItem navSize={navSize} icon={MdPayment} title="Payments" />
              </NavLink>

              <NavLink activeClassName="active" to="/dashboard/settings" id="settings" onClick={sideBarToggle}>
                <NavItem navSize={navSize} icon={LuSettings} title="Settings" />
              </NavLink>

              <NavLink activeClassName="active" to="/login" id="logout" onClick={sideBarToggle}>
                <NavItem navSize={navSize} icon={MdLogout} title="Logout" />
              </NavLink>

              <Outlet />
            </Flex>
          </Flex>
        </Flex>
        <AnimatePresence>
          <Routes >
                <Route index element={<Profile />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/payment" element={<Payment />}/>
                <Route path="/payment-platform" element={<Platform />}/>
                <Route path="/trade" element={<Trade />}/>
          </Routes>
        </AnimatePresence>
      </Flex>
      <Outlet />
    </motion.div>
  )
}
 