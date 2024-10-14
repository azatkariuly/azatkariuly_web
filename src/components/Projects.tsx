import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import Image from 'next/image';

const Projects = () => {
    return (
        <div className='min-h-[400px]'>
            <div className='page-title'>PROJECTS</div>
            <BentoGrid className="max-w-4xl mx-auto">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        link={item.link}
                        className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
        </div>
    )
}

export default Projects

const Skeleton = ({image_name}:{image_name: string}) => (
    <div className="flex flex-1 w-full min-h-[8rem] relative">
        <Image className='rounded-xl' src={image_name} alt="project" layout="fill" objectFit="cover" />
    </div>
);
  
const items = [
    {
        title: "dandycv.com",
        description: "An AI-powered web platform featuring a visually appealing, modern design. The application integrates multiple AI models, allowing users to perform tasks such as background removal, text-to-image generation, image-to-image transformation, text-to-video creation, etc.",
        header: <Skeleton image_name='/dandycv.png'/>,
        icon: ['django.svg', 'react.svg', 'redux.svg'],
        link: "https://www.dandycv.com",
    },
    {
        title: "spoclip.ai",
        description: "An user-friendly web platform with a sleek, modern interface to simplify gym scheduling for sports teams. Registered users can access their game recordings post-match and utilize advanced editing features, including video highlight trimming and AI-powered player tracking.",
        header: <Skeleton image_name='/spoclip2.png'/>,
        icon: ['nodejs.svg', 'nextjs.svg', 'firebase.svg', 'postgresql.svg'],
        link: "https://www.spoclip.ai",
    },
];