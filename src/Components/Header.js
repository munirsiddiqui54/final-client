import React, { useState } from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'
import { Button } from 'antd'
import axios from 'axios'
import toast from 'react-hot-toast';

const Header = () => {

    const [active, setActive] = useState()



    return (
        <nav id="sidebarMenu" className="collapse d-lg-block back">
            <div className="position-sticky back">
                <div className="list-group item list-group-flush m-3 back">

                    <Link to='/dashboard' className="list-group-item back m-2" style={{ border: 'none' }}>
                        <i style={{ color: 'white' }} className="fas fa-tachometer-alt fa-fb  me-3" /><span style={{ color: 'white' }}>Dashboard</span>
                    </Link>

                    <Link to='/teams' className="list-group-item back m-2" style={{ border: 'none' }}>
                        <i style={{ color: 'white' }} className="fas fa-users fa-fw me-3" /><span style={{ color: 'white' }}>My Teams</span>
                    </Link>

                    <Link to='/forums' className="list-group-item back m-2" style={{ border: 'none' }}>
                        <i style={{ color: 'white' }} className="fas fa-users fa-fw me-3" /><span style={{ color: 'white' }}>Forums</span>
                    </Link>

                    <Link to='/library' className="list-group-item back m-2" style={{ border: 'none' }}>
                        <i style={{ color: 'white' }} className="fas fa-chart-bar fa-fw me-3" /><span style={{ color: 'white' }}>Library</span>
                    </Link>

                    <Link to='/profile' className="list-group-item back m-2" style={{ border: 'none' }}>
                        <i style={{ color: 'white' }} className="fas fa-user fa-fw me-3" /><span style={{ color: 'white' }}>Profile</span>
                    </Link>




                    {/* 
                    <Link to='/forums' className="list-group-item back m-2" >
                        <i style={{ color: 'white' }} className="fas fa-users fa-fw me-3" /><span style={{ color: 'white' }}>Forums</span>
                    </Link>
                    <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-chart-line fa-fw me-3" /><span>Analytics</span></a>
                    <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                        <i className="fas fa-chart-pie fa-fw me-3" /><span>SEO</span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-chart-bar fa-fw me-3" /><span>Library</span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-globe fa-fw me-3" /><span>International</span></a>
                    <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-building fa-fw me-3" /><span>Partners</span></a>
                    <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-calendar fa-fw me-3" /><span>Calendar</span></a>
                    <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-users fa-fw me-3" /><span>Users</span></a>
                    <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-money-bill fa-fw me-3" /><span>Sales</span></a> */}
                </div>
            </div>
        </nav>

    )
}

export default Header