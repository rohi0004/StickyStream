import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../Navbar';
import { ToastContainer, toast } from 'react-toastify';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const host = 'https://stickystream-backend.onrender.com/api/auth/login';

const Login = () => {
    let navigate = useNavigate();

    const [login, setLogin] = useState({ email: "", password: "" });

    const onChangeFun = (event) => {
        setLogin({ ...login, [event.target.name]: event.target.value });
    };

    useEffect(() => {
        if (window.localStorage.getItem('token')) {
            navigate('/notes');
        }
    }, [navigate]);

    const onSubmitFun = async (event) => {
        event.preventDefault();
        const submitButton = document.getElementById('submitbtn');
        if (submitButton) {
            submitButton.disabled = true;
        }

        try {
            let url = `${host}`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: login.email, password: login.password }),
            });
            const json = await response.json();
            if (json.success) {
                window.localStorage.setItem('token', json.token);
                setLogin({ email: "", password: "" });
                navigate("/notes");
            } else {
                setLogin({ email: "", password: "" });
                toast.error('Invalid login credentials', {
                    theme: "colored",
                });
            }
        } catch (error) {
            console.error('Error during login:', error);
            toast.error('Failed to login. Please try again later.', {
                theme: "colored",
            });
        }

        if (submitButton) {
            submitButton.disabled = false;
        }
    };

    return (
        <>
            <ToastContainer />
            <Navbar />
            {!localStorage.getItem('auth-token') ? (
                <div className="login-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: '100vh', backgroundColor: '#0A192F', padding: '20px' }}>
                    {/* Quotes Section */}
                    <div className="quotes-section" style={{ flex: 1, padding: '20px', color: '#CCD6F6', maxWidth: '50%' }}>
                        <h1 style={{ color: '#64FFDA', fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>Welcome to StickyStream</h1>
                        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#8892B0' }}>
                            "Organize your thoughts, ideas, and tasks effortlessly with StickyStream. Your notes, your way."
                        </p>
                        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#8892B0' }}>
                            "Keep track of everything important in one place. Start your journey with us today!"
                        </p>
                    </div>

                    {/* Login Card */}
                    <div className="login-card" style={{ flex: 1, maxWidth: '400px', padding: '30px', background: 'linear-gradient(145deg, #112240, #0A192F)', border: '1px solid #233554', borderRadius: '15px', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
                        <h2 style={{ color: '#64FFDA', fontSize: '26px', fontWeight: 'bold', textAlign: 'center', marginBottom: '25px', position: 'relative' }}>
                            Sign In
                            <span style={{ content: '', display: 'block', width: '50px', height: '3px', backgroundColor: '#64FFDA', margin: '10px auto 0', borderRadius: '2px' }}></span>
                        </h2>
                        <form onSubmit={onSubmitFun}>
                            <div className="mb-3">
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                    <FaEnvelope className="icon" style={{ color: '#64FFDA', fontSize: '20px', marginRight: '10px' }} />
                                    <span style={{ fontSize: '14px', color: '#8892B0' }}>Email</span>
                                </div>
                                <input
                                    type="email"
                                    onChange={onChangeFun}
                                    name="email"
                                    value={login.email}
                                    autoComplete="off"
                                    placeholder="Enter Your Email"
                                    required
                                    style={{ backgroundColor: '#0A192F', border: '1px solid #233554', color: '#CCD6F6', borderRadius: '8px', padding: '12px', marginBottom: '20px', width: '100%', fontSize: '14px', transition: 'border-color 0.3s ease, box-shadow 0.3s ease' }}
                                />
                            </div>
                            <div className="mb-3">
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                    <FaLock className="icon" style={{ color: '#64FFDA', fontSize: '20px', marginRight: '10px' }} />
                                    <span style={{ fontSize: '14px', color: '#8892B0' }}>Password</span>
                                </div>
                                <input
                                    type="password"
                                    onChange={onChangeFun}
                                    name="password"
                                    value={login.password}
                                    autoComplete="off"
                                    placeholder="Enter Your Password"
                                    required
                                    style={{ backgroundColor: '#0A192F', border: '1px solid #233554', color: '#CCD6F6', borderRadius: '8px', padding: '12px', marginBottom: '20px', width: '100%', fontSize: '14px', transition: 'border-color 0.3s ease, box-shadow 0.3s ease' }}
                                />
                            </div>
                            <div className="mb-3">
                                <button type="submit" style={{ backgroundColor: '#64FFDA', color: '#0A192F', border: 'none', padding: '12px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', width: '100%', fontSize: '16px', transition: 'background-color 0.3s ease, transform 0.3s ease' }} id="submitbtn">Sign In</button>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                                <Link to="/signup" style={{ color: '#64FFDA', textDecoration: 'none', fontSize: '14px' }}>Create an Account</Link>
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <h1 style={{ color: '#64FFDA' }}>You are already logged in</h1>
                    <button style={{ backgroundColor: '#64FFDA', color: '#0A192F', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', marginTop: '20px' }} onClick={() => { navigate('/addnotes') }}>Add Notes</button>
                </div>
            )}
        </>
    );
};

export default Login;