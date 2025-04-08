import Image from 'next/image'
import React from 'react'
import logo from "@/app/assets/{2F830DA6-A93C-4CEA-A80A-404B5F50921B}.png"
import { ShoppingCart } from 'lucide-react'
import GitIcon from '../icons/git-hub-icon'
import X from '../icons/x-icon'
import CartIcon from '../icons/cart-icon'
const Navbar = () => {
  return (
	 <>
		<nav className='w-[90%] py-[10px]  flex m-auto justify-between'>
			<div className='flex gap-[0px] cursor-pointer items-center'>
				<ShoppingCart size={30} className='text-[#0015ff]'/> 
			<Image src={logo} width={100} className='' alt='logo'/>
			</div>
			<div className='flex gap-[10px]'>
				<GitIcon/>
				<X/>
				<CartIcon/>
			</div>
		</nav>
	 </>
  )
}

export default Navbar
