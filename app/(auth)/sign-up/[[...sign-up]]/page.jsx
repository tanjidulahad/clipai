import { SignUp } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return (
    <div className='flex h-screen '>
      <div className='hidden lg:block'>
        <Image src={'/social_media.jpg'} alt="short-video-image" width={500} height={500} className='w-full object-center h-full'/>
      </div>
      <div className='flex justify-center items-center w-full'>
        <SignUp />
      </div>
    </div>
  )
}