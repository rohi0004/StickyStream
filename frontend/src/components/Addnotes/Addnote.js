import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import NoteContext from '../../context/notes/NoteContext';
import Navbar from '../Navbar';

function Addnote() {
    const navigate = useNavigate();
    
    // Redirect to home if no token is found
    useEffect(() => {
        if (!window.localStorage.getItem('token')) {
            navigate('/');
        }
    }, [navigate]);
    
    const context = useContext(NoteContext);
    const { AddNotefun } = context;

    const [note, setNote] = useState({ title: "", description: "" });

    const onChangeFun = (event) => {
        setNote({ ...note, [event.target.name]: event.target.value });
    };

    const onClickFun = (event) => {
        event.preventDefault();
        AddNotefun(note.title, note.description);
        setNote({ title: "", description: "" });
        navigate('/notes');
    };

    return (
        <>
            <Navbar />
            <div className="Rohit" style={{ backgroundColor: '#0A192F', color: '#CCD6F6', minHeight: '100vh', padding: '20px' }}>
                <div className="addNotes" style={{ maxWidth: '600px', margin: 'auto', padding: '20px', backgroundColor: '#112240', border: '1px solid #233554', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}>
                    <h1 style={{ color: '#64FFDA', fontSize: '28px', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>Add a Note</h1>
                    <form onSubmit={onClickFun}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label" style={{ color: '#64FFDA', fontSize: '16px', fontWeight: 'bold' }}>Title</label>
                            <input
                                type="text"
                                minLength="1"
                                value={note.title}
                                className="form-control fw-bold"
                                id="title"
                                name="title"
                                onChange={onChangeFun}
                                required
                                aria-describedby="emailHelp"
                                style={{ backgroundColor: '#0A192F', border: '1px solid #233554', color: '#CCD6F6', borderRadius: '5px', padding: '10px', marginBottom: '15px' }}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label" style={{ color: '#64FFDA', fontSize: '16px', fontWeight: 'bold' }}>Description</label>
                            <textarea
                                autoComplete="off"
                                rows={5}
                                minLength="1"
                                value={note.description}
                                className="form-control"
                                name="description"
                                id="description"
                                onChange={onChangeFun}
                                required
                                style={{ backgroundColor: '#0A192F', border: '1px solid #233554', color: '#CCD6F6', borderRadius: '5px', padding: '10px', marginBottom: '15px', resize: 'vertical' }}
                            />
                        </div>
                        <button type="submit" id='submitbtn' className="BTN" style={{ backgroundColor: '#64FFDA', color: '#0A192F', border: 'none', padding: '10px 20px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', transition: 'background-color 0.3s ease', width: '100%' }}>Add</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Addnote;