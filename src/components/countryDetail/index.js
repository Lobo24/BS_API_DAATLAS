import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Provinces from "./provinces/";

class countryDetail extends React.Component {

  constructor(props) { //setea initial state and component first time
    super(props);
    this.state = {
      country: [], //data from api
      isLoaded: false,// isLoaded: false, //when items are loaded
    }
  }

  componentDidMount() {

    this.setState({
      country: JSON.parse(this.props.location.query.obj),
      isLoaded: true
    })
  }

  render() {

    var { isLoaded, country } = this.state;


    if (!isLoaded) {
      return (
        <div className="d-flex justify-content-center">
          <div className="lds-css ng-scope">
            <div className="lds-gear"><div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div></div>
        </div>
      );
    }
    else {
      return (
        <div>
          <div>
            <ul className="nav nav-pills mb-3" id="myTab" role="tablist">
              <li className="nav-item">
                <Link to='/' className="nav-link active">
                  Country
                </Link>
              </li>
              <li className="nav-item">
                <Link to={{ pathname: `/provinces/${country.name}`, state: country.provinces }} className="nav-link">
                  Provinces
                </Link>
              </li>
            </ul>

            <div className='container container--countryDetail'>
              <div className=" row cont--countryDetail">
                <div className="col-md-4 col-sm-4">
                  <h1 className='detail-text'>{country.name}</h1>
                  <div className="countryDetail-info">
                    <h3 className='detail-text'>Capital: {country.capital}</h3>
                    <h3 className='detail-text'>Region: {country.region}</h3>
                    <h3 className='detail-text'>Subregion: {country.subregion}</h3>
                    <h3 className='detail-text'>Native Name: {country.nativeName}</h3>
                    <h3 className='detail-text'>Area: {country.area} km²</h3>
                    <h3 className='detail-text'>Demonym: {country.demonym}</h3>
                  </div>
                </div>
                <div className="offset-1 col-md-7 col-sm-7">
                  <div>
                    <img className='countryDetail-flag' src={country.flag} alt={country.name + "'s flag"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default countryDetail;