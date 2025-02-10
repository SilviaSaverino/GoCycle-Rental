import React from "react"
import "./Footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="terms">
                    <p>&#169; 2024 GoCycle Rental. All rights reserved.</p>
                    <p>
                        <a href="#">Terms & Conditions</a> |
                        <a href="#"> Privacy Policy</a>
                    </p>
                </div>
                <div className="contact-footer">
                    <p>
                        Contact us:</p>
                    <p>
                        <a href="mailto:info@gocyclerental.com">info@gocyclerental.com</a> |
                        📞 123-456-7890
                    </p>

                </div>
                <div className="social">
                    <p>Follow us:</p>
                    <p> <a href="#" target="_blank">Facebook</a>|
                        <a href="#" target="_blank">Instagram</a>|
                        <a href="#" target="_blank">Twitter</a>
                    </p>

                </div>
            </div>
        </footer>
    )
}




