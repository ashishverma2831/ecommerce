import React from 'react'

const ReviewCard = ({ review, id }) => {
    return (
        <>
            <div key={id} className='w-full rounded-lg justify-center items-center mx-auto sm:flex gap-2'>
                <div className='img-quotation flex justify-center items-center w-[160px]'>
                   {
                    review.image?<img className='bg-contain w-full sm:w-32 sm:h-32 rounded-lg hover:bg-cover duration-500' src={review.image} />:<img className='bg-contain mix-blend-color-burn w-full sm:w-32 sm:h-32 rounded-lg hover:bg-cover duration-500' src={'https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png'} />
                   }
                </div>
                <div className=' flex flex-col gap-2 py-2 sm:p-4 flex-1'>
                    <p className='sm:text-md text-[16px] font-normal text-gray-500'> {review.description} </p>
                    <div className='sm:text-[14px] text-sm'>
                        <p className='text-blue-500 font-normal'> {review.name} </p>
                        <p className='text-gray-900 font-normal'> Email - {review.owner} </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewCard