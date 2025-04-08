'use client'
/* eslint-disable @next/next/no-img-element */
import { TProduct } from '@/components/home/home'
import axios from 'axios'
import { ArrowBigDownDash } from 'lucide-react'
import { useRouter, useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Loader from '@/components/loader/loader'

const Api = 'https://678a87d7dd587da7ac2a8ca1.mockapi.io/chat'

const Page = () => {
  const [product, setProduct] = useState<TProduct | null>(null) 
  const router = useRouter()
  const params = useParams()

  const productId = params.productById

  async function getProductById() {
    try {
      const { data } = await axios.get(`${Api}/${productId}`)
      console.log('Product data:', data)
      setProduct(data)
    } catch (error) {
      console.error('Error fetching product:', error)
    }
  }

  useEffect(() => {
    if (productId) {
      getProductById()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]) 

  function backRoute() {
    router.back()
  }

  if (!product) {
	return <div className='inset-0 flex justify-center bg-white items-center fixed'>
		<Loader/>
		</div>
  }

  return (
    <div className='flex w-[95%] flex-col lg:flex-row m-auto gap-[20px] items-start'>
      <div className='relative lg:w-[500px] w-[100%] h-[300px] lg:h-[400px]'>
        <ArrowBigDownDash
          onClick={backRoute}
          className='rotate-90 absolute text-[#fff] border top-5 left-5 border-white rounded-full cursor-pointer'
          size={30}
        />
        <img
          src={product.image || '/default-image.jpg'} 
          className=' rounded-md w-full h-full object-cover shadow-2xl '
          alt={product.productName || 'Product Image'}
        />
      </div>
      <div className='pt-[20px]'>
        <p className='lg:text-[40px] text-[25px] text-black font-bold'>{product.productName}</p>
        <p className='text-[40px] text-black font-bold'>{product.price}$</p>
        <p className='text-[20px] text-[#474747] font-bold'>{product.description}...</p>
        <button className='border border-gray-600 text-[#fff] font-bold px-[50px] py-[15px] rounded-2xl my-[40px] bg-green-600 cursor-pointer'>
          Buy
        </button>
      </div>
    </div>
  )
}

export default Page
