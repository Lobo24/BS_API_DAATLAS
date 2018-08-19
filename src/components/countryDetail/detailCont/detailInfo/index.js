import React from 'react'

const DetailInfo = ({ country }) => {
  return (
    <div>
      <h1 className='detail-text'>{country.name}</h1>
      <div className='countryDetail-info'>
        <h3 className='detail-text'>Capital: {country.capital}</h3>
        <h3 className='detail-text'>Region: {country.region}</h3>
        <h3 className='detail-text'>Subregion: {country.subregion}</h3>
        <h3 className='detail-text'>Native Name: {country.nativeName}</h3>
        <h3 className='detail-text'>Area: {country.area} km²</h3>
        <h3 className='detail-text'>Demonym: {country.demonym}</h3>
      </div>
    </div>
  )
}

export default DetailInfo
