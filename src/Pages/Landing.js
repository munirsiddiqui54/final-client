import React, { useEffect, useState } from 'react'
import './auth.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { gapi } from 'gapi-script';
import axios from 'axios';
import toast from 'react-hot-toast';


const clientId = "578918890169-fo553e5vpc8aviachelgihf03foerm6n.apps.googleusercontent.com"
const SCOPES = ['https://www.googleapis.com/auth/calendar', 'https://www.googleapis.com/auth/drive'];

// import Layout from '../../Components/Layout/Layout'
// import { useAuth } from '../../context/auth';

const Landing = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const resp = await axios.post(`${process.env.REACT_APP_API}/auth/login`, { email, password });
            if (resp.data.success) {
                toast.success('Login successfully');


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
            <div className='container box' style={{ width: '45%' }}>
                <h1 className='mx-3'>Login</h1>
                <form onSubmit={() => { }}>
                    <div className="row m-4">
                        <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" id="form2Example1" className="form-control m-2" placeholder='Email' required />
                        <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" id="form2Example2" className="form-control m-2" placeholder='password' required />
                    </div>
                    <button type="submit" className="btn px-3 btn-primary btn-block mb-4">Login</button>
                </form>
                <div className="text-center">
                    <p>Not a member? <Link to='/register' href="#!">Register</Link></p>
                    <Login />
                </div>
            </div >
        </div>
        // </Layout>
    )
}

export default Landing