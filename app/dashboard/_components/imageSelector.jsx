import Image from 'next/image';
import React from 'react';

const ImageSelector = () => {
    return (
        <div className='mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5'>
            <div className='relative hover:scale-105 transition-transform duration-200'>
                <Image src={'/realistic.avif'} width={140} height={200} className='h-[200px] w-full object-cover rounded-md cursor-pointer' />
                <h3 className='bg-black text-white absolute bottom-0 w-full text-center rounded-b-md'>Realistic</h3>
            </div>
            <div className='relative hover:scale-105 transition-transform duration-200'>
                <Image src={'/cartoon.avif'} width={140} height={200} className='h-[200px] w-full object-cover rounded-md cursor-pointer' />
                <h3 className='bg-black text-white absolute bottom-0 w-full text-center rounded-b-md'>Realistic</h3>
            </div>
            <div className='relative hover:scale-105 transition-transform duration-200'>
                <Image src={'/comic.avif'} width={140} height={200} className='h-[200px] w-full object-cover rounded-md cursor-pointer' />
                <h3 className='bg-black text-white absolute bottom-0 w-full text-center rounded-b-md'>Realistic</h3>
            </div>
            <div className='relative hover:scale-105 transition-transform duration-200'>
                <Image src={'/watercolor.avif'} width={140} height={200} className='h-[200px] w-full object-cover rounded-md cursor-pointer' />
                <h3 className='bg-black text-white absolute bottom-0 w-full text-center rounded-b-md'>Realistic</h3>
            </div>
            <div className='relative hover:scale-105 transition-transform duration-200'>
                <Image src={'/gta.avif'} width={140} height={200} className='h-[200px] w-full object-cover rounded-md cursor-pointer' />
                <h3 className='bg-black text-white absolute bottom-0 w-full text-center rounded-b-md'>Realistic</h3>
            </div>
        </div>
    );
};

export default ImageSelector;