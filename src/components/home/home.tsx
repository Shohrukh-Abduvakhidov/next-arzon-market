 
'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '../card/card'
import Loader from '../loader/loader'
export interface TProduct {
	image : string
	productName : string
	id : number | string
	price : string | number
	description : string
}
export default function Home() {
 const Api = 'https://678a87d7dd587da7ac2a8ca1.mockapi.io/chat' 
	const [products, setProducts] = useState([])
	async function getProducts() {
		try {
			const { data } = await axios.get(Api)
			setProducts(data)
		} catch (error) {
			console.error(error)
		}
	}
	useEffect(() => {
		getProducts()
	}, [])

	if (products.length === 0) {
		return <div className='inset-0 flex justify-center z-50 bg-white items-center fixed'>
			<Loader/>
			</div>
	  }
	return <div className='grid md:w-[95%] w-[70%] lg:w-[90%] m-auto md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-[20px] md:gap-[35px] lg:gap-[20px]'>
		{
			products.map((product : TProduct) => (
				<Card key={product.id} product={product}/>
			))
		}
	</div>
}
