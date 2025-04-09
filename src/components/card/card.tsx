/* eslint-disable @next/next/no-img-element */
import { Eye, ShoppingCart } from 'lucide-react'
import React from 'react'
import { TProduct } from '../home/home'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'

const SwiperComponent = dynamic(() => import('../swiper/swiper'), {
	ssr: false,
})

import { SwiperSlide } from 'swiper/react'

const Card = ({ product }: { product: TProduct }) => {
	const router = useRouter()
	function routByid(id: number | string) {
		router.push(`/${id}`)
	}

	return (
		<div>
			<div
				onClick={() => routByid(product.id)}
				key={product.id}
				className='w-[270px] cursor-pointer rounded-md border-[2px] border-[gray] h-[400px] hover:transform hover:-translate-y-2 hover:animate-sp hover:shadow-2xl duration-100'
			>
				<div className='w-full h-[200px]'>
					<SwiperComponent>
						<div className='relative h-[300px]'>
							{product?.images?.map((img: string) => (
								<SwiperSlide key={img}>
									<Eye
										className='absolute right-2 top-2 text-[#fff] z-50'
										size={25}
									/>
									<img
										src={img}
										alt={`image-${product.id}`}
										className='w-full h-full object-cover rounded-md'
									/>
								</SwiperSlide>
							))}
						</div>
					</SwiperComponent>
				</div>
				<p className='text-[#383838] font-bold text-[20px] text-center mt-2'>
					{product?.name?.en.slice(0, 20)}...
				</p>
				<div className='flex w-[90%] py-[10px] m-auto justify-between items-center'>
					<p className='text-[black] font-bold text-[20px]'>{product.price}$</p>
					<ShoppingCart size={30} className='text-[black]' />
				</div>
				<p className='text-[#585858] font-bold text-[14px] px-2'>
					{product?.description?.en.slice(0, 90)}...
				</p>
			</div>
		</div>
	)
}

export default Card
