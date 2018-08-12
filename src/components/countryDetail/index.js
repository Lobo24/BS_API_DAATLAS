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
        
        this.setState({
            country: JSON.parse(this.props.location.query.obj),
            isLoaded: true
        })
    }

    render() {

        var { isLoaded, country } = this.state;


        if (!isLoaded) {
            return <h1>Loading...</h1>
        }
        else {
            return (

                <div>
                    <h1>{country.name}</h1>
                    <h3>Capital: {country.capital}</h3>
                    <h3>Region: {country.region}</h3>
                    <h3>Subregion: {country.subregion}</h3>
                    <h3>Native Name: {country.nativeName}</h3>
                    <h3>Area: {country.area}</h3>
                    <h3>Demonym: {country.demonym}</h3>
                </div>
            )
        }
    }
}

export default countryDetail;