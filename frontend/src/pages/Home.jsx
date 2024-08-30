import React from 'react'
import { typeOfTshirts } from '@/Data/data'

const Home = () => {
  return (
    <>
      <section className='bg-background_1'>
        <div className='max-w-screen-xl mx-auto flex flex-col gap-16 p-4'>
          <img src='https://printo-s3.dietpixels.net/site/Web%20banner/Apparel%20CP%20Banner%20Desktop_1717070343.png?quality=70&format=webp&w=1920' alt='hero' />
          <div>
            <h1 className='text-color_2 font-semibold text-4xl text-center'>Choose your Style</h1>
            <div className=' py-4 my-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
              {
                typeOfTshirts.map((tshirt, index) => {
                  return (
                    <img className='' key={index} src={tshirt.image} alt={tshirt.title} />
                  )
                })
              }
            </div>
          </div>
          <div>
            as
          </div>
        </div>
      </section>
    </>
  )
}

export default Home