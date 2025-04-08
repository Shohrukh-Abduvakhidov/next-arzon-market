import Image from 'next/image'
import React from 'react'
import logo from "@/app/assets/{2F830DA6-A93C-4CEA-A80A-404B5F50921B}.png"
import { Facebook, Instagram, ShoppingCart, Twitter } from 'lucide-react'
const Navbar = () => {
  return (
	 <>
		<nav className='w-[90%] py-[10px]  flex m-auto justify-between'>
			<div className='flex gap-[0px] cursor-pointer items-center'>
				<ShoppingCart size={30} className='text-[#0015ff]'/> 
			<Image src={logo} width={100} className='' alt='logo'/>
			</div>
			<div className='flex gap-[10px]'>
				<Instagram size={25} className='text-[black] cursor-pointer'/>
				<Facebook size={25} className='text-[black] cursor-pointer'/>
				<Twitter size={25} className='text-[black] cursor-pointer'/>
			</div>
		</nav>
	 </>
  )
}

export default Navbar
