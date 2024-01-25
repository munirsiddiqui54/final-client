import { useState, useContext, createContext, useEffect } from 'react';
import axios from 'axios';
const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState("65b15fefb8f346f457021634");

    // axios.defaults.headers.common['Authorization'] = auth?.token;
    // axios.defaults.auth = JSON.parse(localStorage.getItem('auth')).user._id;
    // useEffect(() => {
    //     const Lcdata = localStorage.getItem('auth');
    //     if (Lcdata) {
    //         const parseData = JSON.parse(Lcdata);
    //         setAuth({
    //             ...auth,
    //             user: parseData.user,
    //             token: parseData.token,
    //             bill: parseData.bill
    //         })
    //     }
    // }, []);  //[auth]
    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    );
};

//custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };