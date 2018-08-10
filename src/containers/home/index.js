import React from 'react';
import 'babel-polyfill';

import Aside from '../../components/aside/';
import Main from '../../components/main/';

const api = 'https://restcountries.eu/rest/v2';

class Home extends React.Component {

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
                <div className='row row--my row--mycont'>
                    <div className='col-md-3 col-sm-3'>
                        <aside>
                            <Aside />
                        </aside>
                    </div>
                    <div className='offset-1 col-md-8 col-sm-8'>
                        <Main countries={this.state.items} />
                    </div>
                </div>
            );
        }
    }
}

export default Home;