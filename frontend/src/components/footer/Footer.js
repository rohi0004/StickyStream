import React from 'react'
import '../footer/footer.css'

export default function Footer()   {
    return (
        <>
            <div className="container-fluid footer mx-0">
                <div className="row mx-0">
                    <div className="col-md-4 mx-auto text-center mb-4">
                        <h3>Follow Me</h3>
                        <div className="mx-auto mb-2">
                            <samp><i onClick={() => { window.open('https://github.com/rohi0004', '_blank') }} className="bi bi-github mx-2" style={{ cursor: 'pointer', color: 'white', fontSize: '23px' }}></i></samp>
                            <samp><i onClick={() => { window.open('https://www.instagram.com/_rohi0004', '_blank') }} className="bi bi-instagram mx-2" style={{ cursor: 'pointer', color: 'white', fontSize: '23px' }}></i></samp>
                            <samp><i onClick={() => { window.open('www.linkedin.com/in/rohi0004', '_blank') }} className="bi bi-linkedin mx-2" style={{ cursor: 'pointer', color: 'white', fontSize: '23px' }}></i></samp>
                        </div>
                    </div>
                    <div className="col-md-4 mx-auto text-center mb-2">
                        <h3>Keep Notes on StickyStream </h3>
                        <p className="mt-2">Disclaimer: This website is not for commercial purpose, the material and information contained on this website is for general purposes only.</p>
                    </div>                    
                    <div className="col-md-4 mx-auto text-center mb-2">
                        <h3>Contact Me</h3>
                        <div>
                            <samp> Rohit kumar</samp><br />
                            <samp>Gopalganj, Bihar</samp><br />
                            <samp>Phone: 7493073637</samp><br />
                            <samp>Email: sahrohitkumar10@gmail.com</samp>
                        </div>
                    </div>
                    <hr />
                    <p className="copyright">Copyright ©2023-Rohit.info(rohi0004) | All rights reserved</p>
                </div>
            </div>
        </>
    )
}