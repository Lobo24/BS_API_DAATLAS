import React from 'react';
import 'babel-polyfill';

import Aside from '../../components/aside/';
import Main from '../../components/main/';

//const api = 'https://restcountries.eu/rest/v2';
const api = 'http://localhost:3000/countries';

class Home extends React.Component {

  constructor(props) { //set initial state and component first time
    super(props);
    this.state = {
      countries: [],
      isLoaded: false,
      error: null
    }
  }

  async componentDidMount() {

    try {
      const response = await fetch(api)
      const data = await response.json()

      this.setState({
        countries: data,
        isLoaded: true
      })
    } catch (error) {
      this.setState({
        error,
      })
    }
  }

  render() {

    var { isLoaded, countries, error } = this.state;
    return (
      isLoaded ? <div className='row row--my row--mycont'>
        <div className=' offset-1 col-md-2 col-sm-2'>
          <aside>
            <Aside />
          </aside>
        </div>
        <div className='offset-1 col-md-7 col-sm-7'>
          <div className="container">
            <Main countries={countries} />
          </div>
        </div>
      </div>
        : error ? <p>Error...</p>
          : <div className="d-flex justify-content-center">
            <div className="lds-css ng-scope">
              <div className="lds-gear"><div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div></div>
          </div>
    )

    /* if (!isLoaded) {
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
     }*/
  }
}

export default Home;