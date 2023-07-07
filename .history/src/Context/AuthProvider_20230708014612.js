import React, { createContext } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = () => {
    return (
        <div>

        </div>
    );
};

export default AuthProvider;