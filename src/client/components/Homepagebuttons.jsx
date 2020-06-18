import React from 'react'
import { Link } from 'react-router-dom'

const Homepagebuttons = () => {
    return (
        <div>
            <div>
                <Link to={`/Createteams`}>Create Teams</Link>
            </div>
            <div>
                <Link to={`/addplayers`}>Add players</Link>
            </div>     
        </div>
    )
}

export default Homepagebuttons