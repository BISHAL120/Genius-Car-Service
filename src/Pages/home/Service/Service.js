import React from 'react';
import './Service.css';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {id, name, img, description, price} = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h5>Price :{price}</h5>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>Book : {name    }</button>

        </div>
    );
};

export default Service;