'use client';
import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

const Navbar = () => {
    const scrolltoHash = function (element_id: string) {
        const element = document.getElementById(element_id)
        element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }

    return (
        <div className='h-20 px-4 lg:px-8 relative'>
            {/* MOBILE */}
            <div className='h-full flex items-center justify-between lg:hidden '>
                <Link href={'/'}>
                    <div className='text-2xl tracking-wide'>azatkariuly</div>
                </Link>
                {/* <Menu/> */}
            </div>
            {/* BIGGER SCREENS */}
            <div className='hidden lg:flex items-center justify-between gap-8 h-full'>
                {/* LEFT */}
                <div className='w-1/3'>
                    <Link href={'/'}>
                        <div className='text-2xl tracking-wide'>azatkariuly</div>
                    </Link>
                </div>
                {/* RIGHT */}
                <div className='w-2/3 flex gap-10 justify-end'>
                    <div className='cursor-pointer' onClick={() => scrolltoHash('about')}>About</div>
                    <div className='cursor-pointer' onClick={() => scrolltoHash('experience')}>Experience</div>
                    <div className='cursor-pointer' onClick={() => scrolltoHash('projects')}>Projects</div>
                    <div className='cursor-pointer' onClick={() => scrolltoHash('publications')}>Publications</div>
                    <div className='cursor-pointer' onClick={() => scrolltoHash('patents')}>Patents</div>
                    <div className='cursor-pointer' onClick={() => scrolltoHash('contact')}>Contact</div>
                    {/* <Link href={'/'}>About</Link>
                    <Link href={'/experience'}>Experience</Link>
                    <Link href={'/projects'}>Projects</Link>
                    <Link href={'#publications'}>Publications</Link>
                    <Link href={'/patents'}>Patents</Link>
                    <Link href={'/contact'}>Contact</Link> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar