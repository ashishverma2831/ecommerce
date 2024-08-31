import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useFormik } from 'formik'

const Login = () => {

    const [loginPassword, setLoginPassword] = useState(true);
    const [registerPassword, setRegisterPassword] = useState(true);

    const loginForm = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            console.log(values)
        }
    })

    const registerForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return (
        <>
            <section className='bg-background_1 text-color_2 h-screen flex justify-center items-center'>
                <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-2 text-color_2 bg-background_2">
                        <TabsTrigger value="login" className='text-color_2' >Login</TabsTrigger>
                        <TabsTrigger value="register" className='text-color_2' >Create Account</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login">
                        <form onSubmit={loginForm.handleSubmit}>
                            <Card className='text-color_2'>
                                <CardHeader className='text-center'>
                                    <CardTitle className='text-color_2'>Login here</CardTitle>
                                    <CardDescription>
                                        Log in to your account to continue.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <Label htmlFor="email">Email</Label>
                                        <Input onChange={loginForm.handleChange} placeholder='example@gmail.com' value={loginForm.values.email} type='email' id="email" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="password">Password</Label>
                                        <div className='flex relative items-center'>
                                            <Input onChange={loginForm.handleChange} value={loginForm.values.password} type={loginPassword?'password':'text'} id="password" />
                                            {loginPassword ? <i onClick={()=>setLoginPassword(false)} className="fa-solid fa-eye absolute right-2 "></i> : <i onClick={()=>setLoginPassword(true)} className="fa-regular fa-eye absolute right-2"></i>}
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className='bg-color_1 rounded-sm hover:bg-color_2 text-background_1' type='submit'>Login</Button>
                                </CardFooter>
                            </Card>
                        </form>
                    </TabsContent>
                    <TabsContent value="register">
                        <form onSubmit={registerForm.handleSubmit}>
                            <Card className='text-color_2'>
                                <CardHeader className='text-center'>
                                    <CardTitle className='text-color_2'>Register here</CardTitle>
                                    <CardDescription>
                                        Don't have an account? Register here.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <Label htmlFor="name">Name</Label>
                                        <Input onChange={registerForm.handleChange} value={registerForm.values.name} id="name" type="text" placeholder='Salman Khan' />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="email">Email</Label>
                                        <Input onChange={registerForm.handleChange} value={registerForm.values.email} id="email" type="email" placeholder='salmankhan@gmail.com' />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="password">Password</Label>
                                        <div className='flex relative items-center'>
                                            <Input onChange={registerForm.handleChange} value={registerForm.values.password} type={registerPassword?'password':'text'} id="password" />
                                            {registerPassword ? <i onClick={()=>setRegisterPassword(false)} className="fa-solid fa-eye absolute right-2 "></i> : <i onClick={()=>setRegisterPassword(true)} className="fa-regular fa-eye absolute right-2"></i>}
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className='bg-color_1 rounded-sm hover:bg-color_2 text-background_1' type='submit'>Register</Button>
                                </CardFooter>
                            </Card>
                        </form>
                    </TabsContent>
                </Tabs>
            </section>
        </>
    )
}

export default Login