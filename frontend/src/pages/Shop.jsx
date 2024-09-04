import React, { useState } from 'react'
import { tShirts } from '@/Data/data'
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';
import ShopCard from '@/components/myui/ShopCard';
import { tshirtFilters } from '@/Data/data';

const Shop = () => {

    const [tshirtList, setTshirtList] = useState(tShirts);

    return (
        <>
            <section className='bg-background_1'>
                <div className='bg-background_1 text-color_2 max-w-screen-xl mx-auto p-4'>
                    <h1 className='text-3xl text-center mb-6 font-semibold'>Shop Tshirts now</h1>
                    <div className='bg-red-600 py-4 flex gap-8'>
                        <div className='bg-orange-400 p-2'>
                            <h3 className='text-xl'>Filters</h3>
                            <div>
                                
                            </div>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                            {
                                tshirtList.map((tshirt) => {
                                    return (
                                        <ShopCard tshirt={tshirt} key={tshirt.id} />
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

export default Shop