import React from 'react';

class Countries extends React.Component {

    render() {
        return (
            <ul className='non-list-style'>
                <li><button type='button' className='btn btn-link whity-text'>Africa</button></li>
                <li><button type='button' className='btn btn-link whity-text'>America</button></li>
                <li><button type='button' className='btn btn-link whity-text'>Asia</button></li>
                <li><button type='button' className='btn btn-link whity-text'>Europa</button></li>
                <li><button type='button' className='btn btn-link whity-text'>Oceania</button></li>
            </ul>
        )
    }
}

export default Countries;