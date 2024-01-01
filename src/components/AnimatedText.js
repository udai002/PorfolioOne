import React from 'react'
import { motion } from 'framer-motion'
const AnimatedText = ({ text, className = '' }) => {

    const quotes = {
        intial: {
            opacity:0
            
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren:0.08
            }
        }
    }

    const singleWord = {
        intial: {
            opacity: 0,
            y:50
        },
        animate: {
            opacity: 1,
            y:0,
            transition: {
                delay: 0.5,
                duration:1
            }
        }
    }

    return (
        <div className={'text-center items-center flex justify-center mx-auto py-2 overflow-hidden sm:py-0'}>
            <motion.h1 className={`inline-block text-dark font-bold capitalize text-5xl dark:text-light ${className}`}
                variants={quotes}
                initial='intial'
                animate='animate'
            >
                {
                    text.split(" ").map((word, index) =>
                        <motion.span key={word + "-" + index} className='inline-block'
                        variants={singleWord}
                        >{word}&nbsp;</motion.span>
                    )
                }
            </motion.h1>
        </div>
    )
}

export default AnimatedText
