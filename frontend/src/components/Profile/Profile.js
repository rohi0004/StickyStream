import Navbar from "../Navbar";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const host = 'https://stickystream-backend.onrender.com/api/auth/getuser';

const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: '', email: '' });

    const fetchUser = async () => {
        try {
            const response = await fetch(host, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': window.localStorage.getItem('token'),
                },
            });
            const data = await response.json();
            setUser(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (window.localStorage.getItem('token')) {
            fetchUser();
        } else {
            navigate('/');
        }
    }, [navigate]);

    return (
        <>
            <div className="Rohit" style={{ backgroundColor: '#0A192F', color: '#CCD6F6', minHeight: '100vh', padding: '20px' }}>
                <Navbar />
                <div className="container py-4 my-4 d-flex justify-content-center">
                    <div className="row text-center mb-3">
                        <h1 style={{ color: '#64FFDA', fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>Your Profile</h1>
                        <div className="profile">
                            <div className="profilediv" style={{ backgroundColor: '#112240', border: '1px solid #233554', borderRadius: '10px', padding: '20px', width: '100%', maxWidth: '500px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}>
                                <p style={{ color: '#CCD6F6', fontSize: '18px', marginBottom: '15px' }}>Username : <span style={{ color: '#64FFDA', fontWeight: 'bold' }}>{user.name}</span></p>
                                <p style={{ color: '#CCD6F6', fontSize: '18px', marginBottom: '15px' }}>Email : <span style={{ color: '#64FFDA', fontWeight: 'bold' }}>{user.email}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;