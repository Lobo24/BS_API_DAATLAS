import React, { Component } from 'react';
import 'babel-polyfill';
import ReactDOM from 'react-dom';



import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css';

import Header from './components/header/';
import Home from './containers/home/';

const api = 'https://restcountries.eu/rest/v2';

class App extends Component {

    render() {
        return (
            <div className='container-fluid container-fluid--my'>
                <Header />
                <Home />
            </div>
        )
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));