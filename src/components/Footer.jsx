import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="flex flex-col sm:grid grid-cols-[3fr _1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600 '>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text  ever since the 1500s. when an unknown printer took a gallery of type and scrambled it to make a type specimen book.</p>
        </div>
    </div>
  )
}

export default Footer