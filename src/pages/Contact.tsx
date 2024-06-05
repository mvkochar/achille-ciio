import React from 'react'
import './css/Contact.css'
import Connect from '../components/Connect/Connect'

const Contact = () => {
    return (
        <>
            <main className='contact-main'>
                <h1 className="contact-main-title">Contact us</h1>
                <h4 className="contact-main-subtitle">
                    Get in touch with us, we're eager to assist you in experiencing the unique and cutting-edge.
                </h4>
                <div className="contact-main-action d-f jc-sb">
                    <div className="action-name">Support</div>
                    <a href="" className='action-link'>
                        <svg width="32" height="15" viewBox="0 0 32 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.5635 6.10396L24.7972 0.5L23.3607 1.89604L28.1082 6.5099H0V8.4901H28.1082L23.3607 13.104L24.7972 14.5L32 7.5L30.5635 6.10396Z" fill="white" />
                        </svg>
                    </a>
                </div>
            </main>
            <div className='contact-connect'>
                <Connect sectionNum='01' />
            </div>

        </>
    )
}

export default Contact