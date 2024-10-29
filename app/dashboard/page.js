'use client'
import { Button } from '@/components/ui/button';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ContetnCard from './_components/contentCard';
import ContentDetails from './_components/contentDetails';
import SkeletonLoader from './_components/skelitonLoader';
import { toast } from '@/hooks/use-toast';

const Page = () => {
    const [contents, setContents] = useState([])
    const [currentContent,setCurrentContent]=useState({})
    const [isContentFetchin,setIsContentFetching]=useState(false)

    useEffect(() => {
        getContent()
    }, [])

    const getContent = async () => {
        setIsContentFetching(true)
        axios.get("/api/get-content")
            .then(res => {
                setContents(res?.data?.data)
                setIsContentFetching(false)
            }).catch(e=>{
                toast({
                    variant: "destructive",
                    title: "Uh oh!",
                    description: "Something went wrong",
                  })
            })
    }

    return (
        <div className='pt-20'>
            <div className='flex justify-between'>
                <h2 className='text-primary text-2xl font-bold'>Dashboard</h2>
                <Link href={"/dashboard/create-new"}>
                    <Button>+ Create New</Button>
                </Link>
            </div>
            {
                contents.length > 0 ?
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4 gap-3'>
                        {
                            contents.map((item, idx) => (
                                <div key={idx} className='col-span-1'>

                                    <ContetnCard data={item} setCurrentContent={setCurrentContent}/>
                                </div>

                            ))
                        }
                    </div>
                    :
                    isContentFetchin?<SkeletonLoader/>:
                    <div className='flex justify-center mt-14'>
                        <div className='text-center border-2 border-dashed flex flex-col gap-2 items-center w-full py-24'>
                            <p>You don't have any short video right now.</p>
                            <Link href={"/dashboard/create-new"}>
                                <Button className="">Create a new video</Button>
                            </Link>
                        </div>
                    </div>
            }

            {/* {Object.keys(currentContent).length>0&&<ContentDetails currentContent={currentContent} setCurrentContent={setCurrentContent}/>} */}
            <ContentDetails currentContent={currentContent} setCurrentContent={setCurrentContent}/>
        </div>
    );
};

export default Page;