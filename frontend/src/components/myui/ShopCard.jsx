import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const ShopCard = ({ tshirt, id }) => {

    return (
        <>
            <Link to={'/shop/' + tshirt.id} className='bg-background_2 border overflow-hidden  shadow-xl hover:scale-105 duration-500' key={id}>
                <div className='relative'>
                    <img className='mix-blend-multiply' alt='tshirt' src={tshirt.image} />
                    <p className='absolute hover:scale-105 text-color_2 font-semibold w-[30px] h-[30px] flex justify-center items-center bottom-2 right-2 shadow-xl bg-background_1 rounded-full z-10 p-2'>{tshirt.rating}<i className="fa-solid fa-star text-[12px]"></i></p>
                </div>
                <div className='bg-background_1 p-2'>
                    <div className='flex flex-col text-color_2'>
                        <p className='text-lg font-semibold'>{tshirt.title}</p>
                        <p className='text-sm '>{tshirt.description}</p>
                        <p className='font-bold'>₹{Math.round(tshirt.price * 80)}</p>
                    </div>
                    <div className='flex justify-end'>
                        <Button className='bg-color_1 hover:bg-color_2 text-background_1 p-2 rounded-md'>Add to cart</Button>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ShopCard