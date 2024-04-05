import "./App.css";
import { Helmet } from "react-helmet";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import { ToastContainer } from "react-custom-alert";

import React, { useEffect } from "react";
function App() {
  useEffect(() => {
    // 👇 add class to body element
    document.body.classList.add("bg");

    // 👇️ set style on body element

    document.body.style.backgroundColor = "";

    return () => {
      // 👇️ optionally remove styles when component unmounts
      document.body.style.backgroundColor = null;

      document.body.classList.remove("bg");
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Digitalizecrypto.com</title>
      </Helmet>
      <Header />
      <div>
        <AnimatedRoutes />
      </div>
      <Footer />
      <ToastContainer floatingTime={5000} />
    </>
  );
}

export default App;
