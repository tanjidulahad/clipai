'use client'
import Header from '@/components/shared/Header';
import { usePathname } from 'next/navigation';
import React from 'react';

const Provider = ({ children }) => {
    const pathName = usePathname()
    const isShowHeader = ['/sign-in', '/sign-up'].includes(pathName)
    return (
        <div>
            {!isShowHeader && <div>
                <Header />
            </div>}

            <div>
                {children}
            </div>
            
        </div>
    );
};

export default Provider;