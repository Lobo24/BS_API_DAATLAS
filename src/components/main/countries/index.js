import React from 'react';
import Card from './card/';

class Countries extends React.Component {

  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  render() {
    let filteredCountries = this.props.countries.filter(
      (country) => {
        return country.name.toLowerCase().indexOf(this.state.search.toLocaleLowerCase()) !== -1;
      }
    );



    let size = 18;
    let items = filteredCountries.slice(0, size).map((country) => {
      return (
        <div key={country.alpha3Code}>
          <Card country={country} />
        </div>
      )
    })

    return (
      <div>
        <div className='d-flex justify-content-center'>
          <input type="text" className="form-control" value={this.state.search} onChange={this.updateSearch.bind(this)} placeholder="SEARCH" />
        </div>
        <div className='card-deck'>
          {items}
        </div>
      </div>
    )
  }
}

export default Countries;
