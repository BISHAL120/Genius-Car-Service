import React from 'react';
import Services from '../Services/Services';
import Experts from '../Experts/Experts';
import UncontrolledExample from '../Banner/UncontrolledExample';
import Header from '../../Shared/Header/Header';


const Home = () => {
    return (
        <div>
           <UncontrolledExample></UncontrolledExample>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;