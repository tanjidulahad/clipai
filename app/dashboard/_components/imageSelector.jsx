'use client'
import Image from 'next/image';
import React, { useCallback, useState } from 'react';

const ImageSelector = ({title,onOptionChanged}) => {
    const [selectedImage,setSelectedImage]=useState("")
    const handleImageChange=useCallback((formate)=>{
        setSelectedImage(formate)
        onOptionChanged(title,formate)
    },[])

    return (
        <div className='mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5'>
            <div className='relative hover:scale-105 transition-transform duration-200'>
                <Image alt='realistic' src={'/realistic.avif'} width={140} height={200} className={`h-[200px] w-full object-cover rounded-md cursor-pointer ${selectedImage=="Realistic"&&"border-4 border-primary"}`} onClick={()=>handleImageChange("Realistic")}/>
                <h3 className='bg-black text-white absolute bottom-0 w-full text-center rounded-b-md'>Realistic</h3>
            </div>
            <div className='relative hover:scale-105 transition-transform duration-200'>
                <Image alt='cartoon' src={'/cartoon.avif'} width={140} height={200} className={`h-[200px] w-full object-cover rounded-md cursor-pointer ${selectedImage=="Cartoon"&&"border-4 border-primary"}`} onClick={()=>handleImageChange("Cartoon")}/>
                <h3 className='bg-black text-white absolute bottom-0 w-full text-center rounded-b-md'>Cartoon</h3>
            </div>
            <div className='relative hover:scale-105 transition-transform duration-200'>
                <Image alt='comic' src={'/comic.avif'} width={140} height={200} className={`h-[200px] w-full object-cover rounded-md cursor-pointer ${selectedImage=="Comic"&&"border-4 border-primary"}`} onClick={()=>handleImageChange("Comic")}/>
                <h3 className='bg-black text-white absolute bottom-0 w-full text-center rounded-b-md'>Comic</h3>
            </div>
            <div className='relative hover:scale-105 transition-transform duration-200'>
                <Image alt='watercolor' src={'/watercolor.avif'} width={140} height={200} className={`h-[200px] w-full object-cover rounded-md cursor-pointer ${selectedImage=="Watercolor"&&"border-4 border-primary"}`} onClick={()=>handleImageChange("Watercolor")}/>
                <h3 className='bg-black text-white absolute bottom-0 w-full text-center rounded-b-md'>Watercolor</h3>
            </div>
            <div className='relative hover:scale-105 transition-transform duration-200'>
                <Image alt='gta' src={'/gta.avif'} width={140} height={200} className={`h-[200px] w-full object-cover rounded-md cursor-pointer ${selectedImage=="GTA"&&"border-4 border-primary"}`} onClick={()=>handleImageChange("GTA")}/>
                <h3 className='bg-black text-white absolute bottom-0 w-full text-center rounded-b-md'>GTA</h3>
            </div>
        </div>
    );
};

export default ImageSelector;