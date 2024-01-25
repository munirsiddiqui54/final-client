import React, { useEffect, useState } from 'react'
import './auth.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { gapi } from 'gapi-script';
import toast from 'react-hot-toast';
import axios from 'axios';


const clientId = "578918890169-fo553e5vpc8aviachelgihf03foerm6n.apps.googleusercontent.com"
const SCOPES = ['https://www.googleapis.com/auth/calendar', 'https://www.googleapis.com/auth/drive'];

// import Layout from '../../Components/Layout/Layout'
// import { useAuth } from '../../context/auth';

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const handleregister = async (e) => {
        e.preventDefault();
        try {
            const resp = await axios.post(`${process.env.REACT_APP_API}/auth/register`, { email, password, name });
            if (resp.data.success) {
                toast.success('Welcome');
                navigate('/profile')
                localStorage.setItem('user', JSON.stringify(resp.data.user));
            } else {
                toast.error(resp.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong')
        }
    }

    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const resp = await axios.post(`${process.env.REACT_APP_API}api/v1/auth/login`, { email, password });
    //         if (resp.data.success && resp) {
    //             toast.success('Login successfully');

    //             if (resp.data.user.role === 1) {
    //                 navigate('/dashboard/messages')
    //             } else {
    //                 navigate(location.state || "/");
    //             }
    //             setAuth({
    //                 ...auth,
    //                 user: resp.data.user,
    //                 token: resp.data.token,
    //             });
    //             localStorage.setItem('auth', JSON.stringify(resp.data));
    //         } else {
    //             toast.error(resp.data.message);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         toast.error('Something went wrong')
    //     }
    // }
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: SCOPES.join(' ')
            })
        }
        gapi.load('client:auth2', start)
    })

    return (
        // <Layout>
        <div className='form-container' style={{ backgroundColor: 'gray' }}>
            <div className='container box'>
                <h1 className='mx-3'>Signup</h1>
                <form onSubmit={() => { }}>
                    <div className="row m-4">
                        <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} className="form-control m-2" placeholder='Name' required />
                        <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control m-2" placeholder='Email' required />
                        <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} className="form-control m-2" placeholder='password' required />
                    </div>
                    <button type="submit" onClick={handleregister} className="btn px-3 btn-primary btn-block mb-4">Register</button>
                </form>
                <div className="text-center">
                    <p>Already have an account ? <Link to='/' href="#!">Login</Link></p>

                </div>
            </div >
        </div>
        // </Layout>
    )
}

export default Signup