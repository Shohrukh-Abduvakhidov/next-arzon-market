/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
// Import Swiper React components
import { Swiper } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './styles.css'

type Props = {
	children: ReactNode;
 };
// import required modules
import { Autoplay, Pagination } from 'swiper/modules'
import { ReactNode } from 'react'

export default function SwiperComponent({children} : Props) {
	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				modules={[Autoplay, Pagination]}
				className='mySwiper'
			>
				{children}
			</Swiper>
		</>
	)
}
