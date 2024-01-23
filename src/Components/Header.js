import React from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div id="viewport">
            <div id="sidebar">
                <header>
                    <a href="#">My App</a>
                </header>
                <ul className="nav">
                    <li className='m-3'>
                        <NavLink to='/manage'>
                            <button className='btn btn-primary' >Management</button>
                        </NavLink>
                    </li>
                    <li className='m-3'>
                        <NavLink to='/forums'>
                            <button className='btn btn-primary' >Discussion</button>
                        </NavLink>
                    </li>
                    <li className='m-3'>
                        <NavLink to='/library'>
                            <button className='btn btn-primary' >Library</button>
                        </NavLink>
                    </li>
                    <li className='m-3'>
                        <NavLink to='/'>
                            <button className='btn btn-primary' >Profile</button>
                        </NavLink>
                    </li>

                </ul>
            </div>

        </div>

    )
}

export default Header