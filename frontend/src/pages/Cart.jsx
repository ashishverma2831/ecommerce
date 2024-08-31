import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <>
        <section className='bg-background_1 py-8'>
            <div className='max-w-screen-md flex py-4 text-color_2 flex-col gap-2 justify-center items-center mx-auto'>
                <img className='w-[400px] mix-blend-multiply' src='https://media.istockphoto.com/id/861576608/vector/empty-shopping-bag-icon-online-business-vector-icon-template.jpg?s=612x612&w=0&k=20&c=I7MbHHcjhRH4Dy0NVpf4ZN4gn8FVDnwn99YdRW2x5k0=' alt='cart' />
                <h1 className='text-3xl text-center'>Your cart is empty</h1>
                <p className='text-center'>Looks like you haven't added any items to the cart yet.</p>
                <Link to={'/login'}><Button className='text-background_1 my-4 bg-color_1 hover:bg-color_2'>Shop now</Button></Link>
            </div>
        </section>
    </>
  )
}

export default Cart