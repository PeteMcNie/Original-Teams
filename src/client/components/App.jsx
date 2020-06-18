import React from 'react'
import { Route } from 'react-router-dom'

import Title from './Title'

const App = () => {
    return (
      <div>
        <h1>React-Teams</h1>
        <Route path='/' component={Title} />
      </div>
    )
}

export default App
