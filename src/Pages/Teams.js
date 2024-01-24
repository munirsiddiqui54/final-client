import React, { useState } from 'react'
import Layout from './Layout'
import './pages.css'
import './teams.css'
const Home = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    return (
      <>
        <Layout>
          <div className="page">
            <h2 className='m-4'>My Teams</h2>

            <div>
              <div className="boxes">
                <div className="box">
                  <h2>Team A</h2>
                </div>
                <div className="box">
                  <h2>Team B</h2>
                </div>
                <div className="box">
                  <h2>Team C</h2>
                </div>
                <div className="box">
                  <h2>Team D</h2>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
}

export default Home