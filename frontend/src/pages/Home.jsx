import React, { useState } from 'react'
import { typeOfTshirts, newTshirts, services, howToDesign, bulkOrders, topReviews, typeOfTshirtCollection } from '@/Data/data'
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
import TshirtCard from '@/components/myui/TshirtCard'
import ReviewCard from '@/components/myui/ReviewCard'
import { Link } from 'react-router-dom'


const Home = () => {

  const [typeTshirt, setTypeTshirt] = useState('');

  return (
    <>
      <section className='bg-background_1'>
        <div className='flex flex-col gap-16 '>
          <img className='h-[200px] sm:h-full' src='https://printo-s3.dietpixels.net/site/Web%20banner/Apparel%20CP%20Banner%20Desktop_1717070343.png?quality=70&format=webp&w=1920' alt='hero' />

          <div className='max-w-screen-xl mx-auto flex flex-col justify-center items-center'>
            <h1 className='text-color_2 font-semibold text-4xl text-center capitalize'>Make your own customized t-shirts</h1>
            <p className='text-color_2 text-center'> Make your own brands, your own style customizable t-shirts in few minutes and deliver it anywhere worldwide that makes a lasting impression.</p>
            <Link to={'/design-your-tshirt'}><Button className='bg-color_1 w-fit hover:bg-color_2 mt-6 text-background_1 p-2 rounded-md'>Customize Now</Button></Link>
          </div>

          <div className='max-w-screen-xl mx-auto'>
            <h1 className='text-color_2 mb-8 font-semibold text-4xl text-center'>Choose your Style</h1>
            <div className=' p-4 grid grid-cols-1 sm:grid-cols-2 place-items-center lg:grid-cols-4 gap-4'>
              {
                typeOfTshirts.map((tshirt, index) => {
                  return (
                    <img onClick={() => setTypeTshirt(`${tshirt.id}`)} key={index} src={tshirt.image} alt={tshirt.title} />
                  )
                })
              }
            </div>
          </div>


          {
            typeTshirt && (
              <div className='max-w-screen-xl mx-auto'>
                <div className='flex flex-col gap-8 p-4'>
                  <h1 className='text-color_2 font-semibold text-4xl text-center'>Choose your <span className='uppercase'> '{typeTshirt}'</span></h1>
                  <div className='flex flex-wrap p-4 justify-center items-center gap-8'>
                    {
                      typeOfTshirtCollection[typeTshirt].map((tshirt, index) => {
                        return (
                          <TshirtCard key={index} tshirt={tshirt} />
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            )
          }

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
                        <TshirtCard key={tshirt.id} tshirt={tshirt} />
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
            <h1 className='text-color_2 mb-8 font-semibold text-4xl text-center'>Why Us...?</h1>
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
            <h1 className='text-color_2 mb-8 font-semibold text-4xl text-center capitalize'>How to design your own t-shirt</h1>
            <div className='flex flex-col p-4 md:flex-row gap-16 items-center justify-center'>
              <img className='w-full md:w-1/2 shadow-xl' src='https://cdn.shopify.com/app-store/listing_images/9fb2bc86b0afe492b0c868091ab83300/desktop_screenshot/COO2_IDy9fACEAE=.png?height=900&width=1600' alt='image' />
              <div className='text-color_2 font-normal justify-center items-center flex flex-col gap-8'>
                <ul className='text-color_2 text-left mt-4 list-disc leading-loose'>
                  {/* <li>Choose your t-shirt</li>
                  <li>Choose your design</li>
                  <li>Customize your design</li>
                  <li>Place your order</li> */}
                  {
                    howToDesign.map((design, index) => {
                      return (
                        <li key={index}>
                          <h1 className='text-lg font-semibold'>{design.title}</h1>
                          <p className='text-[16px] md:hidden lg:block'>{design.description}</p>
                        </li>
                      )
                    })
                  }
                </ul>
            <Link to={'/design-your-tshirt'}><Button className='bg-color_1 w-fit hover:bg-color_2 mt-6 text-background_1 p-2 rounded-md'>Customize Now</Button></Link>
                {/* <Button className='bg-color_1 w-fit hover:bg-color_2 text-background_1 p-2 rounded-md'>Customize Now</Button> */}
              </div>
            </div>
          </div>

          <div className='max-w-screen-xl text-color_1 mx-auto text-center w-full p-4'>
            <h1 className='text-color_2 mb-4 font-semibold text-4xl text-center capitalize'>Save Big on Bulk Orders</h1>
            <p className='text-xl mb-2 font-semibold'>Boundless Opportunities - Big Savings!</p>
            <p className='text-lg'>Ordering for an extra large group?  Dive into our bulk order category to maximize your savings and elevate your group's style. Whether it's for events, teams, or more, we've got your bulk needs covered.</p>
          </div>

          <div className='max-w-screen-xl mx-auto w-full p-4'>
            <h1 className='text-color_2 mb-4 font-semibold text-4xl text-center capitalize'>Shop Bulk T-Shirts</h1>
            <div className='flex flex-wrap p-4 justify-center items-center gap-8'>
              {
                bulkOrders.map((tshirt, index) => {
                  return (
                    <div key={index} className='sm:w-[280px] w-full border hover:shadow-2xl text-center text-color_2'>
                      <img className='w-full' src={tshirt.image} alt={tshirt.title} />
                      <div className='p-4'>
                        <h1 className='text-xl font-semibold'>{tshirt.title}</h1>
                        <p className='text-md'>{tshirt.desc}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>

          <div className='sm:max-w-screen-sm w-[calc(100%-110px)] mx-auto mb-8'>
            <h1 className='text-color_2 mb-8 font-semibold text-4xl text-center'>Top Reviews</h1>
            <Carousel
              plugins={[
                Autoplay({ delay: 4000, stopOnInteraction: true })
              ]}
              className='mb-8'
            >
              <CarouselContent>
                {
                  topReviews.map((review, id) => {
                    return (
                      <CarouselItem key={id}>
                        <ReviewCard key={review.id} review={review} />
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