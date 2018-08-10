import React from 'react';

const Card = ({ country }) => {

    return (
        <div className='card'>
            <img className='card-img-top' src={country.flag} alt='Card image cap' />
            <div className='card-body'>
                <h5 className='card-title'>{country.name}</h5>
                <a href='#' className='btn btn-primary'>Go somewhere</a>
            </div>
        </div>
    )
}

export default Card;