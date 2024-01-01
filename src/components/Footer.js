import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
        <Layout className='p-8 flex items-center justify-between'>
            <span>{new Date().getFullYear} &copy; All Right Reverved</span>
            <div className="">
                Build with <span className='text-primary text-2xl mx-2'>&#9825;</span>by&nbsp;<Link href={'/'} className='underline underline-offset-1'>Squart</Link>
            </div>
            <div>
                <Link href={'#'} className='underline underline-offset-1'>Say Hello</Link>
            </div>
        </Layout>
    </footer>
  )
}

export default Footer
