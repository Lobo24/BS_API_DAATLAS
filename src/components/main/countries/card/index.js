import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ country }) => {

    return (
        <div className='card'>
            <img className='card-img-top' src={country.flag} alt='Card image cap' />
            <div className='card-body d-flex'>
                <h5 className='card-title'><Link to={{pathname: `/countryDetail/${country.alpha3Code}`, query:{'obj': JSON.stringify(country)}}}>{country.name}</Link></h5>
            </div>
        </div>
    )
}

export default Card;