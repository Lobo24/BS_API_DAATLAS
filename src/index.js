import React, { Component } from 'react';
import 'babel-polyfill';
import ReactDOM from 'react-dom';



import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css';

import Header from './components/header/';
import Home from './containers/home/';

const api = 'https://restcountries.eu/rest/v2';

class App extends Component {


    constructor(props) { //setea initial state and component first time
        super(props);
        this.state = {
            items: [], //data from api
            isLoaded: false,// isLoaded: false, //when items are loaded
        }
    }

    async componentDidMount() { //metodo de componente, que hacer en cada cicle

        const res = await fetch(api);
        const items = await res.json();

        this.setState({
            items,
            isLoaded: true
        })
    }

    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        }

        else {
            return (
                <div className='container-fluid container-fluid--my'>
                    <Header />
                    <Home countries={this.state.items} />
                </div>
            )
        }
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));