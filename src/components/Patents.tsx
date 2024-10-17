import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'
import { patentsData } from '@/data'

const Patents = () => {
    return (
        <div id='patents'>
            <div className='page-title'>PATENTS</div>
            <HoverEffect items={patentsData} />
        </div>
  )
}

export default Patents