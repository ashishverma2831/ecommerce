import React from 'react'

const ErrorPage = () => {
  return (
    <>
        <section className='h-screen bg-[#919699] flex justify-center items-center'>
            <div className='w-[400px] text-center'>
                <img src="https://outoforder.in/wp-content/uploads/2020/06/error-404-t-shirt-image-2.jpg" alt="404" />
                <p className='text-3xl text-gray-700'> Page not found </p>
            </div>
        </section>
    </>
  )
}

export default ErrorPage