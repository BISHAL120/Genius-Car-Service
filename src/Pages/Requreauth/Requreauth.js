import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../Shared/firebase.init';
import Loading from '../Shared/Loading/Loading';

const Requreauth = ({children}) => {

    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate to="/login" state={{from: location}} replace />;
    }

    return children;
};

export default Requreauth;