import React from 'react';
import img1 from './2lyo_5omm_230125.jpg'
import img6 from './img6.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import { useNavigate } from 'react-router-dom';

// Import Bootstrap CSS

const LandingPage = () => {
    const navigate = useNavigate()
    return (
        <div>
            {/* Navbar Section */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        COLLABLEARN
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav" style={{ justifyContent: "space-between" }} >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <div class='button' className='m-1'>
                            <button type="button" class="btn btn-primary m-1" onClick={() => { navigate('/register') }}>Sign-up</button>
                            <button type="button" class="btn btn-outline-primary m-1" onClick={() => { navigate('/log') }}>Login</button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Header Section */}
            <div className="container-fluid">
                <div className="row">
                    {/* Description on the left */}
                    <div className="col-md-6">
                        <div className="p-5">
                            <h1 className="display-4">Empowering Collaboration, Elevating Education: Unleashing the Power of Community in Learning</h1>
                            <p className="lead">
                                Welcome to our Collaborative Learning Management System, to learn more about us click here
                            </p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>

                    {/* Hero image on the right */}
                    <div className="col-md-6">
                        <img
                            src={img1} // Replace with your actual image source
                            alt="Hero"
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>
            {/* About us Section */}
            {/* <div>
                <div className=' text-center p-2' >
                    <h1 className=''>ABOUT US</h1>
                    <p className='p-5'>
                        Our CLMS is designed to transform traditional learning into a dynamic, interactive, and engaging journey. Imagine a platform where students seamlessly collaborate on group projects, participate in insightful discussions, and leverage the collective wisdom of their peers.
                    </p></div>
                <div className='d-flex justify-content-around' style={{ width: '80%', margin: "0 auto 40px" }} >
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={img6} className="card-img-top" alt="Card Image" />
                        <div className="card-body m-2">
                            <h4>Group Project Collaboration</h4>
                            <p className="card-text">
                                Work together in real-time, assign tasks, and track progress effortlessly.
                            </p>
                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={img3} className="card-img-top" alt="Card Image" />
                        <div className="card-body">
                            <h4>Discussion Forums</h4>
                            <p className="card-text">
                                Dive into threaded discussions enriched with multimedia content for deeper insights..
                            </p>
                        </div>
                    </div>
                    <div className={"card"} style={{ width: '18rem' }}>
                        <img src={img4} className="card-img-top" alt="Card Image" />
                        <div className="card-body">
                            <h4>Resource Sharing</h4>
                            <p className="card-text">
                                Access a centralized hub for sharing documents, presentations, and valuable learning materials.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-around' style={{ width: '80%', margin: "20px auto" }} >
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={img6} className="card-img-top" alt="Card Image" />
                        <div className="card-body m-2">
                            <h4>Group Project Collaboration</h4>
                            <p className="card-text">
                                Work together in real-time, assign tasks, and track progress effortlessly.
                            </p>
                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={img3} className="card-img-top" alt="Card Image" />
                        <div className="card-body">
                            <h4>Discussion Forums</h4>
                            <p className="card-text">
                                Dive into threaded discussions enriched with multimedia content for deeper insights..
                            </p>
                        </div>
                    </div>
                    <div className={"card"} style={{ width: '18rem' }}>
                        <img src={img4} className="card-img-top" alt="Card Image" />
                        <div className="card-body">
                            <h4>Resource Sharing</h4>
                            <p className="card-text">
                                Access a centralized hub for sharing documents, presentations, and valuable learning materials.
                            </p>
                        </div>
                    </div>
                </div>



            </div> */}

        </div>
    );
};

export default LandingPage;
