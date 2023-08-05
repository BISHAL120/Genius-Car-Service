


import React from 'react';

import expert1 from '../../../images/Experts/expert-1.jpg';
import expert2 from '../../../images/Experts/expert-2.jpg';
import expert3 from '../../../images/Experts/expert-3.jpg';
import expert4 from '../../../images/Experts/expert-4.jpg';
import expert5 from '../../../images/Experts/expert-5.jpg';
import expert6 from '../../../images/Experts/expert-6.png';
import Expert from '../Expert/Expert';

const experts = [
    { id: 1, name: 'will smith', img: expert1 },
    { id: 2, name: 'krich rock', img: expert2 },
    { id: 3, name: 'dwain rock', img: expert3 },
    { id: 4, name: 'leoan messi', img: expert4 },
    { id: 5, name: 'rolando kaka', img: expert5 },
    { id: 6, name: 'naimar khura', img: expert6 },
]

const Experts = () => {
    return (
        <div id='experts' className='container'>
            <div className="row">
                <h1 className='text-primary mt-5'>Our Experts</h1>
                <div className="row m-3">
                    {
                        experts.map(expert => <Expert
                            key={expert.id}
                            expert={expert}
                        ></Expert>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Experts;