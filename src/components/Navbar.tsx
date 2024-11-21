'use client';
import Link from 'next/link'
import React, { useState } from 'react'

import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/navbar";

const MyNavbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        {title: "About", link: "about"},
        {title: "Experience", link: "experience"},
        {title: "Projects", link: "projects"},
        {title: "Publications", link: "publications"},
        {title: "Patents", link: "patents"},
        {title: "Contact", link: "contact"},
    ];
    const scrolltoHash = function (element_id: string) {
        const element = document.getElementById(element_id)
        element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }

    return (
        <Navbar
            isBordered 
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className='z-30'
            shouldHideOnScroll
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"}/>
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    {/* <AcmeLogo /> */}
                    <Link href={'/'}>
                        <div className='text-xl tracking-wide'>azatkariuly</div>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="end">
                <NavbarBrand className='mr-8'>
                    {/* Logo /> */}
                    <Link href={'/'}>
                        <div className='text-xl tracking-wide'>azatkariuly</div>
                    </Link>
                </NavbarBrand>
                

                <NavbarItem>
                    <Link href={'/#about'} scroll={true}>About</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href={'/#experience'} scroll={true}>Experience</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href={'/#projects'} scroll={true}>Projects</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href={'/#publications'} scroll={true}>Publications</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href={'/#patents'} scroll={true}>Patents</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href={'/#contact'} scroll={true}>Contact</Link>
                </NavbarItem>
                <NavbarItem>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <div className='cursor-pointer' onClick={() => scrolltoHash(item.link)}>{item.title}</div>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}

export default MyNavbar