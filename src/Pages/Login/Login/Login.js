import React, { useEffect, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../Firebase/Firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from '../../Shared/Loading/Loading';
import "./Login.css";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] =
    useSendPasswordResetEmail(auth);

  const handleEmailInput = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);

    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setUserInfo({ ...userInfo, email: "" });
      setErrors({ ...errors, email: "Invalid Email" });
    }
  };

  const handlePasswordInput = (e) => {
    const passwordRegex =
      /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    const validPassword = passwordRegex.test(e.target.value);

    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setUserInfo({ ...userInfo, password: "" });
      setErrors({ ...errors, password: "Poor strength Password!" });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    await signInWithEmailAndPassword(userInfo.email, userInfo.password);
    const email = e.target.email.value;
    const {data}  = await axios.post('https://quiet-dawn-19288.herokuapp.com/login', {email});
    localStorage.setItem('accessToken', data.accessToken);
    navigate(from, { replace: true });
    // console.log(hookError?.message);

    if (loading || sending) {
      return <Loading></Loading>
  }
  };

  

  useEffect(() => {
    if (hookError) {
      switch (hookError?.code) {
        case "auth/invalid-email":
          toast("Invalid Email Provided");
          break;
        case "auth/internal-error":
          toast("Wrong password provided");
          break;
        default:
          toast.warning("Something went wrong!!");
      }
    }
  }, [hookError]);

  

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
      toast.success("Successfully SignIn");
    }
  }, [user]);
  return (
    <div className="login">
      <div className="form-box">
        <div className="button-box">
          <h3 className="text-center">Log In</h3>
        </div>

        <div className="input-field-group">
          <form onSubmit={handleLogin} className="mx-auto">
            <input
              onChange={handleEmailInput}
              type="text"
              name="email"
              className="input-field"
              placeholder="Email"
              required
            />
            {errors?.email && <p className='text-danger'>{errors.email}</p>}
            <input
              onChange={handlePasswordInput}
              type="password"
              name="password"
              className="input-field"
              placeholder="Password"
              required
            />
            {errors?.password && <p className='text-danger'>{errors.password}</p>}
            <input type="checkbox" name="" id="" />
            <span>Remember me</span>
            <button type="submit" className="btn w-100 mx-auto">
              Log In
            </button>
            <Link className='forget-pass'
              onClick={async () => {
                await sendPasswordResetEmail(userInfo.email);
                toast("Sent email");
              }}
              to="/login"
            >
              Forgot Password?
            </Link>
          </form>
          <div className="d-flex justify-content-center">
            <hr className="w-50" />
            <p className="mx-3">or</p>
            <hr className="w-50" />
          </div>
          <p className="text-center my-0">Sign in with</p>
          <SocialLogin></SocialLogin>
          <Link to="/register" className="btn w-100 mx-auto">
            I'm New Here
          </Link>
        </div>
      </div>      
    </div>
  );
};

export default Login;
