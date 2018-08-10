import React from 'react';
import Countries from './countries/';

const Main = ({ countries }) => {
    return (
        <div className='row row--my'>
            <Countries countries = {countries} />
        </div>
    );
}

export default Main;