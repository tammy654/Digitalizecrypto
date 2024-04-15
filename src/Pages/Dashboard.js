import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Flex, IconButton } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollToTop } from "../scripts/all_scripts";

import { Routes, Route, Outlet, NavLink, useLocation } from "react-router-dom";

import Profile from "../Components/Profile";
import Invest from "../Components/Invest";
import Referral from "../Components/Referral";
import HelpDesk from "../Components/HelpDesk";
import DashboardHome from "./DashboardHome";
import Payment from "../Components/Payment";
import Transaction from "../Components/Transaction";
import NavItem from "../Components/NavItem";

import { MdLogout } from "react-icons/md";
import { FiMenu, FiHome, FiUser } from "react-icons/fi";
import { GrTransaction } from "react-icons/gr";
import { GiPayMoney } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { VscReferences } from "react-icons/vsc";
import Layout from "../Components/dashboard/Layout";

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
                  to="/dashboard/Transaction"
                  id="Transaction"
                  onClick={sideBarToggle}
                >
                  <NavItem
                    navSize={navSize}
                    icon={GrTransaction}
                    title="Transactions"
                  />
                </NavLink>

                <NavLink
                  activeClassName="active"
                  to="/dashboard/invest"
                  id="invest"
                  onClick={sideBarToggle}
                >
                  <NavItem navSize={navSize} icon={GiPayMoney} title="Invest" />
                </NavLink>

                <NavLink
                  activeClassName="active"
                  to="/dashboard/referral"
                  id="referral"
                  onClick={sideBarToggle}
                >
                  <NavItem
                    navSize={navSize}
                    icon={VscReferences}
                    title="Referral"
                  />
                </NavLink>

                <NavLink
                  activeClassName="active"
                  to="/dashboard/helpdesk"
                  id="helpdesk"
                  onClick={sideBarToggle}
                >
                  <NavItem
                    navSize={navSize}
                    icon={RiCustomerService2Fill}
                    title="Help Desk"
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

                <div className="max-h-full w-full overflow-auto">
                  <Outlet />
                </div>
              </Flex>
            </Flex>
          </Flex>
          <AnimatePresence>
            <Routes>
              <Route index element={<DashboardHome />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/Transaction" element={<Transaction />} />
              <Route path="/invest" element={<Invest />} />
              <Route path="/referral" element={<Referral />} />
              <Route path="/helpdesk" element={<HelpDesk />} />
              <Route path="/payment" element={<Payment />} />
            </Routes>
          </AnimatePresence>
        </Flex>
        <Outlet />
      </motion.div>
    </Layout>
  );
}
