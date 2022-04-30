import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from '../../../Firebase/Firebase.init';
import {useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth"
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        common: "",
    });
    // const [showPassword, setShowPassword] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

      const handleNameInput = e => {
          setUserInfo({...userInfo, name: "e.target.value"})
      }

      const handleEmailInput = e => {
          const emailRegex = /\S+@\S+\.\S+/;
          const validEmail = emailRegex.test(e.target.value);
          console.log(validEmail);

          if (validEmail) {
              setUserInfo({...userInfo, email: e.target.value});
              setErrors({...errors, email: ""})
          }
          else {
              setUserInfo({...userInfo, email: ""});
              setErrors({...errors, email:"Invalid Email"})
          }
      };

      const handlePasswordInput = e => {
        const passwordRegex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
        const validPassword = passwordRegex.test(e.target.value);
        console.log(validPassword);

        if(validPassword) {
            setUserInfo({...userInfo, password: e.target.value});
            setErrors({...errors, password: ""});
        }
        else {
            setUserInfo({...userInfo, password: ""});
            setErrors({...errors, password:"Poor strength Password!"})
        }
      };

      const handleConfirmPasswordInput = e => {
          if(e.target.value === userInfo.password) {
              setUserInfo({...userInfo, confirmPassword: e.target.value});
              setErrors({...errors, password: ""})
          }
          else {
            setUserInfo({...userInfo, confirmPassword: ""})  
            setErrors({...errors, password: "Password don't Match"});

          }
      };

      const handleRegister = e => {
          e.preventDefault();          
          createUserWithEmailAndPassword(userInfo.email, userInfo.password);
          

          if (loading) {
            return <Loading></Loading>;
          }
      }

      useEffect(()=>{
        if (hookError) {
            switch(hookError?.code){
            case "auth/invalid-email":
                toast("Invalid Email Provided");
                break;
            case "auth/invalid-password":
                toast("Wrong password provided");
                break;
            case "auth/email-already-in-use":
                toast("Email already in use");
                break;
            default:
                // toast('Something went wrong!!')
                break;
            }

        }
        else if(user) {
            toast.success('Successfully SignUp');            
        }
      },[hookError]);

      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from?.pathname || "/";

      useEffect(()=> {
          if (user) {
              navigate(from)              
          }
      },[user]);
    return (
        <div className="login">
      <div className="form-box">
        <div className="button-box">
          <h3 className="text-center">Register</h3>          
        </div> 
              
        <div className="input-field-group">
        <form onSubmit={handleRegister} className="mx-auto"> 
            <input onChange={handleNameInput} type="text" name="name" className="input-field" placeholder="Name" required/>
            <input onChange={handleEmailInput} type="text" name="email" className="input-field" placeholder="Email" required/>
            {errors?.email && <p className='text-danger'>{errors.email}</p>}
            <input onChange={handlePasswordInput} type="password" name="password" className="input-field" placeholder="Password" required/>
            {errors?.password && <p className='text-danger'>{errors.password}</p>}
            <input onChange={handleConfirmPasswordInput} type="password" name="confirmPassword" className="input-field" placeholder="Confirm Password" required/>
            <button type="submit" className='btn w-100 mx-auto'>Register</button>
            </form>
            <div className="d-flex justify-content-center">
                <hr className="w-50" />
                <p className="mx-3">or</p>
                <hr className="w-50" />
            </div> 
            <p className='text-center my-0'>Sign Up with</p>
            <SocialLogin></SocialLogin>
            <Link to="/login" className="btn w-100 mx-auto">I've an account</Link>
        </div>
      </div>
    </div>
    );
};

export default Register;