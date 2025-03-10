import React, { useContext, useEffect } from 'react';
import NoteContext from '../context/notes/NoteContext';
import { useNavigate } from 'react-router-dom';

export default function Noteitem(props) {
    const navigate = useNavigate();
    const context = useContext(NoteContext);
    const { deleteNotefun } = context;

    useEffect(() => {
        if (!window.localStorage.getItem('token')) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <>
            <div className="col-md-3">
                <div className="card my-3" style={{ background: 'linear-gradient(145deg, #112240, #0A192F)', border: '1px solid #233554', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
                    <div className="card-body" style={{ color: '#CCD6F6', padding: '20px' }}>
                        <h4 className="card-title" style={{ color: '#64FFDA', fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>{props.temp.title}</h4>
                        <p style={{ color: '#8892B0', fontSize: '14px', lineHeight: '1.6', opacity: '0.8' }}>{props.temp.description}</p>
                        <div>
                            <i
                                className="fas fa-trash-alt mx-2"
                                onClick={() => { deleteNotefun(props.temp._id) }}
                                style={{ color: '#64FFDA', cursor: 'pointer', transition: 'color 0.3s ease, transform 0.3s ease' }}
                            ></i>
                            <i
                                className="fas fa-edit mx-2"
                                onClick={() => { props.updatenote(props.temp) }}
                                style={{ color: '#64FFDA', cursor: 'pointer', transition: 'color 0.3s ease, transform 0.3s ease' }}
                            ></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}