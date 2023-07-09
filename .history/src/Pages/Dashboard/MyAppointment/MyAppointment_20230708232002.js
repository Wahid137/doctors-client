import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyAppintment = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h2>This</h2>
        </div>
    );
};

export default MyAppintment;