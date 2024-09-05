import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { tShirts } from '@/Data/data';
import { Button } from '@/components/ui/button';
import TshirtCard from '@/components/myui/TshirtCard';
import { recommendedProducts, recentlViewedProducts, similarProducts } from '@/Data/data';

const TshirtDetail = () => {

  const { id } = useParams();
  // console.log('id:', id);

  const [tshirtDetail, setTshirtDetail] = useState(tShirts[id]);
  // console.log('tshirtDetail:', tshirtDetail);


  return (
    <>
      <section className='bg-background_1'>
        <div className='max-w-screen-lg mx-auto py-8 justify-between items-start bg-background_1 p-4 flex flex-col md:flex-row gap-8'>
          <div className='w-full '>
            <img className='shadow-md' src={tshirtDetail.image} alt={tshirtDetail.title} />
          </div>
          <div className='flex flex-col text-color_2 gap-4'>
            <h1 className='text-5xl font-bold'>{tshirtDetail.title}</h1>
            <p className='text-xl font-semibold'>{tshirtDetail.description}</p>
            <ul className='text-color_1 list-disc px-6'>
              <li>Material: 100% Cotton for all-day comfort.</li>
              <li>Customization: Print on the pocket (3x3 or 4x4 inches) and back (up to A4 size) with high-quality digital prints.
              </li>
              <li>Fit: Half sleeves; available in sizes S, M, L, XL, XXL.</li>
              <li>Colors: Classic Black and White.</li>
              <li>MOQ: Order starting from 1 T-shirt.</li>
              <li>
                Care Instructions: Machine wash cold, tumble dry low, do not bleach, warm iron, do not dry clean.
              </li>
            </ul>
            <ul className='text-color_2 list-disc px-6'>
              <li>Color: {tshirtDetail.color}</li>
              <li>Size: {tshirtDetail.size}</li>
              <li>Rating: {tshirtDetail.rating}</li>
            </ul>
            <p className='text-lg'>Ideal for corporate events, team outings, or everyday wear, these polos combine comfort and style, effortlessly boosting your brand.</p>
            {/* <p className='text-2xl font-semibold'>₹{Math.round(tshirtDetail.price * 80)} </p> */}
            <p className='font-semibold'> <span className='font-normal line-through'>₹1000</span> <span className='text-3xl mx-1'>₹900</span> <span className='text-green-600 font-medium'>10% Off</span> </p>
            <div className='flex justify-end'>
              <Button className='bg-color_1 hover:bg-color_2 text-background_1 p-2 rounded-md'>Add to cart</Button>
            </div>
          </div>
        </div>

        <div className='max-w-screen-xl mx-auto mb-8'>
          <div className='flex flex-col gap-8 p-4'>
            <h1 className='text-color_2 font-semibold text-3xl'>Similar Products</h1>
            <div className='flex flex-wrap justify-center items-center gap-8'>
              {
                similarProducts.map((tshirt, index) => {
                  return (
                    <TshirtCard key={index} tshirt={tshirt} />
                  )
                })
              }
            </div>
          </div>
        </div>

        <div className='max-w-screen-xl mx-auto mb-8'>
          <div className='flex flex-col gap-8 p-4'>
            <h1 className='text-color_2 font-semibold text-3xl'>Recently Viewed Products</h1>
            <div className='flex flex-wrap justify-center items-center gap-8'>
              {
                recentlViewedProducts.map((tshirt, index) => {
                  return (
                    <TshirtCard key={index} tshirt={tshirt} />
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className='max-w-screen-xl mx-auto'>
          <div className='flex flex-col gap-8 p-4'>
            <h1 className='text-color_2 font-semibold text-3xl'>Recommended Products</h1>
            <div className='flex flex-wrap justify-center items-center gap-8'>
              {
                recommendedProducts.map((tshirt, index) => {
                  return (
                    <TshirtCard key={index} tshirt={tshirt} />
                  )
                })
              }
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default TshirtDetail