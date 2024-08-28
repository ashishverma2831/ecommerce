import React from 'react'
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
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className='bg-red-300 text-lg flex justify-between p-4 gap-12 items-center'>
                <h3 className='italic font-semibold'>Logo</h3>
                <div className='hidden md:block'>
                    <ul className='flex gap-8'>
                        <NavLink to={'/'} >Home</NavLink>
                        <NavLink to={'/login'} >Login</NavLink>
                        <NavLink to={'/shop'} >Shop</NavLink>
                    </ul>
                </div>
                <div className='hidden md:block'>
                    <ul className='flex gap-8'>
                        <li> <i className="fa-solid fa-magnifying-glass"></i> </li>
                        <li><i className="fa-solid fa-cart-shopping"></i></li>
                        <li><i className="fa-solid fa-user"></i></li>
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
                                <SheetTitle>Are you absolutely sure?</SheetTitle>
                                <SheetDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </>
    )
}

export default Navbar