import React, { useState } from 'react'
import Layout from './Layout'
import './pages.css'

const Home = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    return (
        <>
            <Layout>
                <div classname="page myflex" style={{ height: '80vh', width: '70%' }}>
                    <div className="card mb-4">
                        <div className="card-body text-center">
                            {
                                user ?
                                    <>
                                        <img src={user.imageUrl} alt="avatar" className="rounded-circle img-fluid" style={{ width: 150 }} />
                                        <h5 className="my-3">{user.name}</h5>
                                        <p className="text-muted mb-1">{user.email}</p>

                                    </>

                                    :
                                    ''
                            }
                        </div>
                    </div>
                </div>

            </Layout >
        </>)
}

export default Home