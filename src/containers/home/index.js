import React from 'react';

import Aside from '../../components/aside/';
import Main from '../../components/main/';

const Home = ({ countries }) => {
    return (
        <div className='row row--my row--mycont'>
            <div className='col-md-3 col-sm-3'>
                <aside>
                    <Aside />
                </aside>
            </div>
            <div className='col-md-8 col-sm-8'>
                <Main countries = {countries}/>
            </div>
        </div>
    );
}

export default Home;