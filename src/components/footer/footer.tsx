/* eslint-disable @next/next/no-img-element */
import React from 'react'
import logo from "@/app/assets/{2F830DA6-A93C-4CEA-A80A-404B5F50921B}.png"
import Image from 'next/image'
const Footer = () => {
  return (
	 <footer className='flex border-t border-gray-600 items-center my-[20px] justify-between w-[90%] m-auto'>
		<div className=''>
			<Image src={logo} alt="" />
		</div>
		<p className='text-[#272727] text-[19px] font-bold'>@from shohrukh 2025</p>
	 </footer>
  )
}

export default Footer
