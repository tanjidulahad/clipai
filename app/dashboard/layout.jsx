import React from 'react';
import Sidebar from './_components/sidebar';

const Layout = ({ children }) => {
    return (
        <div>
            <div className=''>
                <div className='fixed w-64 hidden md:block'>
                <Sidebar />
                </div>
            <div className='md:ml-64 px-8 py-5'>
                {children}
            </div>
            </div>
        </div>
    );
};

export default Layout;