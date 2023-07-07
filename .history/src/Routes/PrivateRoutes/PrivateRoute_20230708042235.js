import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useLocation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const PrivateRoute = () => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        return Children;
    }
};

export default PrivateRoute;