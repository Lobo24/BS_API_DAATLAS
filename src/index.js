import React, { Component } from 'react';
import 'babel-polyfill';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';



import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css';

import Header from './components/header/';
import Home from './containers/home/';
import countryDetail from './components/countryDetail/'

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className='container-fluid container-fluid--my'>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/countryDetail/:name' component={countryDetail} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));