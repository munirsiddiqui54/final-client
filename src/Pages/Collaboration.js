import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import './pages.css'
import { Modal } from 'antd';
import toast from 'react-hot-toast';
import { gapi } from 'gapi-script';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './colab';

// import { GoogleLogin } from 'react-google-login';


const clientId = "578918890169-fo553e5vpc8aviachelgihf03foerm6n.apps.googleusercontent.com"
const API_KEY = "AIzaSyC_LCdmrG7VaSdrGzyRw_gQ00rJNwWQbek"
const SCOPES = "https://www.googleapis.com/auth/drive"
const DISCOVERY_DOCS = ['https://docs.googleapis.com/$discovery/rest?version=v1'];


const Collaboration = () => {
    const [auth, setAuth] = useAuth()
    const [visible, setVisible] = useState(false)
    const [filename, setFilename] = useState('')
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const [icon, setIcon] = useState(0)
    const [string, setString] = useState('');
    const [team, setTeam] = useState();
    const [works, setworks] = useState()
    // const { state } = this.props.location
    const getTeam = async () => {
        try {
            console.log(`${process.env.REACT_APP_API}/team/get`)
            const x = await axios.get(`${process.env.REACT_APP_API}/team/get/${auth}`)
            console.log(x.data.teams[0])
            setTeam(x.data.teams[0])
        } catch (err) {
            console.log(err)
        }
    }

    const getWorks = async () => {
        try {
            console.log(`${process.env.REACT_APP_API}/team/get`)
            const x = await axios.get(`${process.env.REACT_APP_API}/work/get/${auth}`)
            setworks(x.data.works)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        function start() {
            gapi.client.init({
                apikey: API_KEY,
                clientId: clientId,
                scope: SCOPES,
                discoveryDocs: DISCOVERY_DOCS,
            })
        }
        gapi.load('client:auth2', start);
        getTeam();
        getWorks()
    }, [])

    const sort = (e) => {
        e.preventDefault()
        if (icon === 1) {
            createDocs()
            // createNewDoc()

        } else if (icon == 2) {
            createSheet()
        } else if (icon == 3) {
            createMeet()
        }
        else if (icon == 4) {
            createJamboard()
        }
        else if (icon == 5) {
            createSlides()
        }
        else if (icon == 6) {
            createResource()
        }
        setVisible(false);

    }

    const createDocs = () => {
        var accessToken = gapi.auth.getToken().access_token;
        fetch('https://docs.googleapis.com/v1/documents?title=' + filename, {
            method: 'POST',
            headers: new Headers({
                'Authorization': 'Bearer ' + accessToken,
            })
        }).then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data)
            console.log(data.documentId)
            setPermissions(data.documentId)
            postWork('https://docs.google.com/document/d/' + data.documentId + '/edit')
            getWorks()
            window.open('https://docs.google.com/document/d/' + data.documentId + '/edit', '_blank')
            onSuccessDocs(data.documentId)
        })
            .catch((error) => console.log(error))
    }

    const postWork = async (url) => {
        // team, url, username, fileName
        try {
            setVisible(false)
            const user = JSON.parse(localStorage.getItem('user'))
            let resp = await axios.post(`${process.env.REACT_APP_API}/work/new`, { team: auth, url: url, username: user.name, filename: filename });
            if (resp.data.success) {
                toast.success('New Team Created');
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        }
    }

    const onSuccessDocs = async (DocID) => {

    }
    async function setPermissions(documentId) {
        try {
            // Set permissions for Anyone with the link
            const response = await fetch(`https://www.googleapis.com/drive/v3/files/${documentId}/permissions?key=${API_KEY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${gapi.auth.getToken().access_token}`, // Include the access token if necessary
                },
                body: JSON.stringify({
                    role: 'writer',
                    type: 'anyone',
                }),
            });

            if (!response.ok) {
                throw new Error(`Error setting permissions: ${response.statusText}`);
            }

            console.log('Permissions set successfully.');
        } catch (error) {
            console.error('Error setting permissions:', error);
        }
    }
    const createSheet = () => {
        alert("Creating Sheets")

    }
    const createMeet = () => {
        alert("Creating meet")

    }
    const createJamboard = () => {
        alert("Creating jamboard")

    }
    const createSlides = () => {

    }
    const createResource = () => {

    }

    return (
        <>
            <Layout>

                <div className='page'>
                    <div className='icons m-4'>
                        <h2 className='m-0'>Team: {team?.teamName}</h2>
                        <p className='m-0 '>Created by : {team?.username}</p>

                        <img className='m-4' width="100" onClick={() => { setVisible(true); setFilename(''); setString('Docs'); setIcon(1) }} height="100" src="https://img.icons8.com/fluency/100/google-docs--v2.png" alt="google-docs--v2" />
                        <img className='m-4' width="100" onClick={() => { setVisible(true); setFilename(''); setString('Sheets'); setIcon(2) }} height="100" src="https://img.icons8.com/fluency/100/google-sheets.png" alt="google-sheets" />
                        <img className='m-4' width="100" onClick={() => { setVisible(true); setFilename(''); setString('Meet'); setIcon(3) }} height="100" src="https://img.icons8.com/fluency/100/google-meet--v2.png" alt="google-meet--v2" />
                        <img className='m-4' width="100" onClick={() => { setVisible(true); setFilename(''); setString('Jamboard'); setIcon(4) }} height="100" src="https://img.icons8.com/fluency/100/jamboard.png" alt="google-docs--v2" />
                        <img className='m-4' width="100" onClick={() => { setVisible(true); setFilename(''); setString('Slides'); setIcon(5) }} height="100" src="https://img.icons8.com/fluency/100/google-slides.png" alt="google-slides" />
                        <img className='m-4' width="100" onClick={() => { setVisible(true); setFilename(''); setString('Resource'); setIcon(6) }} height="100" src="https://img.icons8.com/color/100/add-file.png" alt="add-file" />
                    </div>
                    <div className='m-4'>
                        <h5 className='my-2'>Workspaces:</h5>
                        <ul class="list-group">
                            {
                                works?.map(w =>
                                    <li class="list-group-item myflex" style={{ justifyContent: 'space-between' }}>

                                        <h6 className='m-2'>{w?.fileName}</h6>
                                        <span>Created by : {w?.username}</span>

                                        <a href={w?.url}>visit</a>

                                    </li>
                                )
                            }

                        </ul>
                    </div>
                    <div className='chat-wrap m-4'>
                        <h5>Chat</h5>
                    </div>

                </div>
                <Modal styles={{ height: 'fit-content' }} onCancel={() => { setVisible(false); setFilename('') }} footer={null} open={visible} >
                    <div className='d-flex ' style={{ flexDirection: 'column' }}>
                        <p style={{ fontSize: '20px' }}> Create a new {string} : </p>

                        <input value={filename} onChange={(e) => { setFilename(e.target.value) }} id="form2Example1" className="form-control m-2" placeholder='FileName?' required />


                        <span style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <button onClick={() => { setVisible(false) }} className='btn btn-secondary'>
                                Cancel
                            </button>
                            <button onClick={(e) => { sort(e) }} className='btn btn-outline-primary'>

                                CREATE

                            </button>
                        </span>
                    </div>
                </Modal>

            </Layout >
        </>)
}

export default Collaboration
