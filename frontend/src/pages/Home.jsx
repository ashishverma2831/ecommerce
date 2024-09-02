import React from 'react'
import { typeOfTshirts, newTshirts, services } from '@/Data/data'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ShopCard from '@/components/myui/ShopCard'
import Autoplay from "embla-carousel-autoplay"
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const Home = () => {
  return (
    <>
      <section className='bg-background_1'>
        <div className='flex flex-col gap-16 '>
          <img src='https://printo-s3.dietpixels.net/site/Web%20banner/Apparel%20CP%20Banner%20Desktop_1717070343.png?quality=70&format=webp&w=1920' alt='hero' />

          <div className='max-w-screen-xl mx-auto flex flex-col justify-center items-center'>
            <h1 className='text-color_2 font-semibold text-4xl text-center capitalize'>Make your own customized t-shirts</h1>
            <p className='text-color_2 text-center'> Make your own brands, your own style customizable t-shirts in few minutes and deliver it anywhere worldwide that makes a lasting impression.</p>
            <Button className='bg-color_1 w-fit hover:bg-color_2 mt-6 text-background_1 p-2 rounded-md'>Customize Now</Button>
          </div>

          <div className='max-w-screen-xl mx-auto'>
            <h1 className='text-color_2 mb-8 font-semibold text-4xl text-center'>Choose your Style</h1>
            <div className=' p-4 grid grid-cols-1 sm:grid-cols-2 place-items-center lg:grid-cols-4 gap-4'>
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
            <h1 className='text-color_2 mb-8 font-semibold text-4xl text-center'>New Tshirts</h1>
            <Carousel
              plugins={[
                Autoplay({ delay: 4000, stopOnInteraction: true })
              ]}
            >
              <CarouselContent>
                {
                  newTshirts.map((tshirt, id) => {
                    return (
                      <CarouselItem className='sm:basis-1/2 lg:basis-1/3' key={id}>
                        <ShopCard key={tshirt.id} tshirt={tshirt} />
                      </CarouselItem>
                    )
                  })
                }
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className='max-w-screen-xl mx-auto w-full p-4'>
            <h1 className='text-color_2 mb-8 font-semibold text-4xl text-center'>Our Services</h1>
            <div className='hidden max-w-screen-xl p-4 place-items-center mx-auto sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
              {
                services.map((service, index) => {
                  return (
                    // <div key={index} className='bg-background_2 p-4 rounded-md'>
                    //   <h1 className='text-color_2 font-semibold text-2xl'>{service.title}</h1>
                    //   <p className='text-color_2'>{service.description}</p>
                    // </div>
                    <div key={index} className='flex flex-col gap-3 w-[250px] shadow-lg rounded-lg py-5 px-4 bg-white'>
                      <div className='bg-background_2 shadow rounded-full my-2 h-28 mx-auto w-28 flex justify-center items-center'>
                        {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyXeKDN29AmZgZPLS7n0Bepe8QmVappBwZCeA3XWEbWNdiDFB' alt='image' /> */}
                        <i className={service.class}></i>
                      </div>
                      <h3 className='text-center font-semibold text-xl'>{service.title}</h3>
                      <p className='text-center font-normal text-md text-gray-700'>{service.description}</p>
                    </div>
                  )
                })
              }
            </div>
            <div className='sm:hidden'>
              <Accordion className='mb-8' type="single" collapsible>
                {
                  services.map((service, index) => {
                    return (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{service.title}</AccordionTrigger>
                        <AccordionContent>
                          {service.description}
                        </AccordionContent>
                      </AccordionItem>
                    )
                  })}
              </Accordion>
            </div>
          </div>

          <div className='max-w-screen-xl mx-auto w-full p-4'>
            <h1 className='text-color_2 mb-8 font-semibold text-4xl text-center'>Our Services</h1>
          </div>

        </div>
      </section>
    </>
  )
}

export default Home