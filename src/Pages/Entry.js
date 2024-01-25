import React, { useEffect } from 'react'
import Login from './Login'
import { gapi } from 'gapi-script';
import Landing from './Landing';


const clientId = "578918890169-fo553e5vpc8aviachelgihf03foerm6n.apps.googleusercontent.com"
const SCOPES = ['https://www.googleapis.com/auth/calendar', 'https://www.googleapis.com/auth/drive'];


const Entry = () => {

    return (
        <>
            <Landing />

        </>
    )
}

export default Entry