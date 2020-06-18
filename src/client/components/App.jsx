import React from 'react'
import { Route } from 'react-router-dom'

import Title from './Title'
import Homepagebuttons from './Homepagebuttons'

const App = () => {
    return (
      <div>
        <Route path='/' component={Title} />
        <Route path='/' component={Homepagebuttons} />
      </div>
    )
}

export default App
