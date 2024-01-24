import React, { useState } from 'react'
import Logout from './Logout'
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientId = "578918890169-fo553e5vpc8aviachelgihf03foerm6n.apps.googleusercontent.com"

const Nav = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            })
        }
        gapi.load('client:auth2', start)
    })

    return (
        <>
            <nav className="navbar bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <div className='d-flex align-items-center'>
                            {user ?
                                <img src={user.imageUrl} style={{ borderRadius: '25px' }} alt="Logo" width={30} height={30} className="align-text-top m-2" /> : ''
                            }
                            <h4 style={{ display: 'inline', color: 'white' }}>Welcome{user ? ', ' + user.name : ''}</h4>
                        </div>
                    </a>
                    <Logout />
                </div>
            </nav>
        </>

    )
}

export default Nav