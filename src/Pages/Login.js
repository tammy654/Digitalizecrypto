import { Helmet } from "react-helmet";
import { Outlet, Link, useNavigate } from "react-router-dom";
import {motion} from "framer-motion"
import { ScrollToTop } from '../scripts/all_scripts';
import React, { useState, useEffect} from "react";
import {Alert, AlertIcon, AlertDescription, AlertTitle} from '@chakra-ui/react';


const Login = () => {
  const intialValues = { 
    name: "",
    username: "",
    email: "",
    phone: "",
    country: "",
    password: "", 
    confirmpassword: "",
  };
  
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [display, setDisplay] = React.useState('none');
  const navigate = useNavigate();
  
  const submit = () => {
    console.log(formValues);
    setTimeout(() => {
      navigate("/dashboard", {replace: true});
    }, 2000);
  };
  
  //input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit() }
    }, [formErrors]
  );
    //form validation handler
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    var letters = /^[A-Za-z]+$/;
    var letSpace = /^[A-Za-z\s]*$/;
    var letNum= /^[A-Za-z0-9]+$/;
    var numbers = /^[0-9]+$/;
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  

    if (!values.email) {
        errors.email = "Required!";
        } else if (!regex.test(values.email)) {
        errors.email = "Invalid email format";
        }
    if (!values.password) {
        errors.password = "Required!";
        } else if (values.password.length < 8) {
        errors.password = "password must be 8 digits";
        } else if (!passw.test(values.password)) {
        errors.password = "Password must contain one uppercase and one lowercase character";
        }
   
    return errors;
  };
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
            <form className="w-full px-[20px]" onSubmit={handleSubmit} noValidate>
              {Object.keys(formErrors).length === 0 && isSubmitting && (
              <Alert
                status='success'
                variant='subtle'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
                height='200px'
                width="60%"
                position='absolute'
                top='40%'
                left='25%'
                duration="12000"
              zIndex="50"
              >
                  <AlertIcon boxSize='40px' mr={0} />
                  <AlertTitle mt={4} mb={1} fontSize='lg' color='whiteAlpha.500'  >
                      <span className='sub-title' >Registration Successful!</span>
                  </AlertTitle>
                  <AlertDescription maxWidth='sm'>
                      <span className='details'></span>
                  </AlertDescription>
              </Alert>
              )}
            
              <div className="email form-row input_container">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email address"
                  value={formValues.email}
                  onChange={handleChange}
                  className={formErrors.email && "input-error"}
                />
                {formErrors.email && (
                  <span className="error">{formErrors.email}</span>
                )}
              </div><div className="password form-row input_container">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  value={formValues.password}
                  onChange={handleChange}
                  className={formErrors.password && "input-error"}
                />
                {formErrors.password && (
                  <span className="error">{formErrors.password}</span>
                )}
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

              <button type="submit" className="btn5 linear_bg text-white w-full py-2 rounded-lg ">
                  Login
                </button>
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
