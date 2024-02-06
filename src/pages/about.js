import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import Head from "next/head"
import Image from "next/image"
import React, { useEffect, useRef } from "react"
import profilePic from "../../public/udaisai.png"
import { useInView, useMotionValue, useSpring } from "framer-motion"
import Skills from "@/components/Skills"
import Education from "@/components/Education"

const about = () => {

    const Animatevalue = ({value})=>{
        const ref = useRef(null)
        const motionValue = useMotionValue(0)
        const springValue = useSpring(motionValue , {duration:3000})
        const isInView = useInView(ref  , {once:true})

        useEffect(()=>{
            if(isInView){
                motionValue.set(value)
            }
        }, [isInView , value , motionValue])

        useEffect(()=>{
            springValue.on("change" , (latest)=>{
                if(ref.current && latest.toFixed(0)){
                    ref.current.textContent = latest.toFixed(0)
                }
            })
        } , [springValue , value]) // second argument is a dependency array when the value in a array changes the useEffect runs
        
        return <span ref={ref}></span>
    }

    

    return (

      <>
        <Head>
            <title>Squart | About page</title>
            <meta name="decription" content="any description"/>
        </Head>
        <div>
            <Layout className="pt-16">
                <AnimatedText text={"Passsion fuels the Purpose!"} />
            </Layout>
            {/* <div className="grid grid-cols-8 gap-16 w-full p-10">
                <div className="col-span-3 flex flex-col items-start justify-start text-lg">
                    <h1 className="text-dark/75 font-bold text-lg uppercase my-4">Biography</h1>
                    <p className="font-medium py-4">Hi, I am Squart, a web developer and UI/UX designer with a passion for creating beautiful, functional,
                        and user-centered digital experiences. With 4 years of experience in the field. I am always looking for
                        new and innovative ways to bring my clients visions to life.</p>
                    <p className="font-medium py-4">I believe that design is about more than just making things look pretty – its about solving problems and
                        creating intuitive, enjoyable experiences for users. </p>
                    <p className="font-medium py-4">Whether I am working on a website, mobile app, or
                        other digital product, I bring my commitment to design excellence and user-centered thinking to
                        every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p>
                </div>
                <div className="col-span-3 rounded-2xl relative h-max border-2 border-dark bg-light p-8">
                    <Image src={profilePic} alt="porfile" className="h-auto w-full rounded-2xl" />
                </div>
                <div className="col-span-2 flex flex-col justify-between items-center">
                    <div className="flex flex-col justify-center items-end">
                        <span className="text-7xl font-bold"><Animatevalue value={5} />+</span>
                        <h1 className="text-medium text-dark capitalize dark:text-light">Satisfied clients</h1>
                    </div>
                    <div className="flex flex-col justify-center items-end">
                        <span className="text-7xl font-bold"><Animatevalue value={10}/>+</span>
                        <h1 className="text-medium text-dark capitalize dark:text-light">Projects completed</h1>
                    </div>
                    <div className="flex flex-col justify-center items-end">
                        <span className="text-7xl font-bold"><Animatevalue value={4}/>+</span>
                        <h1 className="text-medium text-dark capitalize dark:text-light">Years of Experience</h1>
                    </div>
                </div>
            </div> */}
            <Skills/>
            <Education/>
        </div>
        </>
    )
}

export default about
