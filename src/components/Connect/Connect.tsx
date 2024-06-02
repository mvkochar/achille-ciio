import React from 'react'

const Connect = () => {
    return (
        <section className="home-connect d-f jc-sb">
            <div>
                <div className="d-f">
                    <div className="home-connect-num">(05)</div>
                    <div className="home-connect-above">Did we catch your eye?</div>
                </div>
                <h2 className="home-connect-title">
                    We enjoy connecting with new people. Reach out to us by filling out
                    the form, sending an email, or simply giving us a call.
                </h2>
                <div className="home-connect-contacts">Phone / Email</div>
                <div className="home-connect-address">
                    0 00 000 000 .CITY <br />
                    achille@ciio.com
                </div>
            </div>
            <form action="" className='home-connect-fm d-f'>
                <div>
                    <input type="text" name='connectFname' id='connectFname' placeholder='First name' />
                    <label htmlFor="connectFname">Hello, my first name is</label>
                    <input type="email" name='connectEmail' id='connectEmail' placeholder='example@gamil.com' />
                    <label htmlFor="connectEmail">Contact me at</label>
                    <select name="connectCommunity" id="connectCommunity">
                        <option value="0">Please Select</option>
                    </select>
                    <label htmlFor="connectCommunity">Community of interest</label>
                    <select name="client" id="client">
                        <option value="0">Please Select</option>
                    </select>
                    <label htmlFor="client">Are you working with an agent?</label>
                </div>
                <div>
                    <input type="text" name='connectLname' id='connectLname' placeholder='Last name' />
                    <label htmlFor="connectLname">Hello, my last name is</label>
                    <select name="connectLike" id="connectLike">
                        <option value="0">Please Select</option>
                    </select>
                    <label htmlFor="connectLike">I’d like to</label>
                    <input type="tel" name="" id="connectPhone" placeholder='0 00 000 000' />
                    <label htmlFor="connectPhone">Phone</label>
                    <select name="agent" id="agent">
                        <option value="0">Please Select</option>
                    </select>
                    <label htmlFor="agent">Are you an agent?</label>
                    <button type="button"><img src="/images/arrow-right.png" alt="arrow-right" /></button>
                </div>
            </form>
        </section>
    )
}

export default Connect