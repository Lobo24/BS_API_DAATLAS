import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/css/app.css'
import './assets/vendor/animate.css'

import Header from './components/header/'
import Home from './containers/home/'
import countryDetail from './components/countryDetail/'
import Comments from './containers/comments/'

class App extends React.Component {
  render() {
    return (
      <div className='container-fluid container-fluid--my'>
        <Header />
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/countryDetail/:name' component={countryDetail} />
            <Route exact path='/provinceComments/:province' component={Comments} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
