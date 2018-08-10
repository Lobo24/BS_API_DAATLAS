import React from 'react';
import Countries from './countries/';

const Main = ({ countries }) => {
    return (
        <div>
            <Countries countries = {countries} />
        </div>
    );
}

export default Main;