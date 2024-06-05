import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header d-f jc-sb'>
            <div className='d-f'>
                <div> <Link to='/'><img src="/images/logo.svg" alt="Logo" /></Link></div>
                <nav>
                    <ul className="header-nav d-f">
                        <li className="header-nav-item"><Link to="/communities">Communities</Link></li>
                        <li className="header-nav-item"><Link to="/quick-move">Quick Move-ins</Link></li>
                        <li className="header-nav-item"><Link to="/open-houses">Open Houses</Link></li>
                        <li className="header-nav-item"><Link to="/about">About</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="header-info d-f">
                <div className="header-location">0 00 000 000 .CITY</div>
                <Link to="/contact" className="header-contact">Contact</Link>
            </div>
        </header>
    )
}

export default Header