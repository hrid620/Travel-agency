import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light   " style={{ backgroundColor: ' #19547b' }}>
                <div className="container-fluid ">
                    <Link className="navbar-brand h5 text-white" to="/icon">ExpoTrip

                    </Link>

                    <button className="navbar-toggler btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=" btn-light navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav ">
                            <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link active text-white " to="/explore">Explore</Link>
                            <Link className="nav-link active text-white" to="/dashboard">Dashboard</Link>

                            <NavLink to="/login" className="nav-link ">
                                <button className="btn btn-light fw-bolder"> Login</button> </NavLink>


                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;