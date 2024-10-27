import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const Page = () => {

    return (
        <div className='pt-20'>
            <div className='flex justify-between'>
                <h2 className='text-primary text-2xl font-bold'>Dashboard</h2>
                <Link href={"/dashboard/create-new"}>
                    <Button>+ Create New</Button>
                </Link>
            </div>
            <div className='flex justify-center mt-14'>
                <div className='text-center border-2 border-dashed flex flex-col gap-2 items-center w-full py-24'>
                    <p>You don't have any short video right now.</p>
                    <Link href={"/dashboard/create-new"}>
                        <Button className="">Create a new video</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Page;