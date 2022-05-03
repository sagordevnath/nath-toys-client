import React from 'react';
import auth from '../../../Firebase/Firebase.init';
import {Navigate, useLocation} from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
    useSignInWithGithub,
    useSignInWithGoogle,
  } from "react-firebase-hooks/auth";


const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [googleUser] = useSignInWithGoogle(auth);
  const [githubUser] = useSignInWithGithub(auth);

        
    let location = useLocation();

    if (loading) {
        return <Loading></Loading>;
    }
    if (!user || !googleUser || !githubUser) {
        return <Navigate to="/login" state={{from: location}} replace />;
        
    }
    else {
        return children;    
    };
};   

export default RequireAuth;