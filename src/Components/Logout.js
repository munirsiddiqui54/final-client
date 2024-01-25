import React from 'react'

import { GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';

const clientId = "578918890169-fo553e5vpc8aviachelgihf03foerm6n.apps.googleusercontent.com"

const Logout = () => {

    const navigate = useNavigate()
    const onSuccess = (res) => {
        console.log('Logout Success');
        localStorage.clear()
        navigate('/')
    }

    return (


        <div id="signOutButton" className='mx-2'>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout
