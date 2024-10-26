import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';

const Header = () => {
    return (
        <div className='p-3 px-5 shadow-md flex justify-between'>
            <div className='flex gap-2 items-center'>
                <Image src={"/logo.svg"} alt='logo' width={30} height={30}></Image>
                <h2 className='font-bold text-xl'>Clip <span className='text-primary'>AI.</span></h2>
            </div>
            <div>
                <Button >Dashboard</Button>
            </div>
        </div>
    );
};

export default Header;