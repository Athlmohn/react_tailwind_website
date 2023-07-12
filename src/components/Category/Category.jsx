import React from 'react'
import { categories } from '../../CategoryList/category'

function Category() {
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-center text-4xl'>Customers Top Rated </h1>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
        { categories.map((item,index)=>(
          <div key={index} className='bg-gray-50 flex items-center justify-between rounded-lg p-4'>
            <h2 className='font-bold sm:text-xl'>{item.name}</h2>
            <img src={item.image} alt={item.name} className='w-20' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category