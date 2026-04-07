import React, { use } from 'react'
import { AuthContext } from '../contexts/AuthContext/AuthContext'
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user} = use(AuthContext);

    if(!user) {
        <Navigate to="signIn"></Navigate>
    }

  return children;
}

export default PrivateRoute