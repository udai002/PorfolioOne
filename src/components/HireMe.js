import React from 'react'
import { CircularText } from './icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center md:left-auto md:right-8 md:top-0 md:bottom-auto '>
      <div className='w-36 h-auto flex items-center justify-center relative'>
        <CircularText className={'fill-dark animate-spin-slow dark:fill-light' }/> 
        <Link href={'mailto:karumuriudaisai002@gmail.com'} className='flex justify-center text-sm items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-center text-light w-20 h-20  hover:text-dark hover:bg-light hover:border-dark border-2 rounded-full dark:bg-light dark:text-dark font-bold dark:hover:bg-dark dark:hover:text-light'>Hire me</Link>
      </div>
    </div>
  )
}

export default HireMe
