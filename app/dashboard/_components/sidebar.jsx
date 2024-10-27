'use client'
import { FileVideo, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
    const links = [

        {
            name: "Dashboard",
            icon: <LayoutDashboard />,
            url: "/dashboard"
        },
        {
            name: "Create New",
            icon: <FileVideo />,
            url: "/dashboard/create-new"
        }
    ]

    const pathName=usePathname()
    return (
        <div className='flex flex-col gap-3 col-span-2 p-5 shadow-md h-screen pt-24'>
            {
                links.map(item => (
                    <Link href={`${item.url}`}>
                    <div key={item.name} className={`flex items-center gap-2 p-3 rounded-md  ${pathName==item.url && "bg-primary text-white"}`}>
                        <span>{item.icon}</span><h3>{item.name}</h3>
                    </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default Sidebar;