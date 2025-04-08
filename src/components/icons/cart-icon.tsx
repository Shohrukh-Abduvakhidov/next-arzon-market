import { ShoppingBag } from 'lucide-react'
import React from 'react'

const CartIcon = () => {
  return (
	 <div>
		<section className="flex justify-center items-center">
  <button
    className="group flex justify-center p-[6px] rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold  transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
  >
    <ShoppingBag/>
    <span
      className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-[-20px] duration-700"
    >
      Cart
    </span>
  </button>
</section>

	 </div>
  )
}

export default CartIcon
