import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ country }) => {
  return (
    <Link to={{ pathname: `/countryDetail/${country.alpha3Code}`, query: { 'obj': JSON.stringify(country) } }}>
      <div className='card'>
        <img className='card-img-top' src={country.flag} alt='Card image cap' />
        <div className='card-body d-flex'>
          <h5 className='card-title'>{country.name}</h5>
        </div>
      </div>
    </Link>
  )
}

export default Card
