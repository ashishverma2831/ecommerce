import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const TshirtCard = ({ tshirt, id, product, setProduct }) => {
    return (
        <>
            <Link to={'/shop/' + tshirt.id} onClick={()=>{setProduct(tshirt)}} className='bg-background_2 overflow-hidden  shadow-xl hover:scale-105 duration-500' key={id}>
                <div className='relative'>
                    <img className='mix-blend-multiply' alt='tshirt' src={tshirt.image} />
                    <p className='absolute hover:scale-105 text-color_2 font-semibold w-[30px] h-[30px] flex justify-center items-center bottom-2 right-2 shadow-xl bg-background_1 rounded-full z-10'>{tshirt.rating}<i className="fa-solid fa-star text-[12px]"></i></p>
                </div>
                <div className='bg-background_1 p-2'>
                    <div className='flex flex-col text-color_2'>
                        <p className='text-lg font-semibold'>{tshirt.title}</p>
                        <p className='text-sm '>{tshirt.description}</p>
                        <p className='font-bold'> <span className='font-normal line-through'>₹1000</span> <span className='text-xl mx-1bhi '>₹900</span> <span className='text-green-600 font-medium'>10% Off</span> </p>
                    </div>
                    {/* <div className='flex justify-end'>
                        <Button className='bg-color_1 hover:bg-color_2 text-background_1 p-2 rounded-md'>Add to cart</Button>
                    </div> */}
                </div>
            </Link>
        </>
    )
}

export default TshirtCard