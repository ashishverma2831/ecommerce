import React from 'react'

const ReviewCard = ({ review, id }) => {
    return (
        <>
            <div key={id} className='w-full rounded-lg justify-center items-center mx-auto sm:flex gap-2'>
                <div className='img-quotation flex justify-center items-center w-[160px]'>
                    <img className='bg-contain w-full sm:w-32 sm:h-32 rounded-lg hover:bg-cover duration-500' src={review.image} />
                </div>
                <div className=' flex flex-col gap-2 py-2 sm:p-4 flex-1'>
                    <p className='sm:text-md text-[13px] font-normal text-gray-500'> {review.description} </p>
                    <div className='sm:text-lg text-sm'>
                        <p className='text-blue-500 font-normal'> {review.name} </p>
                        <p className='text-gray-900 font-normal'> Owner - {review.owner} </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewCard