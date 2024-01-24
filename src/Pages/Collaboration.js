import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import './pages.css'
import { Modal } from 'antd';


import { gapi } from 'gapi-script';
import { GoogleLogin } from 'react-google-login';
const clientId = "578918890169-fo553e5vpc8aviachelgihf03foerm6n.apps.googleusercontent.com"
const API_KEY = ""
const SCOPES = "https://www.googleapis.com/auth/drive"








const Collaboration = () => {
    const [visible,setVisible]=useState(false)
    const [filename,setFilename]=useState('')
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const [icon,setIcon]=useState(0)
    const [string,setString]=useState('')
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: SCOPES
            })
        }
        gapi.load('client:auth2', start)
    })
   
    const sort=(e)=>{
        e.preventDefault()
        if (icon===1){
            createDocs()
        }else  if (icon==2){
            createSheet()
        }else  if (icon==3){
            createJamboard()
        }
        setVisible(false)
    }
    const createDocs=()=>{
alert("Creating docs")
//code

    }
    const createSheet=()=>{
        alert("Creating Sheets")

    }
    const createMeet=()=>{
        alert("Creating meet")

    }
    const createJamboard=()=>{
        alert("Creating jamboard")

    }
    const createSlides=()=>{
        
    }

    return (
        <>
            <Layout>

                <div className='page'>
                    <div className='icons m-4'>
                    <h5>Create New</h5>
                    <img className='m-4' width="100" onClick={()=>{setVisible(true);setFilename('');setString('Docs');setIcon(1)}} height="100" src="https://img.icons8.com/fluency/100/google-docs--v2.png" alt="google-docs--v2"/>
                    <img className='m-4' width="100" onClick={()=>{setVisible(true);setFilename('');setString('Sheets');setIcon(2)}} height="100" src="https://img.icons8.com/fluency/100/google-sheets.png" alt="google-sheets"/>
                    <img className='m-4' width="100" onClick={()=>{setVisible(true);setFilename('');setString('Jamboard');setIcon(3)}} height="100" src="https://img.icons8.com/fluency/100/google-meet--v2.png" alt="google-meet--v2"/>
                    <img className='m-4' width="100" onClick={()=>{setVisible(true);setFilename('');setString('Docs');setIcon(4)}} height="100" src="https://img.icons8.com/fluency/100/jamboard.png" alt="google-docs--v2"/>
                    <img className='m-4' width="100" onClick={()=>{setVisible(true);setFilename('');setString('Docs');setIcon(5)}} height="100" src="https://img.icons8.com/fluency/100/google-slides.png" alt="google-slides"/>

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
