import React from 'react';
import Card from './card/';

class Countries extends React.Component {

    render() {
        var size = 9;
        var items = this.props.countries.slice(0, size).map((country) => {
            return (
                <div className='card-cont' key={country.alpha3Code}>
                    <Card country={country} />
                </div>
            )
        })

        return (
            <div className=''>
                {items}
            </div>
        )
    }
}

export default Countries;
