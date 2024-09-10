import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const Profile = () => {
    return (
        <>
            <section className='bg-background_1 py-8 '>
                <div className='max-w-screen-lg flex justify-center items-center flex-col mx-auto'>
                    <h1 className='text-4xl text-color_2'> User Profile</h1>
                    <form className='py-8'>
                        <Card className='bg-white w-[420px] text-center flex flex-col '>
                            <CardHeader className='text-xl text-color_2 my-4 items-center'>
                                <Avatar className='w-[100px] h-[100px] shadow-xl'>
                                    <AvatarImage className='outline-none' src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-1 mb-2 text-left">
                                    <Label htmlFor="name">Name</Label>
                                    <Input required id="name" type="text" />
                                    {/* <span className='text-red-500 text-sm '>{registerForm.touched.name && registerForm.errors.name}</span> */}
                                </div>
                                <div className="space-y-1 mb-2 text-left">
                                    <Label htmlFor="email">Email</Label>
                                    <Input required id="email" type="email" />
                                </div>
                                <div className="space-y-1 mb-2 text-left">
                                    <Label htmlFor="password">Password</Label>
                                    <Input required id="password" type="password" />
                                </div>
                                <div className="space-y-1 mb-2 text-left">
                                    <Label htmlFor='address'>Address</Label>
                                    <Textarea required id='address' type='text' />
                                </div>
                                <div className='space-y-1 mb-2 text-left'> 
                                    <Label htmlFor='phone'>Phone</Label>
                                    <Input required id='phone' type='number' min={5555555555} max={9999999999} />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className='bg-color_2 text-background_1'>Save Changes</Button>
                            </CardFooter>
                        </Card>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Profile