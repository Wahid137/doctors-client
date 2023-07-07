import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useLocation } from 'react-router-dom';

const PrivateRoute = () => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
};

export default PrivateRoute;