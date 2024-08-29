import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className='bg-red-300'>
        <div className='p-4 grid grid-cols-2 md:grid-cols-4 gap-4'>
          <div>
            <h3 className='text-xl font-semibold'>Logo</h3>
            <div className='flex flex-col mt-4 gap-4'>
              <p className='text-gray-500'>Some text here fsflslkf lmfklwekln nwelkfnklwen newkfnklwen ewnfklnwekln wenfklwenfklew  klnewklnf  ewnfklewn neknween ewioweio oewinfne wenfemkj </p>
              <div className='flex text-xl justify-start gap-4'>
                <Link><i className="fa-brands fa-instagram"></i></Link>
                <Link><i className="fa-brands fa-facebook"></i></Link>
                <Link><i className="fa-brands fa-youtube"></i></Link>
                <Link><i className="fa-brands fa-x-twitter"></i></Link>
              </div>
            </div>
          </div>
          <div>
            <h3 className='text-xl font-semibold'>Our Shop</h3>
            <ul className='flex flex-col gap-2 mt-4'>
              <li className='hover:underline hover:translate-x-1 duration-500 w-fit'><Link>Home</Link></li>
              <li className='hover:underline hover:translate-x-1 duration-500 w-fit'><Link>About</Link></li>
              <li className='hover:underline hover:translate-x-1 duration-500 w-fit'><Link>Contact</Link></li>
              <li className='hover:underline hover:translate-x-1 duration-500 w-fit'><Link>FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-semibold'>Help</h3>
            <ul className='flex flex-col gap-2 mt-4'>
              <li className='hover:underline hover:translate-x-1 duration-500 w-fit'><Link>Size guide</Link></li>
              <li className='hover:underline hover:translate-x-1 duration-500 w-fit'><Link>Shipping Policy</Link></li>
              <li className='hover:underline hover:translate-x-1 duration-500 w-fit'><Link>Refund Policy</Link></li>
              <li className='hover:underline hover:translate-x-1 duration-500 w-fit'><Link>Wear and Care FAQ</Link></li>
            </ul>
          </div>
          <div>
          <h3 className='text-xl font-semibold'>About Us</h3>
            <ul className='flex flex-col gap-2 mt-4'>
              <li className='hover:underline hover:translate-x-1 duration-500 w-fit'><Link>Values</Link></li>
              <li className='hover:underline hover:translate-x-1 duration-500 w-fit'><Link>Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <p className='text-center p-4'>@copyright belong to its owner</p>
      </footer>
    </>
  )
}

export default Footer