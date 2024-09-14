import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { tShirts } from '@/Data/data';
import { Button } from '@/components/ui/button';
import TshirtCard from '@/components/myui/TshirtCard';
import { recommendedProducts, recentlViewedProducts, similarProducts } from '@/Data/data';
import useAppContext from '@/AppContext';
import { enqueueSnackbar } from 'notistack'
import { useFormik } from 'formik';


const TshirtDetail = () => {

  // const { getUserByToken, currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin, logout } = useAppContext();
  // const { id,userId } = useParams();
  // const navigate = useNavigate();
  // const [product, setProduct] = useState(tShirts[id - 1]);
  // console.log('product:', product);
  // const [currentUserId, setCurrentUserId] = useState(null);
  // console.log('currentUserId:', currentUserId);

  // const getUser = async () => {
  //   const token = localStorage.getItem('token');
  //   const response = await fetch('http://localhost:3000/api/users/user-info', {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': token
  //     }
  //   });
  //   const data = await response.json();
  //   console.log(data);
  //   setCurrentUserId(data._id);
  // }

  // useEffect(() => {
  //   getUser();
  // }, [])

  // const cartForm = useFormik({
  //   initialValues: {
  //     quantity: 1,
  //     price: product.price,
  //     color: product.color,
  //     image: product.image,
  //     description: product.description,
  //     size: 'M',
  //     productId: product._id,
  //     userId: userId
  //   },
  //   onSubmit: async (values) => {
  //     console.log('values:', values);
  //     const res = await fetch('http://localhost:3000/api/users/add-to-cart', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': localStorage.getItem('token')
  //       },
  //       body: JSON.stringify(values)
  //     })
  //     const data = await res.json();
  //     console.log(data);
  //     if (data.msg) {
  //       enqueueSnackbar(data.msg, { variant: 'error' });
  //     }
  //     else {
  //       enqueueSnackbar('Product added to cart.', { variant: 'success', action: <Button onClick={() => navigate(`/user/${currentUserId}/cart`)} className='bg-green-400/50 hover:bg-green-700 text-background_1 p-2 rounded-md'>Checkout now</Button> });
  //     }
  //   }
  // })

  return (
    <>
      <section className='bg-background_1 flex flex-col gap-16 pb-8'>
        {/* <form onSubmit={cartForm.handleSubmit} className='max-w-screen-lg mx-auto py-8 justify-between items-start bg-background_1 p-4 flex flex-col md:flex-row gap-8'>
          <div className='w-full '>
            <img className='shadow-md' src={product.image} alt={product.title} />
          </div>
          <div className='flex flex-col text-color_2 gap-4'>
            <h1 className='text-5xl font-bold'>{product.title}</h1>
            <p className='text-xl font-semibold'>{product.description}</p>
            <ul className='text-color_1 list-disc px-6'>
              <li>Material: 100% Cotton for all-day comfort.</li>
              <li>Customization: Print on the pocket (3x3 or 4x4 inches) and back (up to A4 size) with high-quality digital prints.
              </li>
              <li>Fit: Half sleeves; available in sizes S, M, L, XL, XXL.</li>
              <li>Colors: Classic Black and White.</li>
              <li>MOQ: Order starting from 1 T-shirt.</li>
              <li>
                Care Instructions: Machine wash cold, tumble dry low, do not bleach, warm iron, do not dry clean.
              </li>
            </ul>
            <ul className='text-color_2 list-disc px-6'>
              <li>Color: {product.color}</li>
              <li>Size: {product.size}</li>
              <li>Rating: {product.rating}</li>
            </ul>
            <p className='text-lg'>Ideal for corporate events, team outings, or everyday wear, these polos combine comfort and style, effortlessly boosting your brand.</p>
            <p className='font-semibold'> <span className='font-normal line-through'>₹1000</span> <span className='text-3xl mx-1'>₹{product.price}</span> <span className='text-green-600 font-medium'>10% Off</span> </p>
            <div className='flex justify-end'>
              <Button
                type='submit' disabled={currentUser === null || !isLoggedIn} className='bg-color_1 hover:bg-color_2 text-background_1 p-2 rounded-md'>Add to cart</Button>
            </div>
          </div>
        </form> */}

        <div className='max-w-screen-xl my-8 mx-auto flex flex-col justify-center items-center'>
          <h1 className='text-color_2 font-semibold text-4xl text-center capitalize'>Make your own customized t-shirts</h1>
          <p className='text-color_2 text-center'> Make your own brands, your own style customizable t-shirts in few minutes and deliver it anywhere worldwide that makes a lasting impression.</p>
          <Link to={'/design-your-tshirt'}><Button className='bg-color_1 w-fit hover:bg-color_2 mt-6 text-background_1 p-2 rounded-md'>Customize Now</Button></Link>
        </div>

        <div className='max-w-screen-xl mx-auto mb-8'>
          <div className='flex flex-col gap-8 '>
            <h1 className='text-color_2 font-semibold text-3xl'>Similar Products</h1>
            <div className='flex flex-wrap justify-center items-center gap-8'>
              {
                similarProducts.map((tshirt, index) => {
                  return (
                    <TshirtCard product={product} setProduct={setProduct} key={index} tshirt={tshirt} />
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className='max-w-screen-xl mx-auto mb-8'>
          <div className='flex flex-col gap-8'>
            <h1 className='text-color_2 font-semibold text-3xl'>Recently Viewed Products</h1>
            <div className='flex flex-wrap justify-center items-center gap-8'>
              {
                recentlViewedProducts.map((tshirt, index) => {
                  return (
                    <TshirtCard product={product} setProduct={setProduct} key={index} tshirt={tshirt} />
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className='max-w-screen-xl mx-auto pb-8'>
          <div className='flex flex-col gap-8'>
            <h1 className='text-color_2 font-semibold text-3xl'>Recommended Products</h1>
            <div className='flex flex-wrap justify-center items-center gap-8'>
              {
                recommendedProducts.map((tshirt, index) => {
                  return (
                    <TshirtCard product={product} setProduct={setProduct} key={index} tshirt={tshirt} />
                  )
                })
              }
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default TshirtDetail