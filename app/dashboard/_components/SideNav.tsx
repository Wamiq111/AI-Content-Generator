"use client"; 

import { FileClock, Home, Settings, WalletCards } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link'; // Import Link
import React, { useEffect } from 'react';

function SideNav() {
  const MenuList = [
    {
      name: 'Home',
      icon: Home,
      path: '/dashboard',
    },
    {
      name: 'Setting',
      icon: Settings,
      path: '/dashboard/settings',
    },
  ];

  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]); 

  return (
    <div className='h-screen p-5 shadow-sm border bg-white'>
      <div className='flex justify-center'>
        <Image 
          src='/logo.svg' 
          alt='logo' 
          width={120} 
          height={100} 
        />
      </div>
      <div>
        {MenuList.map((menu, index) => (
          <Link key={index} href={menu.path}> {/* Make the item clickable */}
            <div
              className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer ${
                path === menu.path ? 'bg-primary text-white' : ''
              }`} 
            >
              <menu.icon />
              <h2>{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
