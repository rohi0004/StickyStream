import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#0A192F', padding: '10px 20px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" style={{ fontSize: '24px', fontWeight: 'bold', color: '#64FFDA', transition: 'color 0.3s ease' }} to="/">
                        StickyStream
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {window.localStorage.getItem('token') ? (
                                    <Link
                                        className="btn"
                                        style={{ backgroundColor: '#64FFDA', color: '#0A192F', border: 'none', padding: '8px 16px', borderRadius: '5px', fontWeight: 'bold', transition: 'background-color 0.3s ease', margin: '0 5px' }}
                                        to="/notes"
                                    >
                                        Notes
                                    </Link>
                                ) : (
                                    ""
                                )}
                                {window.localStorage.getItem('token') ? (
                                    <Link
                                        className="btn mx-2"
                                        style={{ backgroundColor: '#64FFDA', color: '#0A192F', border: 'none', padding: '8px 16px', borderRadius: '5px', fontWeight: 'bold', transition: 'background-color 0.3s ease', margin: '0 5px' }}
                                        to="/addnotes"
                                    >
                                        Add Notes
                                    </Link>
                                ) : (
                                    ""
                                )}
                                {window.localStorage.getItem('token') ? (
                                    <Link
                                        className="btn me-2"
                                        style={{ backgroundColor: '#64FFDA', color: '#0A192F', border: 'none', padding: '8px 16px', borderRadius: '5px', fontWeight: 'bold', transition: 'background-color 0.3s ease', margin: '0 5px' }}
                                        to="/profile"
                                    >
                                        Profile
                                    </Link>
                                ) : (
                                    ""
                                )}
                                {!window.localStorage.getItem('token') ? (
                                    <Link
                                        className="btn mx-1"
                                        style={{ backgroundColor: '#64FFDA', color: '#0A192F', border: 'none', padding: '8px 16px', borderRadius: '5px', fontWeight: 'bold', transition: 'background-color 0.3s ease', margin: '0 5px' }}
                                        to="/login"
                                    >
                                        Login
                                    </Link>
                                ) : (
                                    ""
                                )}
                                {!window.localStorage.getItem('token') ? (
                                    <Link
                                        className="btn mx-1"
                                        style={{ backgroundColor: '#64FFDA', color: '#0A192F', border: 'none', padding: '8px 16px', borderRadius: '5px', fontWeight: 'bold', transition: 'background-color 0.3s ease', margin: '0 5px' }}
                                        to="/signup"
                                    >
                                        SignUp
                                    </Link>
                                ) : (
                                    <Link
                                        to="/login"
                                        onClick={() => {
                                            localStorage.removeItem("token");
                                        }}
                                        className="btn logoutbtn"
                                        style={{ backgroundColor: '#FF6B6B', color: '#0A192F', border: 'none', padding: '8px 16px', borderRadius: '5px', fontWeight: 'bold', transition: 'background-color 0.3s ease', margin: '0 5px' }}
                                    >
                                        Logout
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;