import React from 'react'
// import { Categories } from './categories'

export const LeftNav = () => {
  return (
    <div className='w-full flex flex-col items-center ' >
        <div className='rounded-full overflow-hidden w-1/2 mt-10 mb-3'><img src="http://localhost:3000/avater.png" className='w-full' /></div>
         <span>Welcome</span>
         {/* <Categories /> */}
    </div>
  )
}
