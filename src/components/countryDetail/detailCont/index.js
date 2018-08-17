import React from "react";
import DetailInfo from "./detailInfo/";

const DetailCont = ({ country }) => {
  return (
    <div className='container container--countryDetail'>
      <div className=" row cont--countryDetail">
        <div className="col-md-4 col-sm-4">
          <DetailInfo country={country} />
        </div>
        <div className="offset-1 col-md-7 col-sm-7">
          <div>
            <img className='countryDetail-flag' src={country.flag} alt={country.name + "'s flag"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailCont;