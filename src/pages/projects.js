import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import { GithubIcon } from '@/components/icons'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'
import { motion } from 'framer-motion'

const projects = () => {

    const FramerImage = motion(Image)

    const FeaturedProojects = ({ type, title, summary, img, link, github }) => {
        return (
            <article className='w-full flex items-center justify-between rounded-2xl border-2 border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:text-light dark:border-light '>
                <Link href={link} className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                    <FramerImage src={img} className='w-full h-auto ' whileHover={{ scale: 0.9 }} />
                </Link>
                <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                    <span className='text-primary font-medium text-2xl'>{type}</span>
                    <Link href={link} className='hover:underline underline-offset-2'>
                        <h2 className='my-2 w-full text-center text-4xl font-bold '>{title}</h2>
                    </Link>
                    <p className='font-medium my-2 text-dark dark:text-light'>{summary}</p>
                    <div className='flex items-center my-2'>
                        <Link href={github} className='w-10'><GithubIcon /></Link>
                        <Link href={link} className='ml-10 rounded-lg bg-dark text-light px-4 py-2 font-bold dark:bg-light dark:text-dark'>Visit the site</Link>
                    </div>
                </div>
            </article>
        )
    }


    const Project = ({ type, title, summary, img, link, github }) => {
        return <article className='w-full flex flex-col items-center justify-between rounded-2xl border-2 border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:text-light dark:border-light '>
            <Link href={link} className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto ' whileHover={{ scale: 0.9 }} />
            </Link>
            <div className='w-full flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-2xl'>{type}</span>
                <Link href={link} className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-center text-4xl font-bold'>{title}</h2>
                </Link>
                {/* <p className='font-medium my-2 text-dark'>{summary}</p> */}
                <div className='w-full flex items-center justify-between  my-2'>
                    <Link href={github} className='w-10'><GithubIcon /></Link>
                    <Link href={link} className='ml-10 rounded-lg bg-dark text-light px-4 py-2 font-bold'>Visit the site</Link>
                </div>
            </div>
        </article>
    }




    return (
        <>
            <Head>
                <title>Squart | Projects</title>
                <meta name='decription' content='any description' />
            </Head>
            <main className='mb-16 flex flex-col items-center justify-center p-10'>
                <Layout className='my-10 p-4'>
                    <AnimatedText text={'Imagination Trumps Knowledge!'} className='mb-12' />

                    <div className='grid grid-cols-12 gap-24'>
                        <div className='col-span-12 '>

                            <FeaturedProojects title={"Crypto Screener Application"} img={project1} summary={`A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency.`} link={'https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg'} github={'https://github.com/'} type={'Featured Project'} />
                        </div>
                        <div className="col-span-6">
                            <Project title={"Crypto Screener Application"} img={project1} summary={`A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency.`} link={'https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg'} github={'https://github.com/'} type={'Featured Project'} />
                        </div>
                        <div className="col-span-6">
                            <Project title={"Crypto Screener Application"} img={project1} summary={`A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency.`} link={'https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg'} github={'https://github.com/'} type={'Featured Project'} />
                        </div>

                        <div className='col-span-12 '>

                            <FeaturedProojects title={"Crypto Screener Application"} img={project1} summary={`A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency.`} link={'https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg'} github={'https://github.com/'} type={'Featured Project'} />
                        </div>


                        <div className="col-span-6">
                            <Project title={"Crypto Screener Application"} img={project1} summary={`A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency.`} link={'https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg'} github={'https://github.com/'} type={'Featured Project'} />
                        </div>
                        <div className="col-span-6">
                            <Project title={"Crypto Screener Application"} img={project1} summary={`A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency.`} link={'https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg'} github={'https://github.com/'} type={'Featured Project'} />
                        </div>

                    </div>




                </Layout>
            </main>
        </>
    )
}

export default projects
