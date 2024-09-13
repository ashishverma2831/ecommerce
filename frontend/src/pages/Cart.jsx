import useAppContext from '@/AppContext';
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { getUserByToken, currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin, logout } = useAppContext();

  useEffect(() => {
    getUserByToken();
  }, [])

  
  const [cartItem, setCartItem] = useState([]);
  // setCurrentUser(currentUser.cart = cartItem);

  const getUserCartItems = async () => {
    const res = await fetch('http://localhost:3000/api/users/get-user-cart', {
      method: 'GET',
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    });
    const data = await res.json()
    .then((result) => {
      console.log(result);
      setCartItem(result);
    }).catch((err) => {
      console.log(err);
    });
  }
  useEffect(() => {
    getUserCartItems();
  }, [currentUser])
  console.log('cartItem:', cartItem);
  

  return (
    <>
      <section className='bg-background_1 py-8'>
        {
          currentUser !== null && cartItem.length === 0 ? (
            <div className='max-w-screen-md flex py-4 text-color_2 flex-col gap-2 justify-center items-center mx-auto'>
              <img className='w-[400px] mix-blend-multiply' src='https://media.istockphoto.com/id/861576608/vector/empty-shopping-bag-icon-online-business-vector-icon-template.jpg?s=612x612&w=0&k=20&c=I7MbHHcjhRH4Dy0NVpf4ZN4gn8FVDnwn99YdRW2x5k0=' alt='cart' />
              <h1 className='text-3xl text-center'>Your cart is empty</h1>
              <p className='text-center'>Looks like you haven't added any items to the cart yet.</p>
              <Link to={currentUser !== null && isLoggedIn ? '/shop' : '/login'}><Button className='text-background_1 my-4 bg-color_1 hover:bg-color_2'>Shop now</Button></Link>
            </div>
          ) :
            <div className='max-w-screen-lg mx-auto py-8 justify-between items-start bg-background_1 p-4 flex flex-col md:flex-row gap-8'>
              <div className='w-full '>
                <table className='w-full'>
                  <thead>
                    <tr>
                      <th className='text-left'>Product</th>
                      <th className='text-left'>Description</th>
                      <th className='text-left'>Quantity</th>
                      <th className='text-left'>Price</th>
                      <th className='text-left'>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartItem.map((product, index) => (
                        <tr key={index}>
                          <td>
                            <img className='w-16 h-16' src={product.image} alt={product.title} />
                          </td>
                          <td>
                            <h1 className='text-xl font-bold'>{product.title}</h1>
                            <p className='text-md'>{product.description}</p>
                          </td>
                          <td>
                            <p className='text-md'>{product.quantity}</p>
                          </td>
                          <td>
                            <p className='text-md'>₹{Math.round(product.price)}</p>
                          </td>
                          <td>
                            <p className='text-md'>₹{Math.round(product.price * product.quantity)}</p>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
              <div className='flex flex-col text-color_2 gap-4'>
                <h1 className='text-3xl font-bold'>Total: ₹{cartItem.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h1>
                <div className='flex justify-end'>
                  <Button className='bg-color_1 hover:bg-color_2 text-background_1 p-2 rounded-md'>Proceed to checkout</Button>
                </div>
              </div>
            </div>
        }
      </section>
    </>
  )
}

export default Cart