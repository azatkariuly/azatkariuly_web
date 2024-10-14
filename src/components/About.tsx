import Image from 'next/image'
import React from 'react'
import { FlipWords } from './ui/flip-words'

const About = () => {
  const words = ["a Full-Stack Developer", "an AI Researcher"];

  return (
    <div className=''>
      <div>ABOUT ME</div>
      <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
        <div className='md:w-2/3'>
          <div>Hello! My name is Azat Azamat</div>
          <div>
            I'm <FlipWords words={words}/>
          </div>
        </div>
        <div className="w-[calc((100vw)/2)] h-[calc((100vw)/2)] md:w-1/3 md:h-[calc((100vw-64px)/3)] relative">
          <Image
            src={'/avatar.jpg'}
            alt="Avatar"
            layout="fill" // required
            objectFit="cover" // change to suit your needs
            // className="rounded-xl md:rounded-full"
          />
        </div>
      </div>
    </div>
  )
}

export default About