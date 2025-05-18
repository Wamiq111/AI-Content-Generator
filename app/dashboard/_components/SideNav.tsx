"use client";

import { Book, FileClock, Home, Settings, WalletCards } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
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
    {
      name: 'Blogs',
      icon: Book,
      path: '/dashboard/Blogs',
    },
  ];

  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className='h-screen p-5 border-r border-gray-800 bg-gradient-to-b from-gray-900 via-purple-900 to-violet-900'>
      {/* Logo with glow effect */}
      <div className='flex justify-center mb-10'>
        <div className='relative group'>
          <div className='absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition-all duration-300'></div>
          <Image 
            src='/logo.svg' 
            alt='logo' 
            width={120} 
            height={100}
            className='relative z-10 transition-transform duration-300 group-hover:scale-105'
          />
        </div>
      </div>

      {/* Navigation Menu */}
      <div className='mt-8 space-y-2'>
        {MenuList.map((menu, index) => (
          <Link key={index} href={menu.path}>
            <div className='relative group'>
              {/* Active state glow */}
              {path === menu.path && (
                <div className='absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-60'></div>
              )}
              
              {/* Menu item */}
              <div
                className={`relative flex gap-3 items-center p-4 rounded-lg transition-all duration-300 z-10 ${
                  path === menu.path 
                    ? 'bg-gray-800 shadow-lg text-white'
                    : 'text-gray-300 hover:text-white bg-gray-800/50 hover:bg-gray-800/80'
                }`}
              >
                <menu.icon className={`w-5 h-5 transition-colors ${
                  path === menu.path 
                    ? 'text-purple-400'
                    : 'text-gray-400 group-hover:text-purple-300'
                }`} />
                <h2 className='text-sm font-medium'>{menu.name}</h2>
                
                {/* Hover arrow effect */}
                <div className={`ml-auto transition-all duration-300 ${
                  path === menu.path ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}>
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    className={`text-purple-400 transition-transform ${
                      path === menu.path ? 'translate-x-1' : 'group-hover:translate-x-1'
                    }`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom gradient accent */}
      <div className='absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500'></div>
    </div>
  );
}

export default SideNav;
