import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import './pages.css'
import { Modal } from 'antd'
import toast from 'react-hot-toast'
import './teams.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from './colab'


const Home = () => {
  const navigate = useNavigate()

  const [auth, setAuth] = useAuth();
  const [teamname, setTeamname] = useState('')
  const [visible, setVisible] = useState(false)
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [teams, setTeams] = useState()

  const open = (e, id) => {
    e.preventDefault();
    navigate('/collaboration')
    setAuth(id)
  }
  const getTeams = async () => {
    try {
      console.log(`${process.env.REACT_APP_API}/team/get`)
      const x = await axios.get(`${process.env.REACT_APP_API}/team/get`)
      setTeams(x.data.teams)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getTeams();
  }, [])
  const handle = async (e) => {
    e.preventDefault();
    try {
      setVisible(false)
      const id = JSON.parse(localStorage.getItem('myuser'))._id
      // alert(id)
      let resp = await axios.post(`${process.env.REACT_APP_API}/team/new`, { teamName: teamname, userid: id, username: user.name });
      if (resp.data.success) {
        toast.success('New Team Created');
        getTeams();
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  }
  return (
    <>
      <Layout>
        <div className="page">
          <h2 className='m-3' >My Teams</h2>
          <div>
            <button className='btn btn-outline-primary mx-1' onClick={() => setVisible(true)}>+ Create New Team</button>
            <button className='btn btn-outline-primary mx-1'>Join Team</button>
            <div className="boxes">
              {teams?.map(t =>
                <div className="box" onClick={(e) => open(e, t._id)}>
                  <h2>{t.teamName}</h2>
                  <p className='m-0'>created by {t.username}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <Modal styles={{ height: 'fit-content' }} onCancel={() => { setVisible(false); setTeamname('') }} footer={null} open={visible} >
          <div className='d-flex ' style={{ flexDirection: 'column' }}>
            <p style={{ fontSize: '20px' }}> Create a new Team </p>
            <input value={teamname} onChange={(e) => { setTeamname(e.target.value) }} id="form2Example1" className="form-control m-2" placeholder='Team Name' required />
            <span style={{ display: 'flex', justifyContent: 'space-around' }}>
              <button onClick={() => { setVisible(false) }} className='btn btn-secondary'>
                Cancel
              </button>
              <button onClick={(e) => { handle(e) }} className='btn btn-outline-primary'>

                CREATE

              </button>
            </span>
          </div>
        </Modal>

      </Layout>
    </>
  );
}

export default Home