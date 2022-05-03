import React, { useEffect } from "react";
import "./SocialLogin.css";
import google from "../../../Images/social/google.png";
import github from "../../../Images/social/github.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Firebase.init";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  const navigate = useNavigate();
  const location = useLocation();

  if (googleError || githubError) {
    toast("Something went wrong. Please try again!!");
  }
  if (googleLoading || githubLoading) {
    return <Loading></Loading>;
  }
  
  if (!googleUser || !githubUser) {
    <Navigate to="/login" state={{from: location}} replace />;
    // navigate("/") ;
  }
  if(googleUser || githubUser) {
    navigate('/')
  }

  
  
  return (
    <div className="social-icons">
      <button onClick={() => signInWithGoogle()} className="social-btn">
        <img src={google} alt="" /> Google
      </button>
      <button onClick={() => signInWithGithub()} className="social-btn">
        <img src={github} alt="" /> Github
      </button>
    </div>
  );
};

export default SocialLogin;
