import React, { useState } from 'react'
import { tShirts } from '@/Data/data'
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';
import ShopCard from '@/components/myui/ShopCard';

const Shop = () => {

    const [tshirtList, setTshirtList] = useState(tShirts);

    return (
        <>
            <section className='bg-background_1'>
                <div className='bg-background_1 text-color_2 max-w-screen-xl mx-auto p-4'>
                    <h1 className='text-3xl text-center font-semibold'>Shop Tshirts now</h1>
                    <div className='p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        {
                            tshirtList.map((tshirt) => {
                                return (
                                    <ShopCard tshirt={tshirt} key={tshirt.id} />
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