import React from 'react';
import {Routes, Route, useLocation} from "react-router-dom";
import Home from "../Pages/Home";




import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
         <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />;
        </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
