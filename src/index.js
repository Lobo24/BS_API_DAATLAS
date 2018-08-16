import React, { Component } from 'react';
import 'babel-polyfill';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux/store'

import { createStore, applyMiddleware } from 'redux'

import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css';

import Header from './components/header/';
import Home from './containers/home/';
import countryDetail from './components/countryDetail/'
import Provinces from './components/countryDetail/provinces/';

class App extends Component {

    render() {
        return (
            <Provider store={store} >
                <BrowserRouter>
                    <div className='container-fluid container-fluid--my'>
                        <Header />
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/countryDetail/:name' component={countryDetail} />
                            <Route exact path='/provinces/:name' component={Provinces} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));