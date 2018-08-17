import React from "react";
import { Switch, Route, Link } from 'react-router-dom';


const DetailMenu = ({ country }) => {
  return (
    <div className='container'>
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
    </div>
  )
}

export default DetailMenu;