import React from 'react';
import './SocialLogin.css'
import google from '../../../Images/social/google.png';
import github from '../../../Images/social/github.png';

const SocialLogin = () => {
    return (
        <div className='social-icons'>            
                <img src={google} alt="" />            
                <img src={github} alt="" />
                <img src={google} alt="" />            
        </div>
    );
};

export default SocialLogin;