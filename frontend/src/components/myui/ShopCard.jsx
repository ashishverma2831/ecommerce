import React from 'react'
import { Button } from '../ui/button'

const ShopCard = ({tshirt,id}) => {
    
    return (
        <>
            <div className='bg-background_2 relative border overflow-hidden rounded-md shadow-xl hover:scale-105 duration-500' key={id}>
                <img className='mix-blend-multiply' alt='tshirt' src={tshirt.image} />
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
                <p className='absolute hover:scale-105 text-color_2 font-semibold w-[30px] h-[30px] flex justify-center items-center top-2 left-2 shadow-2xl bg-background_1 rounded-full z-10 p-2'>{tshirt.rating}<i className="fa-solid fa-star text-[12px]"></i></p>
            </div>
        </>
    )
}

export default ShopCard