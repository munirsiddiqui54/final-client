import React from 'react'
import Nav from '../Components/Nav'
import Header from '../Components/Header'
import Footer from '../Components/Footer'


const Layout = (props) => {
    return (
        <>
            <div className=''>
                <Nav />
                <div className='d-flex' style={{ minWidth: '70%' }}>
                    <Header />
                    {props.children}
                </div>
            </div>
            <Footer />


        </>
    )
}

export default Layout