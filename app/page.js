import { Badge } from "@/components/ui/badge";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-20">
      <section className="text-center pt-10">
        <Link href={"#"} className="bg-gray-100 p-1 inline-flex justify-between items-center rounded-full mb-7 hover:bg-gray-200">
          <Badge>New</Badge>
          <div className="flex items-center pr-2">
            <span className="px-3">Clip Ai all new apps</span>
            <span><ChevronRight size={18} /></span>
          </div>
        </Link>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Build Your Short Video Prompt <span className="text-primary">With AI</span> </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">EEffortlessly Build AI-Generated Short Video Prompts in Minutes</p>
        <div>
          <Link href={"/dashboard"} className="inline-flex bg-primary text-white px-5 py-3 rounded-md mb-8">Get Started <span><ArrowRight size={24} /></span></Link>
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36 mb-14 mt-8">
          <span className="font-semibold text-gray-400 uppercase">FEATURED IN</span>
          <div className="flex flex-wrap gap-3 justify-center sm:justify-between mt-8">
            <Image src={"/youtube.svg"} width={150} height={30} ></Image>
            <Image src={"/product.svg"} width={220} height={30}></Image>
            <Image src={"/redit.svg"} width={150} height={30}></Image>
          </div>
        </div>
      </section>
      <section className="py-8 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h2 className="font-bold text-3xl">How it Works?</h2>
        <h2 className="text-md text-gray-500">Give mock interview in just 3 simplar easy step</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="cursor-pointer rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10" >
            <h2 className="mt-4 text-xl font-bold text-black">Select Story Type</h2>
            <p className="mt-1 text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.</p>
          </div>
          <div className="cursor-pointer rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10" >
            <h2 className="mt-4 text-xl font-bold text-black">Select Images Style </h2>
            <p className="mt-1 text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.</p>
          </div>
          <div className="cursor-pointer rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
            <h2 className="mt-4 text-xl font-bold text-black">Generate Video</h2>
            <p className="mt-1 text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link href="/dashboard" className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400">Get Started Today</Link>
        </div>
      </section>
    </div>
  );
}
