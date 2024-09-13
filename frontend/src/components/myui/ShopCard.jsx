import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const ShopCard = ({tshirt}) => {

    return (
        <>
            <Link to={'/shop/' + tshirt._id} key={tshirt._id} className='bg-background_2 h-full border overflow-hidden shadow-xl hover:scale-105 duration-500'>
                <div className='relative'>
                    <img className='mix-blend-multiply' alt='tshirt' src={tshirt.image} />
                    <p className='absolute hover:scale-105 text-color_2 font-semibold w-[30px] h-[30px] flex justify-center items-center bottom-2 right-2 shadow-xl bg-background_1 rounded-full z-10'>{tshirt.rating}<i className="fa-solid fa-star text-[12px]"></i></p>
                </div>
                <div className='bg-background_1 h-full p-2'>
                    <div className='flex flex-col justify-between text-color_2'>
                        <p className='text-lg font-semibold'>{tshirt.title}</p>
                        <p className='text-sm '>{tshirt.description}</p>
                        <p className='text-sm'>Size: {tshirt.size}</p>
                        <p className='text-sm'>Color: {tshirt.color}</p>
                        <p className='font-bold mt-2'>₹{tshirt.price }</p>
                    </div>
                    {/* <div className='flex justify-end mt-2'>
                        <Button onClick={handleCart} className='bg-color_1 hover:bg-color_2 text-background_1 p-2 rounded-md'>Add to cart</Button>
                    </div> */}
                </div>
            </Link>
        </>
    )
}

export default ShopCard