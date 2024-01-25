import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast';
import axios from 'axios'

// import { GoogleLogin } from 'react-google-login';
const clientId = "578918890169-fo553e5vpc8aviachelgihf03foerm6n.apps.googleusercontent.com"



const Login = () => {
    const navigate = useNavigate()

    const onSuccess = async (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        localStorage.setItem('user', JSON.stringify(res.profileObj));
        const user = res.profileObj;
        console.log(process.env.REACT_APP_API)
        try {
            let resp = await axios.post(`${process.env.REACT_APP_API}/auth/register`, { email: user.email, name: user.name, googleid: user.googleId });
            if (resp.data.success) {
                toast.success('Welcome back');
                localStorage.setItem('userId', resp.data.user._id)
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        }
        navigate('/dashboard')
    }
    const onFailure = (res) => {
        console.log('Login failed: res:', res);
    }

    return (

        <div id="signInButton">
            <h3 className='my-3'>Colab Learn</h3>
            <button className='btn btn-primary' onClick={() => navigate('/profile')}>Login with Google</button>
        </div>
    )
}

export default Login