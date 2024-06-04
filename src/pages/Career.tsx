import React from 'react'
import './css/Career.css'

const Career = () => {
    return (
        <>
            <main className='career-main'>
                <h1 className="career-main-title">
                    Join the Ciio Crew and be a part of something bigger!
                </h1>
                <h4 className='career-main-subtitle'>Join us in automating businesses all over the world</h4>
            </main>
            <section className='career-content'>
                <div className="d-f jc-sb">
                    <div className='d-f'>
                        <div className="career-num">(01)</div>
                        <div className="career-content-above">Career</div>
                    </div>
                    <div className="career-action d-f">
                        <div className="career-action-title">Apply now</div>
                        <a href=''>
                            <svg width="32" height="15" viewBox="0 0 32 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_6049_935)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.5635 6.10396L24.7972 0.5L23.3607 1.89604L28.1082 6.5099H0V8.4901H28.1082L23.3607 13.104L24.7972 14.5L32 7.5L30.5635 6.10396Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_6049_935">
                                        <rect width="32" height="14" fill="white" transform="translate(0 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                </div>
                <h2 className="career-content-title">
                    At the core of our success lies our commitment to visionary land planning, innovative architecture,
                    and unparalleled project execution, delivering unrivaled value to all stakeholders.
                </h2>
                <div className="d-f jc-sb" style={{marginTop: "176px"}}>
                    <div className='d-f'>
                        <div className="career-num">(02)</div>
                        <div className="career-content-above">Career</div>
                    </div>
                    <div className="career-action d-f">
                        <div className="career-action-title">Apply now</div>
                        <a href=''>
                            <svg width="32" height="15" viewBox="0 0 32 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_6049_935)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.5635 6.10396L24.7972 0.5L23.3607 1.89604L28.1082 6.5099H0V8.4901H28.1082L23.3607 13.104L24.7972 14.5L32 7.5L30.5635 6.10396Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_6049_935">
                                        <rect width="32" height="14" fill="white" transform="translate(0 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                </div>
                <h2 className="career-content-title">
                    Building exceptional communities that drive superior returns and positively 
                    impact the wider society is the cornerstone of our work.
                </h2>
            </section>
        </>
    )
}

export default Career