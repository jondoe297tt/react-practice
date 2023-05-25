import React from 'react'

export const Categories = () => {
    const data=["生活","工作","学习"]
  return (
    <ul className='mt-20'>
        {data.map(category=>{
            return <li className='my-2'>{category}</li>
        })}
    </ul>
  )
}
