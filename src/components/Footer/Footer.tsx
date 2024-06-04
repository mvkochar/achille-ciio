import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
      <div><Link to='/'><img src="/images/footer-logo.svg" alt="footer-logo" /></Link></div>
      <div className="footer-bar d-f">
        <ul className='footer-list'>
          <li className="footer-list-item"><a href="">Search</a></li>
          <li className="footer-list-item"><Link to="/communities">Communities</Link></li>
          <li className="footer-list-item"><Link to="/quick-move">Quick Move-ins</Link></li>
          <li className="footer-list-item"><Link to="/open-houses">Open Houses</Link></li>
        </ul>
        <ul className='footer-list'>
          <li className="footer-list-item"><Link to="/about">About</Link></li>
          <li className="footer-list-item"><Link to="/career">Careers</Link></li>
          <li className="footer-list-item"><a href="">Blog</a></li>
          <li className="footer-list-item"><a href="">Contact</a></li>
        </ul>
        <div>
          <div className="footer-bl-title">Follow us</div>
          <ul className='footer-list'>
            <li className="footer-list-item"><a href="">Instagram</a></li>
            <li className="footer-list-item"><a href="">Youtube</a></li>
            <li className="footer-list-item"><a href="">Facebook</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-bl-title">Let's Talk</div>
          <div className="footer-bl-address">1.866.744.CITY <br /> hello@builtbycw.com</div>
        </div>
      </div>
      <div className="footer-info">
        <div className="footer-sale">All for sale product is listed by Ciio</div>
        <div className="footer-rights d-f">
          <div>&copy;2022</div>
          <div>All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer