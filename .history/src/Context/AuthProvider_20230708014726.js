import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loding, setLoading] = useState(true)
    return (
        <div>

        </div>
    );
};

export default AuthProvider;