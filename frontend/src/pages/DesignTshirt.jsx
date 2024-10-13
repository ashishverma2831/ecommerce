import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
// import useAppContext from '@/AppContext';

const DesignTshirt = () => {
  // const {cart,setCart, currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin, logout } = useAppContext();

  return (
    <>
      <section className='bg-background_1'>
        <div className='max-w-screen-xl mx-auto text-color_2'>
          <div className='flex bg-red-400 flex-col items-center justify-center py-10'>
            <h1 className='text-3xl font-bold'>Design Your Tshirt</h1>
            <p className='text-lg'>Choose your tshirt color and design</p>
            <div className='bg-blue-400 flex justify-center items-center'>
              {/* <div></div> */}
              <div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default DesignTshirt