import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Layout from './Layout'
import { Modal } from 'antd';
import axios from 'axios';
import toast from 'react-hot-toast';

const Forum = () => {
    const [visible, setVisible] = useState(false);
    const [fname, setFname] = useState('');
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [forums, setForums] = useState();

    const getf = async () => {
        try {
            console.log(`${process.env.REACT_APP_API}/forum/get`)
            const x = await axios.get(`${process.env.REACT_APP_API}/forum/get`)
            setForums(x.data.forums)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getf();
    }, [])



    const createDiscussion = async (e) => {
        e.preventDefault()
        const id = localStorage.getItem('userId')
        console.log(id)
        try {
            setVisible(false)
            let resp = await axios.post(`${process.env.REACT_APP_API}/forum/new`, { fname, userid: id, username: user.name });
            if (resp.data.success) {
                toast.success('New Forum Created');
                getf()
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        }
    }
    return (
        <>
            <Layout>
                <div className='page myflex' style={{ justifyContent: 'space-between', alignItems: "start", width: 'auto' }}>
                    <div>
                        <h2 className='m-1'>#SakDiscussion</h2>
                        <p className='mx-3'>
                            Created by : Xyz
                        </p>
                        <div className='window m-2 '>
                            hello
                        </div>
                    </div>
                    <div className='p-3 myflex tab' style={{ justifyContent: 'start' }}>
                        <><button onClick={() => setVisible(true)} className='btn btn-primary mb-3'>+ Create New Discussion</button></>

                        {
                            forums?.map((f, i) =>
                                <span className='m-1 p-1' style={{ width: '100%' }}>
                                    <h4 className='m-0'>{f.fname}</h4>
                                    Created by {f.username}
                                </span>
                            )
                        }

                    </div>
                </div>
            </Layout>
            <Modal styles={{ height: 'fit-content' }} onCancel={() => { setVisible(false); setFname('') }} footer={null} open={visible} >
                <div className='d-flex ' style={{ flexDirection: 'column' }}>
                    <p style={{ fontSize: '20px' }}> Name of Discussion : </p>

                    <input value={fname} onChange={(e) => { setFname(e.target.value) }} id="form2Example1" className="form-control m-2" placeholder='What to Discuss ?' required />


                    <span style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <button onClick={() => { setVisible(false) }} className='btn btn-secondary'>
                            Cancel
                        </button>
                        <button onClick={(e) => { createDiscussion(e) }} className='btn btn-outline-primary'>
                            CREATE
                        </button>
                    </span>
                </div>
            </Modal>
        </>
    )
}

export default Forum