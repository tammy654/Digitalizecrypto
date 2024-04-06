import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login_screen linear_bg p-5 sm:p-[100px] overflow-auto">
      <div className="flex flex-col justify-between items-center h-full">
        <div className="w-10 h-10 bg-white"></div>
        <div className="bg-white py-[50px] px-[20px] w-full sm:w-[400px] lg:w-[714px]">
          <form className="w-full">
            <div className="flex flex-col gap-2 mb-3 w-full">
              <label htmlFor="fullname">Enter Full Name</label>
              <input
                type="text"
                id="fullname"
                className="w-full border border-solid border-gray-shade-1 px-3 py-2 focus:outline-primary-blue rounded-lg"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-2 mb-3 w-full">
              <label htmlFor="email">Enter Email Address</label>
              <input
                type="text"
                id="email"
                className="w-full border border-solid border-gray-shade-1 px-3 py-2 focus:outline-primary-blue rounded-lg"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-2 mb-3 w-full">
              <label htmlFor="phone">Enter Phone Number</label>
              <input
                type="text"
                id="phone"
                className="w-full border border-solid border-gray-shade-1 px-3 py-2 focus:outline-primary-blue rounded-lg"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-2 mb-3 w-full">
              <label htmlFor="country">Enter Country</label>
              <input
                type="text"
                id="country"
                className="w-full border border-solid border-gray-shade-1 px-3 py-2 focus:outline-primary-blue rounded-lg"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-2 mb-3 w-full">
              <label htmlFor="referral">Enter Referral ID</label>
              <input
                type="text"
                id="referral"
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
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                className="w-full border border-solid border-gray-shade-1 px-3 py-2 focus:outline-primary-blue rounded-lg"
              />
            </div>
            <div className="flex justify-between my-2">
              <div className="flex gap-2 items-center">
                <input type="checkbox" />
                <label>
                  I have agreed to the{" "}
                  <Link to="" className="hover:text-primary-blue">
                    Terms and Conditions
                  </Link>
                </label>
              </div>
            </div>

            <div className="w-full">
              <button className="linear_bg text-white w-full py-2 rounded-lg">
                Register
              </button>
            </div>
          </form>
          <p className="text-center my-5">
            Already have an account?{" "}
            <Link to="/signin" className="hover:text-primary-blue">
              Sign in instead.
            </Link>
          </p>
        </div>
        <div>
          <p className="text-white text-center my-[50px] text-sm">
            Digitalizecrpytocureency 2024. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Register;
