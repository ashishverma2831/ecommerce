import React, { useEffect, useState } from 'react'
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
import { useLoginMutation } from '@/redux/api/authApi'
import Register from './Signup'
import { useSelector } from 'react-redux'


const loginSchema = yup.object().shape({
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('Password is required')
})

const Login = () => {

    const [ login, { error, isLoading, data}] = useLoginMutation();
    // const { isAuthenticated } = useSelector((state) => state.auth);
    console.log('data:',data);

    const [loginPassword, setLoginPassword] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if(data){
            localStorage.setItem('token',data?.token);
            sessionStorage.setItem('token',data?.token);
            
            enqueueSnackbar('User Logged In Successfully!',{variant:'success'})
            navigate('/');
        }
        // if(isAuthenticated){
        //     navigate('/');
        // }
        if(error){
            enqueueSnackbar(`${error?.data?.message}`,{variant:'error'})
        }
    }, [error,data])

    const loginForm = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            console.log(values);
            await login(values);
            // const res = await fetch('http://localhost:3000/api/users/login',{
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(values)
            // });
            // console.log(res.status);

            // if(res.status === 200){
            //     console.log('User Logged In Successfully!');
            //     localStorage.setItem('token',data?.token);
            //     enqueueSnackbar('User Logged In Successfully!',{variant:'success'})
            //     navigate('/');
            // }
            // else if(res.status === 400){
            //     enqueueSnackbar('User does not exist!',{variant:'error'})
            // }
            // else if(res.status === 401){
            //     enqueueSnackbar('Incorrect Password!',{variant:'error'})
            // }
            // else{
            //     enqueueSnackbar('User Login Failed!',{variant:'error'})
            // }
        },
        validationSchema: loginSchema
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
                                    <Button className='bg-color_1 rounded-sm hover:bg-color_2 text-background_1' type='submit' disabled={isLoading} >{isLoading?'Authenticating...':'Login'}</Button>
                                </CardFooter>
                            </Card>
                        </form>
                    </TabsContent>
                    <TabsContent value="register">
                        <Register />
                    </TabsContent>
                </Tabs>
            </section>
        </>
    )
}

export default Login