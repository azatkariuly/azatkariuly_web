"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import menuSvg from '../../public/menu.svg'
import Link from 'next/link'

const Menu = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className=''>
            <Image src={menuSvg} alt='' width={28} height={28} className='cursor-pointer' onClick={()=>setOpen((prev)=>!prev)}/>
            {open && (
                <div className='absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10'>
                    <Link href={'/about'}>About</Link>
                    <Link href={'/experience'}>Experience</Link>
                    <Link href={'/projects'}>Projects</Link>
                    <Link href={'/publications'}>Publications</Link>
                    <Link href={'/patents'}>Patents</Link>
                    {/* <Link href={'/contact'}>Contact</Link> */}
                </div>
            )}
        </div>
    )
}

export default Menu