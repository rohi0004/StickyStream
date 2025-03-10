import React from 'react';
import Noteitem from './Noteitem';
import { useContext, useEffect, useRef, useState } from 'react';
import NoteContext from '../context/notes/NoteContext';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, getAllnotes, editNotefun } = context;

    const navigate = useNavigate();

    // Check if token is stored in localStorage, then fetch all notes corresponding to that user, else redirect to login page
    useEffect(() => {
        if (window.localStorage.getItem('token')) {
            getAllnotes();
        } else {
            navigate('/');
        }
    }, [getAllnotes, navigate]);

    // For editing a note
    const [note, setNote] = useState({ _id: "", title: "", description: "" });
    const refOpen = useRef(null);
    const updateNote = (currentNote) => {
        refOpen.current.click();
        setNote(currentNote);
    };

    const onChangeFun = (event) => {
        setNote({ ...note, [event.target.name]: event.target.value });
    };

    const refClose = useRef(null);
    const onClickFun = (event) => {
        event.preventDefault();
        editNotefun(note._id, note.title, note.description);
        refClose.current.click();
    };

    // For searching notes
    const [query, setQuery] = useState("");
    const [queryNotes, setQueryNotes] = useState([]);
    useEffect(() => {
        setQueryNotes(notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase())));
    }, [query, notes]);

    return (
        <>
            <Navbar />
            <div className="Rohit" style={{ backgroundColor: '#0A192F', color: '#CCD6F6', minHeight: '100vh', padding: '20px' }}>
                {/* Modal for editing notes */}
                <button ref={refOpen} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{ backgroundColor: '#112240', border: '1px solid #233554', borderRadius: '10px' }}>
                            <div className="modal-header" style={{ borderBottom: '1px solid #233554' }}>
                                <h5 className="modal-title" id="exampleModalLabel" style={{ color: '#64FFDA', fontSize: '20px', fontWeight: 'bold' }}>Edit Note</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={onClickFun} className="my-3">
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label" style={{ color: '#64FFDA', fontSize: '14px', fontWeight: 'bold' }}>Title</label>
                                        <input
                                            minLength="1"
                                            type="text"
                                            value={note.title}
                                            className="form-control"
                                            id="title"
                                            name="title"
                                            onChange={onChangeFun}
                                            required
                                            style={{ backgroundColor: '#0A192F', border: '1px solid #233554', color: '#CCD6F6', borderRadius: '5px', padding: '10px', marginBottom: '15px' }}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="desc" className="form-label" style={{ color: '#64FFDA', fontSize: '14px', fontWeight: 'bold' }}>Description</label>
                                        <input
                                            minLength="1"
                                            type="text"
                                            value={note.description}
                                            className="form-control"
                                            name="description"
                                            id="description"
                                            onChange={onChangeFun}
                                            required
                                            style={{ backgroundColor: '#0A192F', border: '1px solid #233554', color: '#CCD6F6', borderRadius: '5px', padding: '10px', marginBottom: '15px' }}
                                        />
                                    </div>
                                    <div className="modal-footer" style={{ borderTop: '1px solid #233554' }}>
                                        <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal" style={{ backgroundColor: '#233554', color: '#CCD6F6', border: 'none' }}>Close</button>
                                        <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#64FFDA', color: '#0A192F', border: 'none' }}>Update Note</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container py-4 my-4">
                    <div className="row text-center mb-3">
                        <h1 style={{ color: '#64FFDA', fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>Your Notes</h1>
                    </div>
                    <div className="row mb-4 searchbar">
                        {notes.length > 0 ? (
                            <input
                                type="text"
                                placeholder="Search by Title"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                style={{ width: '100%', maxWidth: '400px', padding: '10px', border: '1px solid #233554', borderRadius: '5px', backgroundColor: '#112240', color: '#CCD6F6', fontSize: '16px', marginBottom: '20px' }}
                            />
                        ) : (
                            <h3 style={{ textAlign: 'center', color: '#CCD6F6' }}>No notes to display</h3>
                        )}
                    </div>
                    <div className="col-mt-3 text-center">
                        {localStorage.getItem('token') ? (
                            <button className="BTN text-center" onClick={() => navigate('/addnotes')} style={{ backgroundColor: '#64FFDA', color: '#0A192F', border: 'none', padding: '10px 20px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', transition: 'background-color 0.3s ease', marginBottom: '20px' }}>Add New Notes</button>
                        ) : (
                            <button className="BTN text-center" onClick={() => navigate('/login')} style={{ backgroundColor: '#64FFDA', color: '#0A192F', border: 'none', padding: '10px 20px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', transition: 'background-color 0.3s ease', marginBottom: '20px' }}>Login</button>
                        )}
                    </div>
                    <div className="row my-2 p-2">
                        {(notes.length > 0 && query === "") ? notes.map((note) => <Noteitem key={note._id} temp={note} updatenote={updateNote} />) : ''}
                        {(queryNotes.length > 0 && query !== "") ? queryNotes.map((item) => <Noteitem key={item._id} temp={item} updatenote={updateNote} />) : ''}
                        {(query !== "" && queryNotes.length === 0) ? <h3 className="mt-4" style={{ textAlign: 'center', color: '#CCD6F6' }}>No matching notes</h3> : ''}
                    </div>
                </div>
            </div>
           
        </>
    );
};

export default Notes;