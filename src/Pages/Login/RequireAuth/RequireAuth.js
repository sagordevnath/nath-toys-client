import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase.init';
import {Navigate, useLocation} from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';


const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();

    if (loading) {
        return <Loading></Loading>;
    }
    if (!user) {
        return <Navigate to="/login" state={{from: location}} replace />;
        
    }
    else {
        return children;    
    };
};   

export default RequireAuth;