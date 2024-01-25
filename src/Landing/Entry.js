import React, { useEffect } from 'react'
import Login from './Login'
import { gapi } from 'gapi-script';


const clientId = "578918890169-fo553e5vpc8aviachelgihf03foerm6n.apps.googleusercontent.com"



const Entry = () => {
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
        <div className='myflex' style={{ height: '100vh' }}>
            <Login />
        </div>
    )
}

export default Entry