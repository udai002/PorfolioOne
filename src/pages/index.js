import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import profilePic from '../../public/images/profile/developer-pic-1.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/icons'
import HireMe from '@/components/HireMe'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Squart</title>
      </Head>
      <main className='flex items-center w-full text-dark min-h-screen  dark:text-light pt-12'>
        <Layout className='pt-0 md:pt-16 sm:pt-8 p-32'>
          <div className="flex items-center justify-between w-full lg:flex-wrap ">
            <div className='w-full'>
              <Image src={profilePic} alt='' className='w-full h-auto'  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority />
            </div>  
            <div className='w-full'>
              <AnimatedText text={'Turning Vision Into Reality With Code And Design.'} className='!text-5xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl '/>
              <p className='text-base font-medium my-4 '>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
                <div className='flex items-center self-start mt-2'>
                  <Link href={'/dummy.pdf'} target='_blank'
                  className='text-light bg-dark p-2.5 px-6 rounded-lg flex items-center font-semibold hover:bg-light hover:text-dark hover:border-dark border-2 mr-4 dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light dark:border-2 hover:dark:border-light' 
                  >Resume <LinkArrow className={'w-6 ml-2'} /></Link>
                  <Link href={'#'} target='_blank'
                  className='text-lg text-dark underline dark:text-light '
                  >Contact us</Link>
                </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  )
}
