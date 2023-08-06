import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{height: '400px'}} className='w-50 d-flex justify-contain-center align-items-center'>   
             <Spinner animation="border" variant="primary" />    
        </div>
    );
};

export default Loading;