import { Search } from 'lucide-react';
import React from 'react';

function Header() {
  return (
    <div className='p-4 shadow-sm border-b-2 border-purple-200 bg-gradient-to-r from-purple-600 to-indigo-600 flex justify-center items-center'>
      <div className='flex gap-2 items-center p-3 border border-purple-300 rounded-lg bg-purple-50 w-full max-w-lg shadow-sm'>
        <Search className='text-purple-600' />
        <input
          type='text'
          placeholder='Search...'
          className='outline-none w-full text-purple-900 placeholder-purple-400 bg-transparent'
        />
      </div>
    </div>
  );
}

export default Header;
