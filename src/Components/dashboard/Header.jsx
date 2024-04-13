import { Link } from "react-router-dom";

import { IconButton } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

import profile from "../../img/dp.jpg";

const Header = ({ sideBarToggle }) => {
  return (
    <header className="w-full dashboard_header flex items-center justify-between px-3 py-5">
      <div className="flex gap-2 items-center">
        <Link to="" className="uppercase font-bold text-xl md:text-2xl">
          DigitalizeCrypto
        </Link>
        <button>
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
        </button>
      </div>

      <div className="w-[381px]">
        <input
          type="text"
          className="w-full px-3 py-2 border border-solid  rborder-gray-shade-1 rounded-lg"
          placeholder="Search Crypto....."
        />
      </div>

      <div className="flex items-center gap-2">
        <button className="border border-solid border-primary-blue rounded-lg py-2 px-3 linear_bg text-white">
          Fund your Account
        </button>
        <button className="border border-solid border-primary-blue rounded-lg py-2 px-3">
          Withdraw Funds
        </button>
      </div>

      <div>
        <div className="w-8 h-8 overflow-hidden">
          <img src={profile} alt="profile user" classNAme="w-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;
