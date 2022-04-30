import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import {Navigate, useLocation} from 'react-router-dom';


const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();

    if (loading) {
        return <div>Loading...</div>;
    }
    if (!user) {
        return <Navigate to="/login" state={{from: location}} replace />;
        
    }
    else {
        return children;    
    };
};   

export default RequireAuth;