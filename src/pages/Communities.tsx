import React from 'react'
import './css/Communities.css'
import CommunitiesList from '../components/CommunitiesList/CommunitiesList'
import CommunitiesItem from '../components/CommunitiesItem/CommunitiesItem'

const Communities = () => {
  return (
    <>
        <main className='communities-main d-f'>
            <div style={{flexShrink: 0}}>
                <div className="d-f align-center">
                    <div className="home-about-num">(01)</div>
                    <div className="home-about-above">Details</div>
                </div>
                <h1 className="communities-main-title">Our community details</h1>
            </div>
            <form action="" className="communities-main-fm d-f align-center">
                <div>
                    <select name="communityName" id="communityName">
                        <option value="0">Any</option>
                    </select>
                    <label htmlFor="communityName">Community name</label>
                </div>
                <div>
                    <select name="communityFilter" id="communityFilter">
                        <option value="0">Any</option>
                    </select>
                    <label htmlFor="communityFilter">Filter by</label>
                </div>
            </form>    
        </main>
        <div className="communities-content d-f jc-sb">
            {
                CommunitiesList.map((community) => {
                    return (
                        <CommunitiesItem
                            image={community.image}
                            isSale={community.isSale}
                        />
                    )
                })
            }
        </div>
    </>
  )
}

export default Communities