import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <header className='header d-f jc-sb'>
            <div className='d-f'>
                <div><img src="/images/logo.svg" alt="Logo" /></div>
                <nav>
                    <ul className="header-nav d-f">
                        <li className="header-nav-item"><a href="">Search</a></li>
                        <li className="header-nav-item"><a href="">Communities</a></li>
                        <li className="header-nav-item"><a href="">Quick Move-ins</a></li>
                        <li className="header-nav-item"><a href="">Open Houses</a></li>
                        <li className="header-nav-item"><a href="">About</a></li>
                    </ul>
                </nav>
            </div>
            <div className="header-info d-f">
                <div className="header-location">0 00 000 000 .CITY</div>
                <a href="" className="header-contact">Contact</a>
            </div>
        </header>
    )
}

export default Header