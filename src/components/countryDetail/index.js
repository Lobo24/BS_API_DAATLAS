import React from 'react';

class countryDetail extends React.Component {

  constructor(props) { //setea initial state and component first time
    super(props);
    this.state = {
      country: [], //data from api
      isLoaded: false,// isLoaded: false, //when items are loaded
    }
  }

  componentDidMount() {

    setTimeout(() => {
      this.setState({
        country: JSON.parse(this.props.location.query.obj),
        isLoaded: true
      })
    }, 1000);
  }

  render() {

    var { isLoaded, country } = this.state;


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

        <div className='container'>
          <h1>{country.name}</h1>
          <h3>Capital: {country.capital}</h3>
          <h3>Region: {country.region}</h3>
          <h3>Subregion: {country.subregion}</h3>
          <h3>Native Name: {country.nativeName}</h3>
          <h3>Area: {country.area} km²</h3>
          <h3>Demonym: {country.demonym}</h3>
        </div>
      )
    }
  }
}

export default countryDetail;