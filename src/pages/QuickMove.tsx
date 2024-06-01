import React from 'react'
import './css/QuickMove.css'

const QuickMove = () => {
    return (
        <>
            <main className='quick-main d-f align-center'>
                <div>
                    <h1 className="quick-main-title">Al is eager and ready <br /> to move in.</h1>
                    <p className="quick-main-desc">
                        Enjoy the benefits of new construction without the delay by exploring our 
                        available quick move-in homes below.
                    </p>
                </div>
                <form action="" className='quick-main-fm'>
                    <select name="sort" id="sort">
                        <option value="0">Any</option>
                    </select>
                    <label htmlFor="sort">Sort by</label>
                </form>
            </main>
        </>
    )
}

export default QuickMove