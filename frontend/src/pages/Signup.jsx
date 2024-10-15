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
import { useRegisterMutation } from '@/redux/api/authApi'

const registerSchema = yup.object().shape({
    name: yup.string().required('Name is required').min(3,'Name must be at least 3 characters'),
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('Password is required').min(8,'Password must be atleast 8 characters').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,'Password must contain at least one lowercase, one uppercase, one number and one special character').max(20,'Password must be atmost 20 characters')
})


const Signup = () => {

    const [register, {isLoading,data,error}] = useRegisterMutation();
    const [registerPassword, setRegisterPassword] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if(data){
            enqueueSnackbar('User Registered Successfully!',{variant:'success'})
            navigate('/');
        }
        if(error){
            enqueueSnackbar(`${error?.data?.message}`,{variant:'error'})
        }
    }, [error,data])

    const registerForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        onSubmit: async (values,{setSubmitting,resetForm}) => {
            console.log(values);
            register(values);
            // const res = await fetch('http://localhost:3000/api/users/register',{
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(values)
            // })
            // console.log(res.status);
            // setSubmitting(false);
            // if(res.status === 200){
            //     enqueueSnackbar('User Registered Successfully!',{variant:'success'})
            //     resetForm();
            //     navigate('/login');
            // }
            // else{
            //     enqueueSnackbar('User Registration Failed!',{variant:'error'})
            // }
        },
        validationSchema: registerSchema
    })

    return (
        <>
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
                                <Input onChange={registerForm.handleChange} required value={registerForm.values.password} type={registerPassword ? 'password' : 'text'} id="password" />
                                {registerPassword ? <i onClick={() => setRegisterPassword(false)} className="fa-solid fa-eye absolute right-2 "></i> : <i onClick={() => setRegisterPassword(true)} className="fa-regular fa-eye absolute right-2"></i>}
                            </div>
                            <span className='text-red-500 text-sm'>{registerForm.touched.password && registerForm.errors.password}</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className='bg-color_1 rounded-sm hover:bg-color_2 text-background_1' type='submit' disabled={isLoading}>{isLoading?'Registering...':'Register'}</Button>
                    </CardFooter>
                </Card>
            </form>
        </>
    )
}

export default Signup