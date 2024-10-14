import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'
import { publicationsData } from '@/data'

const Publications = () => {
  return (
    <div>
      <div className='page-title'>PUBLICATIONS</div>
      <HoverEffect items={publicationsData} />
    </div>
  )
}

export default Publications