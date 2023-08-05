import React from 'react';
import sleeping from '../../../images/Sleeping/sleeping.jpg'

const NotFound = () => {
    return (
        <div>
            <h1>Mechanic Is Sleeping</h1>
            <img className='w-100' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;