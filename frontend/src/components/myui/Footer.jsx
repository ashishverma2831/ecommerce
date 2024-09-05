import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-background_1'>
      <div className='max-w-screen-lg mx-auto bg-background_1 text-color_2'>
        <div className='p-4 grid grid-cols-2 md:grid-cols-4 gap-4'>
          <div>
            <div className='w-fit'>
              <Link to={'/'} ><img src='/logo.png' className='w-[88px] mix-blend-multiply' alt='logo' /></Link>
            </div>
            <div className='flex flex-col mt-4 gap-4'>
              <p>Some text here fsflslkf lmfklwekln nwelkfnklwen newkfnklwen ewnfklnwekln wenfklwenfklew  klnewklnf  ewnfklewn neknween ewioweio oewinfne wenfemkj </p>
              <div className='flex text-xl justify-start gap-4'>
                <Link><i className="fa-brands fa-instagram"></i></Link>
                <Link><i className="fa-brands fa-facebook"></i></Link>
                <Link><i className="fa-brands fa-youtube"></i></Link>
                <Link><i className="fa-brands fa-x-twitter"></i></Link>
              </div>
            </div>
          </div>
          <div className='flex flex-col ml-8'>
            <h3 className='text-xl font-semibold'>Our Shop</h3>
            <ul className='flex flex-col gap-2 mt-4'>
              <li className='hover:underline hover:translate-x-1 duration-500 w-fit'><Link>Home</Link></li>
              <li className='hover:underline hover:translate-x-1 duration-500 w-fit'><Link>About</Link></li>
              <li className='hover:underline hover:translate-x-1 duration-500 w-fit'><Link>Contact</Link></li>
              <li className='hover:underline hover:translate-x-1 duration-500 w-fit'><Link>FAQ</Link></li>
            </ul>
          </div>
          <div className='flex flex-col'>
            <h3 className='text-xl font-semibold'>Help</h3>
            <ul className='flex flex-col gap-2 mt-4'>
              <li className='hover:underline hover:translate-x-1 duration-500 w-fit'><Link>Size guide</Link></li>
              <li className='hover:underline hover:translate-x-1 duration-500 w-fit'><Link>Shipping Policy</Link></li>
              <li className='hover:underline hover:translate-x-1 duration-500 w-fit'><Link>Refund Policy</Link></li>
              <li className='hover:underline hover:translate-x-1 duration-500 w-fit'><Link>Wear and Care FAQ</Link></li>
            </ul>
          </div>
          <div className='flex flex-col'>
            <h3 className='text-xl font-semibold'>About Us</h3>
            <ul className='flex flex-col gap-2 mt-4'>
              <li className='hover:underline hover:translate-x-1 duration-500 w-fit'><Link>Values</Link></li>
              <li className='hover:underline hover:translate-x-1 duration-500 w-fit'><Link>Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <p className='text-center p-4'>@copyright belong to its owner</p>
      </div>
    </footer>
  )
}

export default Footer