import { Facebook, Instagram, Mail, Twitter } from 'lucide-react'
import React from 'react'

const Share = () => {
  return (
    <div className='flex gap-3 bg-white  p-2 rounded-md border-b-2 border-gray-400'>
        <span className='hover:text-[hsl(256,90%,68%)] hover:size-6.5'><Facebook className='hover:size-6.5'/></span>
        <span><Instagram className='hover:size-6.5 hover:text-[hsl(256,90%,68%)]'/></span>
        <span><Twitter className='hover:size-6.5 hover:text-[hsl(256,90%,68%)]' /></span>
        <span><Mail className='hover:size-6.5 hover:text-[hsl(256,90%,68%)]'/></span>
    </div>
  )
}

export default Share