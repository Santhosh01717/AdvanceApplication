// Footer.js

import React from 'react';
import '../assets/Footer.css';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="contact-info">
                        <p>Email: info@example.com</p>
                        <p>Phone: +1234567890</p>
                    </div>
                    <div className="social-links">
                        <a href="https://www.facebook.com">Facebook</a>
                        <a href="https://www.twitter.com">Twitter</a>
                        <a href="https://www.instagram.com">Instagram</a>
                        {/* Add more social media links as needed */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p className="text-center">&copy; 2024 Event Management System. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
