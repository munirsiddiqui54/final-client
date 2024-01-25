import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import './pages.css'
import { Modal } from 'antd';


import { gapi } from 'gapi-script';
import { GoogleLogin } from 'react-google-login';
const clientId = "578918890169-fo553e5vpc8aviachelgihf03foerm6n.apps.googleusercontent.com"
const API_KEY = "AIzaSyC_LCdmrG7VaSdrGzyRw_gQ00rJNwWQbek"
const SCOPES = "https://www.googleapis.com/auth/drive"
const DISCOVERY_DOCS = ['https://docs.googleapis.com/$discovery/rest?version=v1', 'https://sheets.googleapis.com/$discovery/rest?version=v4'];








const Collaboration = () => {
    const [visible, setVisible] = useState(false)
    const [filename, setFilename] = useState('')
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const [icon, setIcon] = useState(0)
    const [string, setString] = useState('')

    const fileInputRef = useRef(null);
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        uploadFile(e.target.files[0]);
    };

    const uploadFile = (selectedFile) => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);

            axios.post(`${REACT_APP_API}/api/upload/res`, formData)
                .then(response => {
                    console.log(response.data);
                    alert("File uploaded successfully");
                    setFile(null);
                })
                .catch(error => {
                    console.error(error);
                });
        } else {
            console.warn('Please select a file before uploading.');
        }
    };
    useEffect(() => {
        function start() {
            gapi.client.init({
                apikey: API_KEY,
                clientId: clientId,
                scope: SCOPES,
                discoveryDocs: DISCOVERY_DOCS,
            })
        }
        gapi.load('client:auth2', start)
    })

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
            createSlide()
        }
        else if (icon == 6) {
            createResource()
        }
        setVisible(false)
    }

    const createDocs = () => {
        var accessToken = gapi.auth.getToken().access_token;
        fetch('https://docs.googleapis.com/v1/documents?title=' + filename, {
            method: 'POST',
            headers: new Headers({
                'Authorization': 'Bearer ' + accessToken,
            })
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data)
                console.log(data.documentId)
                setPermissions(data.documentId)
                window.open('https://docs.google.com/document/d/' + data.documentId + '/edit', '_blank')
                onSuccessDocs(data.documentId)

            })
            .catch((error) => console.log(error))


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
        fetch('https://sheets.googleapis.com/v4/spreadsheets', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${gapi.auth.getToken().access_token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                properties: {
                    title: filename,

                },

            }),
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data.spreadsheetId)
                setPermissions(data.spreadsheetId)
                window.open('https://docs.google.com/spreadsheets/d/' + data.spreadsheetId + '/edit#gid=0', '_blank')
                onSuccessDocs(data.spreadsheetId)
            })

    }

    const createMeet = () => {
        alert("Creating meet")

    }
    const createJamboard = () => {
        alert("Creating jamboard")

    }
    const createSlide = async () => {
        try {
            const response = await fetch('https://slides.googleapis.com/v1/presentations?title=' + filename, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${gapi.auth.getToken().access_token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: 'New Google Slides Presentation',
                }),
            });

            if (!response.ok) {
                throw new Error(`Failed to create presentation. Status: ${response.status}`);
            }

            const data = await response.json();

            console.log('Presentation created:', data.presentationId);

            // Optionally, set permissions for the new presentation
            setPermissions(data.presentationId);

            // Open the new presentation in a new tab
            window.open(`https://docs.google.com/presentation/d/${data.presentationId}/edit`, '_blank');

            // Call your onSuccess function with the presentation ID
            onSuccessDocs(data.presentationId);
        } catch (error) {
            console.error('Error creating Google Slides presentation:', error);
        }
    };

    const createResource = () => {
        fileInputRef.current.click();
    }

    return (
        <>
            <Layout>

                <div className='page'>
                    <div className='icons m-4'>
                        <h5>Create New</h5>
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
                            <li class="list-group-item">An item</li>
                            <li class="list-group-item">A second item</li>
                            <li class="list-group-item">A third item</li>
                            <li class="list-group-item">A fourth item</li>
                            <li class="list-group-item">And a fifth one</li>
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
