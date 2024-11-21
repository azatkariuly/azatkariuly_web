import React from 'react'
import { Timeline } from './ui/timeline'

const Experience = () => {
  const data = [
    {
      title: "Apr. 2023 - Present",
      content: (
        <div>
          <h2 className="md:block text-lg md:text-2xl font-bold ">
            Chef Technology Officer (CTO), AI & Full-Stack Developer, @SPOCLIP AI
          </h2>
          <ul className={"list-disc list-inside text-xs md:text-sm font-normal mt-8"}>
            <li className='mb-4'>
              Led cross-functional teams in building AI-driven applications from scratch, improving operational efficiency by up to 74%
              through performance optimizations.
            </li>
            <li className='mb-4'>
              Independently managed full-stack development projects, integrating advanced AI models which resulted in successful
              product launches and a growing base of paying customers.
            </li>
            <li className='mb-4'>
              Collaborated on cutting-edge mobile solutions that enhanced client services, supporting daily usage by over 100 users,
              and significantly improving user experience and safety measures.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Sep. 2020 - Mar. 2023",
      content: (
        <div>
          <h2 className="md:block text-lg md:text-2xl font-bold">
            Research Assistant, @UNIST
          </h2>
          <ul className={"list-disc list-inside text-xs md:text-sm font-normal mt-8"}>
            <li className='mb-4'>
              Conducted cutting-edge research on neural network accelerators and quantization techniques, aiming to optimize AI
              hardware for better performance and efficiency.
            </li>
            <li className='mb-4'>
              Authored and co-authored 5 peer-reviewed papers in prestigious journals and conferences, including IEEE Transactions
              on Computer-Aided Design of Integrated Circuits and Systems (TCAD) and the International Conference on
              Computer-Aided Design (ICCAD).
            </li>
            <li className='mb-4'>
              Developed novel quantization methods that reduced ADC size in ReRAM-based neural network accelerators by up to
              56.25%, significantly enhancing computational efficiency and enabling deployment in extremely resource-constrained
              applications.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Jul. 2019 – Aug. 2019",
      content: (
        <div>
          <h2 className="md:block text-lg md:text-2xl font-bold ">
          Software Engineer Intern, @QULIX SYSTEMS
          </h2>
          <ul className={"list-disc list-inside text-xs md:text-sm font-normal mt-8"}>
            <li className='mb-4'>
            Created a comprehensive student course registration system from scratch, streamlining the enrollment process for both
            students and faculty.
            </li>
            <li className='mb-4'>
              Acquired and applied skills in Java Servlets, JSP, Maven, and MySQL for dynamic web content generation and robust
              server-side programming.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div id='experience'>
      <div className='page-title'>EXPERIENCE</div>
  
      <Timeline data={data} />
    </div>
  )
}

export default Experience