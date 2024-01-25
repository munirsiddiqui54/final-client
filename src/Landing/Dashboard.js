import React, { useState } from 'react'
import Layout from './Layout'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './pages.css'
// import './todo.css'
import Progressbar from './Progressbar';
import TodoList from '../Components/TodoList';



const Home = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    return (
        <>
            <Layout>

                <div className='page'>
                    <h1 className='mx-4 my-2'>Dashboard</h1>\<div className="input-group flex-nowrap mx-4">
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
                    <div>
                       

                    </div>
                    
                    <div class="m-4" className='d-flex justify-content-around m-3 w-100' >
                    <Calendar />
                    <Progressbar/>
                    <div className='todo-list p-4 mt-4 shadow'>
                    <TodoList/>
                    </div>
                    
                    </div>
                    
                </div>
                

            </Layout >
        </>)
}

export default Home