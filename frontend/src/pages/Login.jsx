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
import * as yup from 'yup'
import { enqueueSnackbar } from 'notistack'
import { useNavigate } from 'react-router-dom'


const loginSchema = yup.object().shape({
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('Password is required')
})

const registerSchema = yup.object().shape({
    name: yup.string().required('Name is required').min(3,'Name must be at least 3 characters'),
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('Password is required').min(8,'Password must be atleast 8 characters').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,'Password must contain at least one lowercase, one uppercase, one number and one special character').max(20,'Password must be atmost 20 characters')
})

const Login = () => {

    const [loginPassword, setLoginPassword] = useState(true);
    const [registerPassword, setRegisterPassword] = useState(true);
    const navigate = useNavigate();

    const loginForm = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            console.log(values);
            const res = await fetch('http://localhost:3000/api/users/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Accept': 'application/json',
                    // 'Access-Control-Allow-Origin': '*',
                    // 'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    // 'Access-Control-Allow-Credentials': true
                },
                body: JSON.stringify(values)
            });
            console.log(res.status);

            if(res.status === 200){
                console.log('User Logged In Successfully!');
                const data = await res.json();
                localStorage.setItem('token',data.accesstoken);
                // console.log(data);
                // sessionStorage.setItem('user',JSON.stringify(data));

                enqueueSnackbar('User Logged In Successfully!',{variant:'success'})
                navigate('/');
            }
            else if(res.status === 400){
                enqueueSnackbar('User does not exist!',{variant:'error'})
            }
            else if(res.status === 401){
                enqueueSnackbar('Incorrect Password!',{variant:'error'})
            }
            else{
                enqueueSnackbar('User Login Failed!',{variant:'error'})
            }
        },
        validationSchema: loginSchema
    })

    const registerForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        onSubmit: async (values,{setSubmitting,resetForm}) => {
            console.log(values);
            const res = await fetch('http://localhost:3000/api/users/register',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Accept': 'application/json',
                    // 'Access-Control-Allow-Origin': '*',
                    // 'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    // 'Access-Control-Allow-Credentials': true
                },
                body: JSON.stringify(values)
            })
            console.log(res.status);
            setSubmitting(false);
            if(res.status === 200){
                enqueueSnackbar('User Registered Successfully!',{variant:'success'})
                resetForm();
                navigate('/login');
            }
            else{
                enqueueSnackbar('User Registration Failed!',{variant:'error'})
            }
        },
        validationSchema: registerSchema
    })

    return (
        <>
            <section className='bg-background_1 text-color_2 h-screen flex justify-center items-center'>
                <Tabs defaultValue="login" className="w-[400px]">
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
                                        <Input onChange={loginForm.handleChange} required placeholder='example@gmail.com' value={loginForm.values.email} type='email' id="email" />
                                        <span className='text-red-500 text-sm'>{loginForm.touched.email && loginForm.errors.email}</span>
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="password">Password</Label>
                                        <div className='flex relative items-center'>
                                            <Input onChange={loginForm.handleChange} required value={loginForm.values.password} type={loginPassword?'password':'text'} id="password" />
                                            {loginPassword ? <i onClick={()=>setLoginPassword(false)} className="fa-solid fa-eye absolute right-2 "></i> : <i onClick={()=>setLoginPassword(true)} className="fa-regular fa-eye absolute right-2"></i>}
                                        </div>
                                        <span className='text-red-500 text-sm'>{loginForm.touched.password && loginForm.errors.password}</span>
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
                                        <Input onChange={registerForm.handleChange} required value={registerForm.values.name} id="name" type="text" placeholder='Salman Khan' />
                                        <span className='text-red-500 text-sm '>{registerForm.touched.name && registerForm.errors.name}</span>
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="email">Email</Label>
                                        <Input onChange={registerForm.handleChange} required value={registerForm.values.email} id="email" type="email" placeholder='salmankhan@gmail.com' />
                                        <span className='text-red-500 text-sm'>{registerForm.touched.email && registerForm.errors.email}</span>
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="password">Password</Label>
                                        <div className='flex relative items-center'>
                                            <Input onChange={registerForm.handleChange} required value={registerForm.values.password} type={registerPassword?'password':'text'} id="password" />
                                            {registerPassword ? <i onClick={()=>setRegisterPassword(false)} className="fa-solid fa-eye absolute right-2 "></i> : <i onClick={()=>setRegisterPassword(true)} className="fa-regular fa-eye absolute right-2"></i>}
                                        </div>
                                        <span className='text-red-500 text-sm'>{registerForm.touched.password && registerForm.errors.password}</span>
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