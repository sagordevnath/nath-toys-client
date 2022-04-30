import React from 'react';
import loading from '../../../Images/loading/Loading.gif';

const Loading = () => {
    return (
        <div className='w-100'>
            <img src={loading} alt="" />
        </div>
    );
};

export default Loading;