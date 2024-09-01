import React from 'react'
import { typeOfTshirts, newTshirts } from '@/Data/data'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ShopCard from '@/components/myui/ShopCard'

const Home = () => {
  return (
    <>
      <section className='bg-background_1'>
        <div className='flex flex-col gap-16 '>
          <img src='https://printo-s3.dietpixels.net/site/Web%20banner/Apparel%20CP%20Banner%20Desktop_1717070343.png?quality=70&format=webp&w=1920' alt='hero' />

          <div className='max-w-screen-xl mx-auto'>
            <h1 className='text-color_2 font-semibold text-4xl text-center'>Choose your Style</h1>
            <div className=' p-4 my-4 grid grid-cols-1 sm:grid-cols-2 place-items-center lg:grid-cols-4 gap-4'>
              {
                typeOfTshirts.map((tshirt, index) => {
                  return (
                    <img className='' key={index} src={tshirt.image} alt={tshirt.title} />
                  )
                })
              }
            </div>
          </div>

          <div className='w-[calc(100%-140px)] sm:w-[540px] lg:w-[768px] xl:w-[1024px] 2xl:w-[1340px] mx-auto'>
            <h1 className='text-color_2 font-semibold text-4xl text-center'>New Tshirts</h1>
            <Carousel >
              <CarouselContent>
                {
                  newTshirts.map((tshirt, id) => {
                    return (
                      <CarouselItem className='sm:basis-1/2 lg:basis-1/3' key={id}>
                        <ShopCard key={id} tshirt={tshirt} />
                      </CarouselItem>
                    )
                  })
                }
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home