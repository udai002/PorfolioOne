import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import ArticlesPic from '../../public/images/articles/article1.jpg'
import ArticlesPic2 from '../../public/images/articles/article2.png'
import { motion, motionValue, useMotionValue } from 'framer-motion'

const articles = () => {

  const FramerImage = motion(Image)

  const FeaturedArticles = ({ img, title, time, summary, link }) => {
    return <li className='col-span-1 w-full flex flex-col rounded-2xl border-2 border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:text-light dark:border-light'>
      <Link href={link}
        target='_blank'
        className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <FramerImage src={img} alt={title} className='h-auto w-full' whileHover={{ scale: 0.9 }} />
      </Link>
      <Link href={link} target='_blank'>
        <h2 className='font-bold text-2xl capitalize'>{title}</h2>
      </Link>
      <p className='text-sm mb-2'>{summary}</p>
      <span className='text-primary font-semibold'>{time}</span>
    </li>
  }

  const MovingTag = ({ title, img, link }) => {

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const imgRef = useRef(null)

    function mouseHandling(event) {
      imgRef.current.style.display = 'inline-block'
      x.set(event.pageX)
      y.set(-10)
    }

    function mouseLeave(event) {
      imgRef.current.style.display = 'none'
      x.set(event.pageX)
      y.set(-10)
    }

    return <Link href={link} target='_blank'
      onMouseMove={mouseHandling}
      onMouseLeave={mouseLeave}
    >
      <h2 className='text-2xl font-bold capitalize hover:underline'>{title}</h2>
      <FramerImage style={{ x: x, y: y }} initial={{opacity:0}} whileInView={{opacity:1 , transition:{duration:0.2}}} ref={imgRef} src={img} className='h-auto w-96 absolute rounded-lg hidden' />
    </Link>
  }

  const Articles = ({ img, title, link, date }) => {
    return <motion.li initial={{y:200}} whileInView={{y:0 , transition:{duration:0.5 , ease:"easeInOut"}}} viewport={{once:true}} className='col-span-2 w-full flex justify-between  rounded-2xl border-2 border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:text-light dark:border-light'>
      <MovingTag title={title} link={link} img={img} />
      <Link href={link}>

        {/* <FramerImage src={img} alt={title} whileHover={{scale:0.9}} className='w-full h-auto '/> */}
      </Link>
      <Link href={link} className='hover:underline underline-offset-2'>
        {/* <h2 className='font-bold capitalize text-2xl '>{title}</h2> */}
      </Link>
      <span className='text-primary font-semibold'>{date}</span>
    </motion.li>
  }

  return (
    <>
      <Head>
        <title>Squart | Articles</title>
        <meta name='decription' content='any description' />
      </Head>
      <div>
        <Layout className='pt-16 p-6'>
          <AnimatedText text={'Words Can Change The World! '} className='mb-12' />
          <ul className='grid grid-cols-2 gap-16'>
            <FeaturedArticles title={'Build A Custom Pagination Component In Reactjs From Scratch'} summary={`Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project.`} img={ArticlesPic} time={'9 min'} link={'https://www.butte.edu/departments/cas/tipsheets/grammar/articles.html'} />
            <FeaturedArticles title={'Build A Custom Pagination Component In Reactjs From Scratch'} summary={`Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project.`} img={ArticlesPic} time={'9 min'} link={'https://www.butte.edu/departments/cas/tipsheets/grammar/articles.html'} />
          </ul>

          <h2 className='font-bold text-7xl capitalize items-center text-center my-10'> All Articles</h2>
          <ul className='grid grid-cols-2 gap-2 w-full items-center'>
            <Articles img={ArticlesPic2} link={'#'} title={'Creating An Efficient Modal Component In React Using Hooks And Portals'} date={"March 2022"} />
            <Articles img={ArticlesPic2} link={'#'} title={'Creating An Efficient Modal Component In React Using Hooks And Portals'} date={"March 2022"} />
          </ul>
        </Layout>

      </div>
    </>
  )
}

export default articles
