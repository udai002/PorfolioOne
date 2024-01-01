import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const Logo = () => {

  const MotionLink = motion(Link);
  return (
    <motion.div className='flex items-center text-light justify-center '>
      <MotionLink href={'/'} className='w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full font-bold border border-transparent dark:border-light'
        whileHover={{
          backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
          scale: 1.5,
          transition:{duration:1 , repeat:Infinity}
        }}
      >
        US
      </MotionLink>
    </motion.div>
  )
}

export default Logo
