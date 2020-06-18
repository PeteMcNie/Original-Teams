import React from 'react'
import { Route, Link } from 'react-router-dom'

import Title from './Title'
import Homepagebuttons from './Homepagebuttons'
import Addplayers from './Addplayers'
import Createteams from './Createteams'

const App = () => {
    return (
      <div>
        <Route path='/Createteams' component={Createteams} />
        <Route path='/Addplayers' component={Addplayers} />
        <Route exact path='/' component={Title} />
        <Route exact path='/' component={Homepagebuttons} />
        

      </div>
    )
}

export default App
