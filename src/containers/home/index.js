import React from 'react';
import 'babel-polyfill';

import Aside from '../../components/aside/';
import Main from '../../components/main/';

const api = 'https://restcountries.eu/rest/v2';

class Home extends React.Component {

  constructor(props) { //set initial state and component first time
    super(props);
    this.state = {
      items: [], //will => data from api
      isLoaded: false,
    }
  }

  async componentDidMount() {

    const res = await fetch(api);
    const items = await res.json();

    await setTimeout(() => {
      this.setState({
        items,
        isLoaded: true
      })
    }, 1000);


  }

  render() {

    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return (
        <div className="d-flex justify-content-center align-items-center">
          <div className="circle left rotate"><span></span></div>
          <div className="circle right rotate"><span></span></div>
        </div>
      );
    }

    else {
      return (
        <div className='row row--my row--mycont'>
          <div className=' offset-1 col-md-2 col-sm-2'>
            <aside>
              <Aside />
            </aside>
          </div>
          <div className='offset-1 col-md-7 col-sm-7'>
            <div className="container">
              <Main countries={items} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Home;