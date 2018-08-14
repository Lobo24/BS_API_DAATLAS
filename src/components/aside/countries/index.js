import React from 'react';
import { Link } from 'react-router-dom';

class Countries extends React.Component {

    render() {
        return (
            <ul className='non-list-style'>
                <li className='aside-options'><Link className='whity-text' to='/'>Africa</Link></li>
                <li className='aside-options'><Link className='whity-text' to='/'>America</Link></li>
                <li className='aside-options'><Link className='whity-text' to='/'>Asia</Link></li>
                <li className='aside-options'><Link className='whity-text' to='/'>Europa</Link></li>
                <li className='aside-options'><Link className='whity-text' to='/'>Oceania</Link></li>
            </ul>
        )
    }
}

export default Countries;