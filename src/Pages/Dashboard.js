import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Flex, IconButton } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollToTop } from "../scripts/all_scripts";

import { Routes, Route, Outlet, NavLink, useLocation } from "react-router-dom";

import Profile from "../Components/Profile";
import Payment from "../Components/Payment";
import Platform from "../Components/PaymentPlatform";
import Trade from "../Components/Trade";
import NavItem from "../Components/NavItem";

import { MdPayment, MdLogout } from "react-icons/md";
import { LuSettings } from "react-icons/lu";
import { BsArrowsAngleContract } from "react-icons/bs";
import { FiMenu, FiHome, FiUser } from "react-icons/fi";
import Header from "../Components/dashboard/Header";
import Layout from "../Components/dashboard/Layout";
import DashboardHome from "./DashboardHome";

export default function Dashboard({ children }) {
  const [navSize, changeNavSize] = useState("large");
  const location = useLocation();

  const locationArr = location.pathname?.split("/") ?? [];

  const sideBarToggle = () => {
    if (navSize == "small") changeNavSize("large");
    else changeNavSize("small");
  };
  return (
    <Layout sideBarToggle={sideBarToggle}>
      <motion.div
        initial={{ width: "0", opacity: 0 }}
        animate={{ width: "100%", opacity: 1 }}
        exit={{ transition: { type: "spring", duration: 0.5, delay: 0 } }}
        className="h-full"
      >
        <ScrollToTop />
        <Helmet>
          <meta charSet="utf-8" />
          <title>Dashboard - Digitalizecrpyto.com</title>
          <link rel="canonical" href="http://digitalizecrypto.com/dashboard" />
        </Helmet>

        <Flex w="100%" backgroundColor={"white"} className="h-full">
          <Flex bgColor={"none"}>
            <Flex
              pos="sticky"
              left="5"
              borderRadius={navSize == "small" ? "0px" : "0px"}
              maxW={300}
              minW={100}
              w={navSize == "large" ? "300px" : "100px"}
              flexDir="column"
              bgColor={"var(--light-1)"}
              className="border-2 border-solid border-primary-blue h-full"
            >
              <Flex
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "flex-start" : "flex-start"}
                as="nav"
              >
                <NavLink
                  exact
                  activeClassName="active"
                  to="/dashboard"
                  id="home"
                >
                  <NavItem
                    navSize={navSize}
                    icon={FiHome}
                    title="Dashboard"
                    description="This is the description for the dashboard."
                  />
                </NavLink>

                <NavLink
                  activeClassName="active"
                  to="/dashboard/profile"
                  id="profile"
                  onClick={sideBarToggle}
                >
                  <NavItem navSize={navSize} icon={FiUser} title="Profile" />
                </NavLink>

                <NavLink
                  activeClassName="active"
                  to="/dashboard/trade"
                  id="trade"
                  onClick={sideBarToggle}
                >
                  <NavItem
                    navSize={navSize}
                    icon={BsArrowsAngleContract}
                    title="Trade"
                  />
                </NavLink>

                <NavLink
                  activeClassName="active"
                  to="/dashboard/payment"
                  id="payment"
                  onClick={sideBarToggle}
                >
                  <NavItem
                    navSize={navSize}
                    icon={MdPayment}
                    title="Payments"
                  />
                </NavLink>

                <NavLink
                  activeClassName="active"
                  to="/dashboard/settings"
                  id="settings"
                  onClick={sideBarToggle}
                >
                  <NavItem
                    navSize={navSize}
                    icon={LuSettings}
                    title="Settings"
                  />
                </NavLink>

                <NavLink
                  activeClassName="active"
                  to="/signin"
                  id="logout"
                  onClick={sideBarToggle}
                >
                  <NavItem navSize={navSize} icon={MdLogout} title="Logout" />
                </NavLink>

                <div className="h-full w-full overflow-y-scroll">
                  <Outlet />
                </div>
              </Flex>
            </Flex>
          </Flex>
          <AnimatePresence>
            <Routes>
              <Route index element={<DashboardHome />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/payment-platform" element={<Platform />} />
              <Route path="/trade" element={<Trade />} />
            </Routes>
          </AnimatePresence>
        </Flex>
        <Outlet />
      </motion.div>
    </Layout>
  );
}
