import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='d-flex justify-content-center'>
            <Link to='/'>
                <div className="logo"></div>
            </Link>
        </div>

    )
}

export default Header;