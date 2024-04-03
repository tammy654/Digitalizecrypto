import React from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import { scrollButton } from "../scripts/all_scripts";
import { useLocation } from "react-router-dom";

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const withouNavbarRoutes = ["/error-404"];

const routes = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About us",
    link: "/about",
  },
  {
    name: "Investment",
    link: "/investment",
  },
  {
    name: "FAQ",
    link: "/faq",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Terms of service",
    link: "/terms",
  },
  {
    name: "Privacy policy",
    link: "/privacy",
  },
];

const investors = [
  {
    name: "Login",
    link: "/login",
  },
  {
    name: "Sign up",
    link: "/signup",
  },
  {
    name: "Account Manager",
    link: "/account",
  },
  {
    name: "Company Certificate",
    link: "/company",
  },
];

const socials = [
  {
    icon: <FaFacebook className="w-6 h-6" />,
    link: "",
  },
  {
    icon: <FaTwitter className="w-6 h-6" />,
    link: "",
  },
  {
    icon: <FaInstagram className="w-6 h-6" />,
    link: "",
  },
  {
    icon: <FaLinkedin className="w-6 h-6" />,
    link: "",
  },
];

function Footer() {
  const { pathname } = useLocation();

  if (withouNavbarRoutes.some((item) => pathname.includes(item))) return null;

  return (
    <div className="footer border-t border-solid border-primary-blue px-3 sm:px-[100px] py-20">
      <div className="flex flex-wrap justify-between gap-10">
        <div>
          <h1 className="font-medium text-lg text-primary-blue">
            Useful Links
          </h1>
          <div className="flex flex-col gap-3">
            {routes.map((route, index) => (
              <Link
                key={index}
                to={route.link}
                className="text-primary-blue text-base hover:font-bold"
              >
                {route.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h1 className="font-medium text-lg text-primary-blue">Investors</h1>
          <div className="flex flex-col gap-3">
            {investors.map((route, index) => (
              <Link
                key={index}
                to={route.link}
                className="text-primary-blue text-base hover:font-bold"
              >
                {route.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="w-[470px]">
          <h1 className="font-medium text-lg text-primary-blue">Newsletter</h1>
          <p>Subscribe to our newsletter</p>
          <div className="flex mt-4 gap-2 h-14 w-full">
            <input
              type="text"
              className="h-full w-full p-2 border border-solid border-primary-blue rounded-lg"
            />
            <button className="bg-primary-blue border border-solid border-primary-blue text-white hover:bg-transparent hover:text-primary-blue h-full px-5 rounded-lg">
              Subscribe
            </button>
          </div>
          <div className="flex mt-5 gap-8 items-center">
            {socials.map((social, index) => (
              <Link
                key={index}
                to={social.link}
                className="text-primary-blue hover:text-black duration-300"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div class="float" onClick={scrollButton}>
        <div class="float-btn">
          <a href="#" class="fas fa-level-up-alt"></a>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Footer;
