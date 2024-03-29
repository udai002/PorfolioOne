import React from 'react'
import {motion , useScroll} from 'framer-motion'

const LiIcon = ({reference}) => {

    const { scrollYProgress } = useScroll({
        target: reference,
        offset: ["center end", "center center"]
    })

  return (
    <figure className='absolute left-0 stroke-dark dark:stroke-light'>
      <svg className='-rotate-[200deg]' height={75} width={75} viewBox='0 0 100 100'>
        <circle cx={75} cy={50} r={20} className='stroke-primary fill-none stroke-1' />
        <motion.circle cx={75} cy={50} r={20} className='stroke-[5px] fill-white '
        style={{pathLength : scrollYProgress}}
        />
        <circle cx={75} cy={50} r={10} className=' animate-pulse stroke-1 fill-primary'  />
      </svg>
    </figure>
  )
}

export default LiIcon
