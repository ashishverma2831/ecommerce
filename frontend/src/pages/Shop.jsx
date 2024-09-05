import React, { useState } from 'react'
import { tShirts } from '@/Data/data'
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';
import ShopCard from '@/components/myui/ShopCard';
import { tshirtFilters } from '@/Data/data';
import { useFormik } from 'formik';
import { filterColors, filterPrices, filterSizes } from '@/Data/data';

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const Shop = () => {

    const [tshirtList, setTshirtList] = useState(tShirts);

    const [openColor, setOpenColor] = useState(false);
    const [openSize, setOpenSize] = useState(false);
    const [openPrice, setOpenPrice] = useState(false);

    const [colorValue, setColorValue] = useState("");
    const [sizeValue, setSizeValue] = useState("");
    const [priceValue, setPriceValue] = useState("");

    const filterObject = {
        size: sizeValue,
        color: colorValue,
        price: priceValue
    }
 
    const filterForm = useFormik({
        initialValues: filterObject,
        onSubmit: (values,{resetForm}) => {
            values.size = sizeValue;
            values.color = colorValue;
            values.price = priceValue;
            console.log(values);

            let filteredTshirts = tShirts.filter((tshirt) => {
                let size = tshirt.size.toLowerCase() === values.size.toLowerCase() || values.size.toLowerCase() === '';
                let color = tshirt.color.toLowerCase() === values.color.toLowerCase() || values.color.toLowerCase() === '';
                let price = tshirt.price <= values.price || values.price === '';
                return size && color && price;
            })
            console.log(filteredTshirts);
            setTshirtList(filteredTshirts);
            resetForm();
        }
    })

    return (
        <>
            <section className='bg-background_1'>
                <div className='bg-background_1 text-color_2 max-w-screen-xl mx-auto p-4'>
                    <h1 className='text-4xl text-center my-6 font-semibold'>Shop Tshirts now</h1>
                    <div className='py-4 flex flex-col md:flex-row gap-8'>
                        <div className='bg-background_2 h-fit z-30 md:sticky top-[100px] shadow-xl p-2'>
                            <h3 className='text-2xl p-2'>Filters</h3>
                            <form onSubmit={filterForm.handleSubmit} className='p-2 md:w-[240px] flex flex-col gap-4 justify-center'>
                                {/* <select className='p-2 rounded-md border-none outline-none bg-background_1' id='size' onChange={filterForm.handleChange} value={filterForm.values.size}>
                                    <option value=''>Select Size</option>
                                    <option value='S'>Small</option>
                                    <option value='M'>Medium</option>
                                    <option value='L'>Large</option>
                                    <option value='XL'>X-Large</option>
                                </select>
                                <select className='p-2 rounded-md border-none outline-none bg-background_1' id='color' onChange={filterForm.handleChange} value={filterForm.values.color}>
                                    <option value=''>Select Color</option>
                                    <option value='black'>Black</option>
                                    <option value='white'>White</option>
                                    <option value='red'>Red</option>
                                    <option value='blue'>Blue</option>
                                    <option value='green'>Green</option>
                                </select>
                                <select className='p-2 rounded-md border-none outline-none bg-background_1' id='price' onChange={filterForm.handleChange} value={filterForm.values.price}>
                                    <option value=''>Select Price</option>
                                    <option value='500'>0-500</option>
                                    <option value='1000'>500-1000</option>
                                    <option value='1500'>1000-1500</option>
                                    <option value='2000'>1500-2000</option>
                                    <option value='2000'>2000 above</option>
                                </select> */}
                                <Popover open={openSize} onOpenChange={setOpenSize}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            aria-expanded={openSize}
                                            className="w-full justify-between"
                                        >
                                            {sizeValue
                                                ? filterSizes.find((size) => size.value === sizeValue)?.label
                                                : "Select Size..."}
                                            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-full p-0">
                                        <Command>
                                            <CommandInput placeholder="Search Size..." className="h-9" />
                                            <CommandList>
                                                <CommandEmpty>No Size found.</CommandEmpty>
                                                <CommandGroup>
                                                    {filterSizes.map((size) => (
                                                        <CommandItem
                                                            key={size.value}
                                                            value={size.value}
                                                            onSelect={(currentValue) => {
                                                                setSizeValue(currentValue === sizeValue ? "" : currentValue)
                                                                setOpenSize(false);
                                                            }}
                                                        >
                                                            {size.label}
                                                            <CheckIcon
                                                                className={cn(
                                                                    "ml-auto h-4 w-4",
                                                                    sizeValue === size.value ? "opacity-100" : "opacity-0"
                                                                )}
                                                            />
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                                <Popover open={openPrice} onOpenChange={setOpenPrice}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            aria-expanded={openPrice}
                                            className="w-full justify-between"
                                        >
                                            {priceValue
                                                ? filterPrices.find((price) => price.value === priceValue)?.label
                                                : "Select Price..."}
                                            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-full p-0">
                                        <Command>
                                            <CommandInput placeholder="Search Price..." className="h-9" />
                                            <CommandList>
                                                <CommandEmpty>No Price found.</CommandEmpty>
                                                <CommandGroup>
                                                    {filterPrices.map((price) => (
                                                        <CommandItem
                                                            key={price.value}
                                                            value={price.value}
                                                            onSelect={(currentValue) => {
                                                                setPriceValue(currentValue === priceValue ? "" : currentValue)
                                                                setOpenPrice(false);
                                                            }}
                                                        >
                                                            {price.label}
                                                            <CheckIcon
                                                                className={cn(
                                                                    "ml-auto h-4 w-4",
                                                                    priceValue === price.value ? "opacity-100" : "opacity-0"
                                                                )}
                                                            />
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                                <Popover open={openColor} onOpenChange={setOpenColor}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            aria-expanded={openColor}
                                            className="w-full justify-between"
                                        >
                                            {colorValue
                                                ? filterColors.find((color) => color.value === colorValue)?.label
                                                : "Select Color..."}
                                            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-full p-0">
                                        <Command>
                                            <CommandInput placeholder="Search Color..." className="h-9" />
                                            <CommandList>
                                                <CommandEmpty>No Color found.</CommandEmpty>
                                                <CommandGroup>
                                                    {filterColors.map((color) => (
                                                        <CommandItem
                                                            key={color.value}
                                                            value={color.value}
                                                            onSelect={(currentValue) => {
                                                                setColorValue(currentValue === colorValue ? "" : currentValue)
                                                                setOpenColor(false);
                                                            }}
                                                        >
                                                            {color.label}
                                                            <CheckIcon
                                                                className={cn(
                                                                    "ml-auto h-4 w-4",
                                                                    colorValue === color.value ? "opacity-100" : "opacity-0"
                                                                )}
                                                            />
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                                <Button type='submit' className='bg-color_1 hover:bg-color_2 text-background_1 p-2 rounded-md'>Filter</Button>
                            </form>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {
                                tshirtList.map((tshirt) => {
                                    return (
                                        <ShopCard tshirt={tshirt} key={tshirt.id} id={tshirt.id} />
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