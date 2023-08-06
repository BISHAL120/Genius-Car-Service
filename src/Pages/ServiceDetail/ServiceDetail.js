import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceid } = useParams();
    return (
        <div>
            <h1>This is Service DetailL: {serviceid}</h1>
            <div className=''>
                <Link to="/checkout">
                    <button className='btn btn-primary text-center'>Please ckekout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;