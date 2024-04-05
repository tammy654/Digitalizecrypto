import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login_screen linear_bg p-5 sm:p-[50px]">
      <div className="flex flex-col justify-between items-center h-full">
        <div className="w-32 h-32 bg-white"></div>
        <div className="bg-white py-[50px] px-[20px] w-full sm:w-[400px] min-[1450px]:w-[714px]">
          <form className="w-full">
            <div className="flex flex-col gap-2 mb-3 w-full">
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
              <button className="linear_bg text-white w-full py-2 rounded-lg">
                Login
              </button>
            </div>
          </form>
          <p>
            New on our platform?{" "}
            <Link to="/register" className="hover:text-primary-blue">
              Create an account
            </Link>
          </p>
        </div>
        <div>
          <p className="text-white text-center text-sm md:text-base min-[1450px]:text-[40px]">
            Digitalizecrpytocureency 2024. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
