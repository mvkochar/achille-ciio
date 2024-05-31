import React from 'react'
import './css/Home.css'

const Home = () => {
  return (
    <>
      <main className='home-main'>
        <div className="home-main-above">Building what's next in the heart of Utah</div>
        <h1 className="home-main-title">Find your favorite place</h1>
        <form action="" className='home-main-fm d-f'>
          <select name="community">
            <option value="0">Community</option>
          </select>
          <select name="city">
            <option value="0">City</option>
          </select>
          <select name="type">
            <option value="0">Type</option>
          </select>
          <button type='button'><img src="/images/search.png" alt="search" /></button>
        </form>
      </main>
      <section className='home-about'>
        <div className="d-f jc-sb align-center">
          <div className='d-f'>
            <div className='home-about-num'>(01)</div>
            <div className="home-about-above">About us</div>
          </div>
          <div className="about-link-wr d-f">
            <div className="about-link-title">Get to know us</div>
            <a href="" className="about-link"><img src="/images/arrow-right.png" alt="arrow-right" /></a>
          </div>
        </div>
        <h2 className="home-about-title">AChille Ciio is leading the way in creating unique real estate for Utah residents.</h2>
      </section>
      <section className='home-latest'>
        <div className="d-f">
          <div className="home-latest-num">(02)</div>
          <div className="home-latest-above">Latest Projects</div>
          <div className="home-latest-about">Featured Communities <br /> Ciio. Properties </div>
        </div>
        <div className="home-latest-media"><img src="/images/home-latest.png" alt="home-latest" /></div>
        <div className="home-latest-info d-f">
          <div>
            <div>Affordable Units Starting</div>
            <div className="home-latest-price">From $186,000</div>
          </div>
          <div>555 North 400 West <br /> Centerville, Utah 84014</div>
          <div>50 Modern Townhomes <br /> Now Selling</div>
        </div>
      </section>
      <section className='home-looking'>
        <div className="d-f">
          <div className="home-looking-num">(03)</div>
          <div className="home-looking-above">I'm looking for:</div>
        </div>
        <div className="home-looking-caption d-f jc-sb align-center">
          <h2 className="home-looking-title">Apartments</h2>
          <button className='home-looking-btn'><img src="/images/arrow-down.png" alt="arrow-down" /></button>
        </div>
        <div className="home-looking-box d-f jc-sb">
          <div className="home-looking-item">
            <div><img src="/images/apartment1.png" alt="apartment1" /></div>
            <div className="looking-item-info d-f">
              <div>
                <div className="info-title">theBEVERLY</div>
                <p className="info-desc"> Salt Lake City</p>
              </div>
              <div>
                <div className="info-title">Now Leasing</div>
                <p className="info-desc">Apartments / Starting From — $1,675+ Monthly</p>
              </div>
            </div>
          </div>
          <div className="home-looking-item">
            <div><img src="/images/apartment2.png" alt="apartment2" /></div>
            <div className="looking-item-info d-f">
              <div>
                <div className="info-title">theBEVERLY</div>
                <p className="info-desc"> Salt Lake City</p>
              </div>
              <div>
                <div className="info-title">Now Leasing</div>
                <p className="info-desc">Apartments / Starting From — $1,675+ Monthly</p>
              </div>
            </div>
          </div>
          <div className="home-looking-item">
            <div><img src="/images/apartment2.png" alt="apartment2" /></div>
            <div className="looking-item-info d-f">
              <div>
                <div className="info-title">theBEVERLY</div>
                <p className="info-desc"> Salt Lake City</p>
              </div>
              <div>
                <div className="info-title">Now Leasing</div>
                <p className="info-desc">Apartments / Starting From — $1,675+ Monthly</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-community'>
        <div className="d-f jc-sb">
          <div className="d-f">
            <div className="home-community-num">(04)</div>
            <div className="home-community-above">We build community.</div>
          </div>
          <div className="home-community-about">Wherever we build, <br /> we make it better.</div>
          <div className="about-link-wr d-f">
            <div className="about-link-title">About us</div>
            <a href="" className="about-link"><img src="/images/arrow-right.png" alt="arrow-right" /></a>
          </div>
        </div>
        <div className="home-community-box d-f jc-sb align-center">
          <div><img src="/images/community.png" alt="community" /></div>
          <p className="home-community-desc">
            Our aim is to build micro-communities that enrich and fortify local areas,
            turning every space into an opportunity through well-planned land use and design,
            fostering exploration and growth with a positive impact on existing communities.
          </p>
        </div>
      </section>
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
    </>
  )
}

export default Home