import React from 'react';
import { TEMPLATE } from './TemplateListSection';
import Image from 'next/image';
import Link from 'next/link';

function TemplateCard(item: TEMPLATE) {
  return (
    <Link href={'/dashboard/content/' + item?.slug}>
      <div className='p-6 shadow-lg rounded-lg border border-gray-200 bg-gradient-to-br from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-xl'>
        <div className='flex flex-col items-center gap-4'>
          <div className='p-4 bg-white rounded-full shadow-sm'>
            <Image src={item.icon} alt='icon' width={40} height={40} />
          </div>
          <h2 className='text-xl font-semibold text-purple-900'>{item.name}</h2>
          <p className='text-center text-gray-600 line-clamp-3'>{item.desc}</p>
        </div>
      </div>
    </Link>
  );
}

export default TemplateCard;
