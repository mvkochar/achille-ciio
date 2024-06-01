import React from 'react'
import './CommunitiesItem.css'

type CommunitiesItemProps = {
    image: string
    isSale: boolean
}

const CommunitiesItem = ({ image, isSale }: CommunitiesItemProps) => {
    return (
        <div className='communities-item'>
            <div className="communities-item-main" style={{ background: `url(${image}) no-repeat` }}>
                <div className={isSale ? "communities-item-sale" : 'd-n'}>Model for sale</div>
            </div>
            <div className="communities-item-info d-f">
                <div>
                    <div className="info-bl-title">theBEVERLY</div>
                    <p className="info-bl-desc">Salt Lake City</p>
                </div>
                <div>
                    <div className="info-bl-title">Now Leasing</div>
                    <p className="info-bl-desc">Apartments / Starting From <br /> — $1,675+ Monthly</p>
                </div>
            </div>
        </div>
    )
}

export default CommunitiesItem