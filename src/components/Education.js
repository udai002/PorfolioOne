import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

//scrolling is not working 

const Experience = () => {
 
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })

    const Details = ({ type, time, place, info }) => {

        const ref = useRef(null)

        return <li ref={ref} className='my-8 first:mt-0 last:mb-0 flex justify-between items-center mx-auto w-[60%] '>

            <LiIcon reference={ref}/>
            <motion.div 
            
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5 , type:"spring"}}
            >
                <h2 className='capitalize font-bold text-2xl'>{type}&nbsp;</h2>
                <span className='capitalize font-medium text-dark/75'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full'>
                    {info}
                </p>
            </motion.div>
        </li>
    }
    return (
        <div>
            <h1 className='font-bold text-dark text-8xl w-full text-center my-32 dark:text-light'>Education</h1>
            <div ref={ref} className='w-[75%] mx-auto my-10 h-screen py-10 relative' >
                <motion.div style={{ scaleY: scrollYProgress }} className="absolute top-0 left-[1.1rem] h-full bg-dark w-[4px] origin-top dark:bg-light" />
                <ul className='flex flex-col justify-between items-start ml-4'>
                    <Details type={"Bachelor of science in Computer Science"} time={"2020 - 2024"} place={"Lovely Professional University , Punjab"} info={`Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Full Stack Web Development`}/>
                    <Details type={"Intermeidate"} time={"2018 - 2020"} place={"Narayana , Vijayawada"} info={`Completed Intermediate education in Narayana college with 9.0 CGPA`}/>
                    <Details type={"Board of secondary Education"} time={"2020 - 2024"} place={"KKR Gowtham English medium school, Vuyyuru"} info={`Completed My Secondary board of education with 10.0 CGPA `}/>
                </ul>

            </div>
        </div>
    )
}

export default Experience
