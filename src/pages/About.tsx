import React from 'react'
import './css/About.css'

const About = () => {
    return (
        <>
            <main className='about-main d-f'>
                <div className="about-num">(01)</div>
                <h1 className="about-main-title">
                    At Achille Ciio, we're paving the path for exceptional real estate in Utah.
                    As a design, build, and development company, our aim is to craft communities
                    that enrich, fortify, and add to the overall fabric of neighboring areas.
                </h1>
            </main>
            <section className='about-advantages'>
                <div className="d-f">
                    <div className="about-num">(02)</div>
                    <h2 className="about-advantages-title">Process Makes <br /> perfect</h2>
                </div>
                <div className="about-advantages-box d-f">
                    <div className="about-advantages-item">
                        <div className="advantage-caption d-f">
                            <div className="advantage-num">01</div>
                            <div className="advantage-name">/ Gather Talent.</div>
                        </div>
                        <p className="advantage-desc">
                            At the outset, we search for the crème de la crème. Our communities
                            are conceptualized and developed by a combination of established and
                            rising talent who are driven, modest, and astute. They recognize that
                            this is not just a temporary project, but a progression.
                        </p>
                    </div>
                    <div className="about-advantages-item">
                        <div className="advantage-caption d-f">
                            <div className="advantage-num">02</div>
                            <div className="advantage-name">/ Gather Talent.</div>
                        </div>
                        <p className="advantage-desc">
                            We discern potential in the underutilized areas of thriving neighborhoods.
                            Then, through judicious land planning, we devise a blueprint that will generate
                            beneficial outcomes, intelligent expansion, and advancement in these regions.
                        </p>
                    </div>
                    <div className="about-advantages-item">
                        <div className="advantage-caption d-f">
                            <div className="advantage-num">03</div>
                            <div className="advantage-name">/ Gather Talent.</div>
                        </div>
                        <p className="advantage-desc">
                            Our talented in-house design team constitutes one of our major strengths.
                            With meticulous attention to detail and strategic utilization of texture,
                            flow, form, and finishes, they assist us in constructing breathtaking
                            pieces of architecture that become the dwelling our clients call home.
                        </p>
                    </div>
                    <div className="about-advantages-item">
                        <div className="advantage-caption d-f">
                            <div className="advantage-num">04</div>
                            <div className="advantage-name">/ Gather Talent.</div>
                        </div>
                        <p className="advantage-desc">
                            Our in-house builders carry out every community design with an emphasis on quality and sustainability.
                        </p>
                    </div>
                </div>
                <div><img src="/images/about-advantages.png" alt="about-advantages" /></div>
            </section>
        </>
    )
}

export default About