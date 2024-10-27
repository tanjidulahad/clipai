import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';

const Header = () => {
    return (
        <div className={`px-5 flex justify-between backdrop-blur-sm bg-white/30 fixed w-full top-0 transition-all shadow-sm duration-300 p-3`}>
            <Link href={'/'} >
            <div className='flex gap-2 items-center'>
                <Image src={"/logo.svg"} alt='logo' width={30} height={30}></Image>
                <h2 className='font-bold text-xl'>Clip <span className='text-primary'>AI.</span></h2>
            </div>
            </Link>
            <div className='flex items-center gap-3'>
                <Link href={"/dashboard"}>
                <Button >Dashboard</Button>
                </Link>
                <UserButton />
            </div>
        </div>
    );
};

export default Header;