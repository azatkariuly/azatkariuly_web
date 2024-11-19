import Image from 'next/image';
import React from 'react'
import { FlipWords } from './ui/flip-words'
import Link from 'next/link';


const About = () => {
  const words = ["a Backend Developer", "a Frontend Developer", "an AI Researcher"];

  const icons = [
    { image: '/github.svg', link: 'https://github.com/azatkariuly' },
    { image: '/linkedin.svg', link: 'https://www.linkedin.com/in/azatkariuly/' },
    { image: '/instagram.svg', link: 'https://www.instagram.com/azatkariuly/' },
  ]

  return (
    <div id='about' className="bg-[url('/background.jpeg')] bg-cover bg-center h-screen flex flex-col items-center justify-center px-4">
      <div className='-mt-12 page-title'>ABOUT ME</div>
  
      <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
        <div className="w-[calc((100vw)/2)] h-[calc((100vw)/2)] md:w-1/2 md:h-[calc((100vw-64px)/3)] relative mr-8">
          <Image
            src={'/avatar1.PNG'}
            alt="Avatar"
            layout="fill" // required
            objectFit="cover" // change to suit your needs
            className="rounded-xl md:rounded-none"
          />
        </div>
        <div className='flex flex-col md:w-2/3 text-lg md:textxl pr-10'>
          <div className='font-custom font-bold text-3xl lg:text-6xl text-center'>My name is Azat & I'm <FlipWords words={words}/></div>
          <div className='mt-8'>
            I enjoy tackling complex problems, building innovative solutions, and continuously expanding my knowledge. Outside of work, I'm a sports enthusiast, with a special love for soccer and strength training.
          </div>
          <div className='flex mt-4 gap-2'>
            {icons.map((icon, i) => (
              <Link href={icon.link} key={i}>
                <Image
                  src={icon.image}
                  alt='Social'
                  width={28}
                  height={28}
                />
            </Link>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default About