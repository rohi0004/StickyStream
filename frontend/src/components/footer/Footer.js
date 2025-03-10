import React from 'react';

export default function Footer() {
    return (
        <>
            <div className="container-fluid footer mx-0 py-5" style={{ backgroundColor: '#0A192F', color: '#CCD6F6', padding: '40px 0' }}>
                <div className="row mx-0">
                    {/* Social Media Section */}
                    <div className="col-md-4 mx-auto text-center mb-4">
                        <h3 className="text-uppercase" style={{ color: '#64FFDA', fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>Follow Me</h3>
                        <div className="mx-auto mb-2">
                            <samp>
                                <i
                                    onClick={() => { window.open('https://github.com/rohi0004', '_blank') }}
                                    className="bi bi-github mx-3 social-icon"
                                    style={{ fontSize: '30px', color: '#64FFDA', transition: 'color 0.3s ease, transform 0.3s ease', cursor: 'pointer' }}
                                ></i>
                            </samp>
                            <samp>
                                <i
                                    onClick={() => { window.open('https://www.instagram.com/_rohi0004', '_blank') }}
                                    className="bi bi-instagram mx-3 social-icon"
                                    style={{ fontSize: '30px', color: '#64FFDA', transition: 'color 0.3s ease, transform 0.3s ease', cursor: 'pointer' }}
                                ></i>
                            </samp>
                            <samp>
                                <i
                                    onClick={() => { window.open('https://www.linkedin.com/in/rohi0004', '_blank') }}
                                    className="bi bi-linkedin mx-3 social-icon"
                                    style={{ fontSize: '30px', color: '#64FFDA', transition: 'color 0.3s ease, transform 0.3s ease', cursor: 'pointer' }}
                                ></i>
                            </samp>
                        </div>
                    </div>

                    {/* StickyStream Info Section */}
                    <div className="col-md-4 mx-auto text-center mb-2">
                        <h3 className="text-uppercase" style={{ color: '#64FFDA', fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>Keep Notes on StickyStream</h3>
                        <p className="mt-2" style={{ color: '#8892B0', fontSize: '14px', lineHeight: '1.6' }}>
                            Disclaimer: This website is not for commercial purposes, the material and information contained on this website is for general purposes only.
                        </p>
                    </div>

                    {/* Contact Info Section */}
                    <div className="col-md-4 mx-auto text-center mb-2">
                        <h3 className="text-uppercase" style={{ color: '#64FFDA', fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>Contact Me</h3>
                        <div style={{ color: '#8892B0', fontSize: '14px', lineHeight: '1.6' }}>
                            <samp>Rohit Kumar</samp><br />
                            <samp>Gopalganj, Bihar</samp><br />
                            <samp>Phone: <a href="tel:7493073637" style={{ color: '#64FFDA', textDecoration: 'none', transition: 'color 0.3s ease' }}>7493073637</a></samp><br />
                            <samp>Email: <a href="mailto:sahrohitkumar10@gmail.com" style={{ color: '#64FFDA', textDecoration: 'none', transition: 'color 0.3s ease' }}>sahrohitkumar10@gmail.com</a></samp>
                        </div>
                    </div>

                    {/* Horizontal Line */}
                    <hr style={{ borderColor: '#233554', margin: '20px 0' }} />

                    {/* Copyright Section */}
                    <p className="text-center copyright" style={{ color: '#8892B0', fontSize: '14px', marginTop: '20px' }}>
                        Copyright &copy;2023-Rohit.info(rohi0004) | All rights reserved
                    </p>
                </div>
            </div>
        </>
    );
}