/* eslint-disable @next/next/no-img-element */
import { Eye, ShoppingCart } from 'lucide-react'
import React from 'react'
import { TProduct } from '../home/home'
import { useRouter } from 'next/navigation'
const Card = ({product} : {product : TProduct}) => {
	const router = useRouter()
	function routByid(id : number | string)
	{
		router.push(`/${id}`)	
	}
	return (
		<div>
			<div
			onClick={() => routByid(product.id)}
				key={product.id}
				className='w-[270px] cursor-pointer rounded-md border-[2px] border-[gray] h-[350px] hover:transform hover:-translate-y-2 hover:shadow-2xl duration-100'
			>
				<div className='relative'>
					<Eye className='absolute right-2 top-2' size={25} />
					<img
						src={product.image}
						alt={`image-${product.id}`}
						className='w-full rounded-md m-auto h-[200px]'
					/>
				</div>
				<p className='text-[#383838] font-bold text-[20px] text-center'>
					{product.productName.slice(0, 20)}...
				</p>
				<div className='flex w-[90%] py-[10px] m-auto justify-between items-center'>
					<p className='text-[black] font-bold text-[20px]'>{product.price}$</p>
					<ShoppingCart size={30} className='text-[black]' />
				</div>
				<p className='text-[#585858] font-bold text-[14px]'>
					{product.description.slice(0, 90)}...
				</p>
			</div>
		</div>
	)
}

export default Card
