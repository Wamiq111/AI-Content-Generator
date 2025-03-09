import { Search } from 'lucide-react';
import React from 'react';

function SearchSection({ onSearchInput }: any) {
  return (
    <div className='p-10 bg-gradient-to-br from-indigo-600 via-pink-500 to-purple-600 flex flex-col justify-center items-center text-white'>
      <h2 className='text-3xl font-bold'>Browse All Templates</h2>
      <p className='text-lg text-gray-200 mt-2'>What would you like to create today?</p>
      <div className='flex justify-center items-center w-full my-5'>
        <div className='flex gap-2 items-center p-3 border border-gray-300 rounded-lg bg-white w-[50%] shadow-lg'>
          <Search className='text-purple-600' />
          <input
            type='text'
            placeholder='Search'
            onChange={(event) => onSearchInput(event.target.value)}
            className='bg-transparent w-full outline-none text-gray-800 placeholder-gray-400'
          />
        </div>
      </div>
    </div>
  );

}

export default SearchSection;
