import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { Router, useRouter } from 'next/router'
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from './icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './Hooks/useThemeSwitcher'

const Navbar = () => {

  const [mode , setMode] = useThemeSwitcher()
  const [isOpen , setIsOpen] = useState(false)

  const handleClick = ()=>{
    setIsOpen(!isOpen)
  }

  const router = useRouter();
  console.log(router.asPath)

  // const motion = motion();

  const CustomeLink = ({ href, title, className = "" }) => {
    return (
      <Link href={href} className={`${className} relative group`}>
        {title}
        <span
          className={`h-[1px] font-bold inline-blockz bg-dark absolute left-0 -bottom-0 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light`}
        >
          &nbsp;
        </span>
      </Link>
    )
  }


  const CustomeMobileLink = ({ href, title, className = "" , toggle }) => {

    const router = useRouter()
    const handleClick= () =>{
      toggle();
      router.push(href)
    }
     
    return (
      <button className={`${className} relative group my-2`} onClick={handleClick}>
        {title}
        <span
          className={`h-[1px] font-bold inline-blockz bg-dark absolute left-0 -bottom-0 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light`}
        >
          &nbsp;
        </span>
      </button>
    )
  }
  return (

    <header
      className='w-full text-dark  px-32 py-18 font-medium flex items-center justify-between pt-10 dark:bg-dark dark:text-light'
    >

      <button className='flex-col items-center justify-center hidden lg:flex' onClick={handleClick}>
        <span className={`bg-dark dark:bg-light block transition-all ease-out duration-300 h-0.5 w-6 rounded-sm ${isOpen?'rotate-45 translate-y-1':'-translate-y-1'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all ease-out duration-300 h-0.5 w-6 rounded-sm ${isOpen?'opacity-0':'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all ease-out duration-300 h-0.5 w-6 rounded-sm ${isOpen?'-rotate-45 -translate-y-1':'translate-y-1'}`}></span>
      </button>

      <div className='w-full flex justify-between items-center lg:hidden'>
      <nav>
        <CustomeLink href={"/"} title={'Home'} className='mr-4' />
        <CustomeLink href={"/about"} title={'About'} className='mx-4' />
        <CustomeLink href={"/projects"} title={'Projects'} className='mx-4' />
        <CustomeLink href={"/articles"} title={'Arcticles'} className='ml-4' />
      </nav>

      <nav className='flex items-center justify-center'>
        <motion.a href={"/"} target={"_black"}
          whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mr-3'
        ><TwitterIcon /></motion.a>
        <motion.a href={"/"} target={"_black"}
          whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mr-3' ><LinkedInIcon /></motion.a>
        <motion.a href={"/"} target={"_black"}
          whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mr-3'><GithubIcon /></motion.a>
        {/* <Link href={"/"} target={"_black"}>T</Link>
            <Link href={"/"} target={"_black"}>T</Link> */}
            <button
            onClick={()=>setMode(mode === "light"? "dark" : "light")}
            >
            {
              mode === "dark" ? <SunIcon className={'fill-dark'}/> : <MoonIcon className={'fill-dark'}/>
            }
            </button>
           
      </nav>
      </div>

      {isOpen?
      <motion.div initial={{scale:0 , x:"-50%" , y:"-50%"}} animate={{scale:1}} className='min-w-[70vw] flex flex-col justify-between items-center fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/90 backdrop-blur-md py-32 rounded-md text-light dark:text-dark z-10'>
      <nav className='flex flex-col items-center justify-center'>
        <CustomeMobileLink href={"/"} title={'Home'} className='mr-4' toggle={handleClick}/>
        <CustomeMobileLink href={"/about"} title={'About'} className='mx-4' toggle={handleClick}/>
        <CustomeMobileLink href={"/projects"} title={'Projects'} className='mx-4' toggle={handleClick}/>
        <CustomeMobileLink href={"/articles"} title={'Arcticles'} className='ml-4' toggle={handleClick}/>
      </nav>

      <nav className='flex items-center justify-center'>
        <motion.a href={"/"} target={"_black"}
          whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mr-3'
        ><TwitterIcon /></motion.a>
        <motion.a href={"/"} target={"_black"}
          whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mr-3' ><LinkedInIcon /></motion.a>
        <motion.a href={"/"} target={"_black"}
          whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mr-3'><GithubIcon /></motion.a>
        {/* <Link href={"/"} target={"_black"}>T</Link>
            <Link href={"/"} target={"_black"}>T</Link> */}
            <button
            onClick={()=>setMode(mode === "light"? "dark" : "light")}
            >
            {
              mode === "dark" ? <SunIcon className={'fill-dark'}/> : <MoonIcon className={'fill-dark'}/>
            }
            </button>
           
      </nav>
      </motion.div>
    :null}
      
      <div className='absolute left-[50%]  translate-x-[50%]'>
        <Logo />
      </div>
    </header>
  )
}

export default Navbar
