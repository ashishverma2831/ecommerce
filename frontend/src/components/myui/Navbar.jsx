import React, { useRef, useState } from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

const Navbar = () => {

    const [searchInput, setsearchInput] = useState(false);
    const searchRef = useRef(null);
    const handleSearch = () => {
        setsearchInput(!searchInput);
        console.log(searchRef.current.value);
    }

    return (
        <section className='bg-background_1 z-20 sticky top-0 shadow-lg'>
            <nav className='bg-background_1 max-w-screen-2xl mx-auto text-lg flex justify-between p-4 gap-12 items-center'>
                <Link to={'/'}><img src='src/assets/logo.png' className='w-[88px] mix-blend-multiply' alt='logo' /></Link>
                <div className='hidden md:block text-color_2'>
                    <ul className='flex gap-8 items-center'>
                        <NavLink to={'/'} >Home</NavLink>
                        <NavLink to={'/login'} >Login</NavLink>
                        <NavLink to={'/shop'} >Shop</NavLink>
                    </ul>
                </div>
                <div className='hidden md:block text-color_2'>
                    <ul className='flex gap-8 items-center'>
                        {
                            searchInput ? (
                                <span className='flex relative items-center'>
                                    <Input
                                        ref={searchRef}
                                        type='text'
                                        placeholder='Search'
                                        className='bg-background_1 border-b-2 border-color_2 text-color_2'
                                    />
                                    <button
                                        className='absolute right-2'
                                        onClick={handleSearch}
                                    ><i className="fa-solid fa-magnifying-glass"></i> </button>
                                </span>
                            ) : (
                                <button
                                    onClick={() => {
                                        setsearchInput(!searchInput)
                                    }}
                                ><i className="fa-solid fa-magnifying-glass"></i> </button>
                            )
                        }
                        {/* <button
                            onClick={() => {setsearchInput(!searchInput)
                            }}
                        ><i className="fa-solid fa-magnifying-glass"></i> </button> */}
                        <Link to={'cart'}><i className="fa-solid fa-cart-shopping"></i></Link>
                        <Link to={'/login'}><i className="fa-solid fa-user"></i></Link>
                    </ul>
                </div>
                <div className='block md:hidden'>
                    <Sheet>
                        <SheetTrigger>
                            <svg className='w-[32px]' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 50 50">
                                <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
                            </svg>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle><Link to={'/'}><img src='src/assets/logo.png' className='w-[88px] mix-blend-multiply' alt='logo' /></Link></SheetTitle>
                                <SheetDescription className='p-2 flex flex-col gap-8 text-lg text-color_2'>
                                    <div className=''>
                                        <ul className='flex flex-col items-start gap-4'>
                                            <NavLink to={'/'} >Home</NavLink>
                                            <NavLink to={'/login'} >Login</NavLink>
                                            <NavLink to={'/shop'} >Shop</NavLink>
                                        </ul>
                                    </div>
                                    <div className=''>
                                        <ul className='flex items-center gap-8'>
                                            {/* <li> <i className="fa-solid fa-magnifying-glass"></i> </li> */}
                                            {
                                                searchInput ? (
                                                    <span className='flex relative items-center'>
                                                        <Input
                                                            ref={searchRef}
                                                            type='text'
                                                            placeholder='Search'
                                                            className='bg-background_1 border-b-2 border-color_2 text-color_2'
                                                        />
                                                        <button
                                                            className='absolute right-2'
                                                            onClick={handleSearch}
                                                        ><i className="fa-solid fa-magnifying-glass"></i> </button>
                                                    </span>
                                                ) : (
                                                    <button
                                                        onClick={() => {
                                                            setsearchInput(!searchInput)
                                                        }}
                                                    ><i className="fa-solid fa-magnifying-glass"></i> </button>
                                                )
                                            }
                                            <Link to={'cart'}><i className="fa-solid fa-cart-shopping"></i></Link>
                                            <Link to={'/login'}><i className="fa-solid fa-user"></i></Link>
                                        </ul>
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </section>
    )
}

export default Navbar