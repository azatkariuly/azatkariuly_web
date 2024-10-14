import Image from 'next/image'
import React from 'react'
import { FlipWords } from './ui/flip-words'
import Link from 'next/link';

const About = () => {
  const words = ["a Full-Stack Developer", "an AI Researcher"];

  return (
    <div className=''>
      <div className='page-title'>ABOUT ME</div>
  
      <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
        <div className='flex flex-col md:w-2/3 text-lg md:textxl pr-10'>
          <div>My name is Azat Azamat</div>
          <div>
            I'm <FlipWords words={words}/>. I enjoy tackling complex problems, building innovative solutions, and continuously expanding my knowledge. Outside of work, I'm a sports enthusiast, with a special love for soccer and strength training.
          </div>
          <div className='flex mt-4 gap-2'>
            <Link href={'https://github.com/azatkariuly'}>
              <Image
                src={'/github.svg'}
                alt='Social'
                width={28}
                height={28}
              />
            </Link>
            <Link href={'https://www.linkedin.com/in/azatkariuly/'}>
              <Image
                src={'/linkedin.svg'}
                alt='Social'
                width={28}
                height={28}
              />
            </Link>
            <Link href={'https://www.instagram.com/azatkariuly/'}>
              <Image
                src={'/instagram.svg'}
                alt='Social'
                width={28}
                height={28}
              />
            </Link>
            
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