import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="form-box">
        <div className="button-box">
          <h3 className="text-center">Log In</h3>          
        </div> 
              
        <div className="input-field-group">
        <form className="mx-auto"> 
            <input type="text" name="email" className="input-field" placeholder="Email" required/>
            <input type="password" name="password" className="input-field" placeholder="Password" required/>
            <input type="checkbox" name="" id="" /><span>Remember me</span>
            <button type="submit" className='btn w-100 mx-auto'>Log In</button>
            <Link to="/login">Forgot Password?</Link>
            </form>
            <div className="d-flex justify-content-center">
                <hr className="w-50" />
                <p className="mx-3">or</p>
                <hr className="w-50" />
            </div> 
            <p className='text-center my-0'>Sign in with</p>
            <SocialLogin></SocialLogin>
            <Link to="/register" className="btn w-100 mx-auto">I'm New Here</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
