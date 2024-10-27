import React, { Children } from 'react';

const OptionSelector = ({title,subtitle,children}) => {
    return (
        <div className='mb-5'>
            <h2 className='text-2xl text-primary font-semibold'>{title}</h2>
            <p className='text-gray-500 my-2'>{subtitle}</p>
            {children}
        </div>
    );
};

export default OptionSelector;