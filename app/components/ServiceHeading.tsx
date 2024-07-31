import React from 'react'

interface props {
    title: string;
    count: string | number;
}

const ServiceHeading = ({title , count}:props) => {
  return (
    <h2 className='flex items-center gap-3'>
        <span className='text-3xl lg:text-4xl font-bold text-marketing-orange-200'>{count}</span>
        <span className='text-white uppercase text-xl font-medium text-center md:text-left'>{title}</span>
    </h2>
  )
}

export default ServiceHeading