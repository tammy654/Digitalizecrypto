import { Outlet, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {motion} from "framer-motion"
import { ScrollToTop } from '../scripts/all_scripts';

const Login = () => {
  return (
    <motion.div 
    initial={{width: 0, opacity: 0}}
    animate={{width: "100%", opacity: 1}}
    exit={{ x: window.innerWidth, transition: {
    duration: 0.1, delay: 0}, opacity: 0}} > 
      <ScrollToTop />
        <Helmet>
            <meta charSet="utf-8" />
            <title>Login - Digitalizecrypto</title>
            <link rel="canonical" href="http://digitalizecrypto.com/login" />
        </Helmet>
        <div className="login_screen linear_bg  p-5 sm:p-[50px]">
      <div className="flex flex-col gap-y-[50px] items-center h-full content-center justify-center">
        <div className="w-32 h-32  p-[10px]">
              <img
                class="logoMark"
                src={require("../img/threed_logo.png")}
                alt="digitalizecrypto_logo"
              />
        </div>
        <div className="bg-white rounded-xl py-[50px] px-[30px] w-full sm:w-[400px] min-[1450px]:w-[714px]">
          <form className="w-full px-[20px]">
            <div className="flex flex-col gap-2 mb-3 w-full ">
              <label htmlFor="email">Enter Email Address</label>
              <input
                type="text"
                id="email"
                className="w-full border border-solid border-gray-shade-1 px-3 py-2 focus:outline-primary-blue rounded-lg"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="password">Enter Password</label>
              <input
                type="password"
                id="password"
                className="w-full border border-solid border-gray-shade-1 px-3 py-2 focus:outline-primary-blue rounded-lg"
              />
            </div>
            <div className="flex justify-between my-2">
              <div className="flex gap-2 items-center">
                <input type="checkbox" />
                <label>Remember me</label>
              </div>
              <Link to="" className="hover:text-primary-blue">
                Forgot Password
              </Link>
            </div>

            <div className="w-full">
              <button className="btn5 linear_bg text-white w-full py-2 rounded-lg ">
                Login
              </button>
            </div>
          </form>
          <p className="p-[20px]">
            New on our platform?{" "}
            <Link to="/register" className="hover:text-primary-blue">
              Create an account
            </Link>
          </p>
        </div>
        <div>
          <p className="details marker-w ">
            Digitalizecrpyto 2024. All Rights Reserved.
          </p>
        </div>
      </div>
        </div>
        <Outlet />
  
    </motion.div>
    
  );
};

export default Login;
