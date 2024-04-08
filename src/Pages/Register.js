import { Helmet } from "react-helmet";
import { Outlet, Link, useNavigate } from "react-router-dom";
import {motion} from "framer-motion"
import { ScrollToTop } from '../scripts/all_scripts';
import React, { useState, useEffect} from "react";
import {Alert, AlertIcon, AlertDescription, AlertTitle} from '@chakra-ui/react';



const Register = () => {
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
  
    if (!values.name) {
        errors.name = "Required!";
        } else if (!letSpace.test(values.name)) {
        errors.name = "Please input alphabets characters only";
        }
    if (!values.username) {
        errors.username = "Input Username";
        } else if (!letNum.test(values.username)) {
        errors.username = "Please input alphabets characters only";
        }
    if (!values.email) {
        errors.email = "Required!";
        } else if (!regex.test(values.email)) {
        errors.email = "Invalid email format";
        }
    if (!values.phone) {
        errors.phone = "Required!";
        } else if (!numbers.test(values.phone)) {
        errors.phone = "Please input numeric characters only";
        } else if (values.phone.length !== 11) {
        errors.phone = "Phone number must be 11 digits";
        }
    if (!values.country) {
        errors.name = "Required!";
        } else if (!letSpace.test(values.country)) {
        errors.country = "Please input a valid country";
        }
    if (!values.password) {
        errors.password = "Required!";
        } else if (values.password.length < 8) {
        errors.password = "password must be 8 digits";
        } else if (!passw.test(values.password)) {
        errors.password = "Password must contain one uppercase and one lowercase character";
        }
    if (!values.confirmpassword) {
        errors.confirmpassword = "Confirm password!";
        } else if (passw.test(values.confirmpassword !== values.password)) {
        errors.confirmpassword = "Passwords do not match!";
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
            <title>Register - Digitalizecrypto</title>
            <link rel="canonical" href="http://digitalizecrypto.com/register" />
        </Helmet>
    <div className="login_screen linear_bg p-5 sm:p-[100px] overflow-auto">
      <div className="flex flex-col gap-y-[50px] items-center h-full ">
        <div className="w-32 h-32 p-[5px]">
              <img
                class="logoMark"
                src={require("../img/threed_logo.png")}
                alt="digitalizecrypto_logo"
              />
        </div>
        <div className="bg-white rounded-xl py-[50px] px-[30px] w-full sm:w-[400px] lg:w-[714px]">
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
        
            <div className="name form-row input_container">
              <label htmlFor="name">Full Name</label>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Enter Full Name"
                value={formValues.name} 
                onChange={handleChange}
                className={formErrors.name && "input-error"}
              />
              {formErrors.name && (
                <span className="error">{formErrors.name}</span>
              )}
            </div>
            <div className="username form-row input_container">
              <label htmlFor="username"> Username</label>
              <input
                type="username"
                name="username"
                id="username"
                placeholder="Enter Full Name"
                value={formValues.username}
                onChange={handleChange}
                className={formErrors.username && "input-error"}
              />
              {formErrors.username && (
                <span className="error">{formErrors.username}</span>
              )}
            </div>
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
            </div>
            <div className="phone form-row input_container">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="phone"
                name="phone"
                id="phone"
                placeholder="Enter Phone Number"
                value={formValues.phone}
                onChange={handleChange}
                className={formErrors.phone && "input-error"}
              />
              {formErrors.phone && (
                <span className="error">{formErrors.phone}</span>
              )}
            </div>
            <div className="country form-row input_container">
              <label htmlFor="country">Country</label>
              <input
                type="country"
                name="country"
                id="country"
                placeholder="Enter Country"
                value={formValues.country}
                onChange={handleChange}
                className={formErrors.country && "input-error"}
              />
              {formErrors.country && (
                <span className="error">{formErrors.country}</span>
              )}
            </div>
            <div className="referral form-row input_container">
              <label htmlFor="name">Referral ID</label>
              <input
                type="referral"
                name="referral"
                id="referral"
                placeholder="Referral ID"
                value={formValues.referral} 
                onChange={handleChange}
                className={formErrors.referral && "input-error"}
              />
              {formErrors.referral && (
                <span className="error">{formErrors.referral}</span>
              )}
            </div>
          
            <div className="password form-row input_container">
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
            <div className="confirmpassword form-row input_container">
              <label htmlFor="confirmpassword"> Confirm Password</label>
              <input
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                placeholder="Confirm password"
                value={formValues.confirmpassword}
                onChange={handleChange}
                className={formErrors.confirmpassword && "input-error"}
              />
              {formErrors.confirmpassword && (
                <span className="error">{formErrors.confirmpassword}</span>
              )}
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

            <button type="submit" className="btn5 linear_bg text-white w-full py-2 rounded-lg">
                Register
              </button>
          </form>
          <p className="text-center my-5 p-[20px]">
            Already have an account?{" "}
            <Link to="/signin" className="hover:text-primary-blue">
              Sign in instead.
            </Link>
          </p>
        </div>
        <div>
          <p className="details marker-w">
            Digitalizecrpyto 2024. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
    <Outlet />
  
    </motion.div>
  );
};
export default Register;
