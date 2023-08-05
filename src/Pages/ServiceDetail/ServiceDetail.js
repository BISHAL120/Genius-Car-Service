import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceid} = useParams();
    return (
        <div>
            <h1>This is Service DetailL: {serviceid}</h1>
        </div>
    );
};

export default ServiceDetail;