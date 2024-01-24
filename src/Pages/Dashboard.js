import React, { useState } from 'react'
import Layout from './Layout'
import Calendar  from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './pages.css'

const Home = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    return (
        <>
            <Layout>

                <div className='page'>
                    <h1 className='m-4'>Dashboard</h1>\<div className="input-group flex-nowrap mx-4">
                    <span className="input-group-text" id="addon-wrapping">
                        #
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Team Code"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                    />
                    <button type="button" class="btn btn-primary mx-2">Join</button>
                    <button type="button" class="btn btn-success ">Create</button>
                </div>
                <div class="m-4">
                    <Calendar />
                </div>
                   
                </div>

            </Layout >
        </>)
}

export default Home