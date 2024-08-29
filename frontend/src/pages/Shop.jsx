import React, { useState } from 'react'
import { tShirts } from '@/Data/data'
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const Shop = () => {

    const [tshirtList, setTshirtList] = useState(tShirts);

  return (
    <>
        <section>
            <div className='bg-gray-400 max-w-screen-xl mx-auto p-4'>
                <h1 className='text-3xl text-center'>Shop</h1>
                <div className='p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {
                        tshirtList.map((tshirt)=>{
                           return(
                            <Card className='bg-gray-200 border' key={tshirt.id}>
                                <CardContent>
                                    <img className='mix-blend-multiply' alt='tshirt' src={tshirt.image} />
                                </CardContent>
                                <CardFooter className='flex justify-between'>
                                    <p>{tshirt.size}</p>
                                    <p>{tshirt.color}</p>
                                    <p>${tshirt.price}</p>
                                </CardFooter>
                                <CardFooter className='flex justify-end'>
                                    <button className='bg-blue-500 text-white p-2 rounded-md'>Add to cart</button>
                                </CardFooter>
                            </Card>
                           )
                        })
                    }
                </div>
                {/* <div>
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem><PaginationPrevious></PaginationPrevious></PaginationItem>
                            <PaginationItem><PaginationNext></PaginationNext></PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div> */}
            </div>
        </section>
    </>
  )
}

export default Shop