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
    <div className='h-screen p-5 shadow-sm border bg-gradient-to-b from-purple-900 to-indigo-900'>
      <div className='flex justify-center'>
        <Image 
          src='/logo.svg' 
          alt='logo' 
          width={120} 
          height={100} 
        />
      </div>
      <div className='mt-8'>
        {MenuList.map((menu, index) => (
          <Link key={index} href={menu.path}> {/* Make the item clickable */}
            <div
              className={`flex gap-2 mb-2 p-3 hover:bg-purple-700 hover:text-white rounded-lg cursor-pointer transition-all duration-300 ${
                path === menu.path ? 'bg-purple-700 text-white shadow-lg' : 'text-gray-300'
              }`} 
            >
              <menu.icon className='w-5 h-5' />
              <h2 className='text-sm font-medium'>{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
