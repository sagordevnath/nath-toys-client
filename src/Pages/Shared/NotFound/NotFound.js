import React from 'react';
import notfound from '../../../Images/notfound/notfound.gif'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notFound'>
            <img src={notfound} alt="" />
        </div>
    );
};

export default NotFound;