import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
// import useAppContext from '@/AppContext'
import { enqueueSnackbar } from 'notistack'

const profileSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    // password: Yup.string().required('Password is required'),
    // address: Yup.string().required('Address is required').min(20, 'Address is too short').max(200, 'Address is too long'),
    // phone: Yup.number().required('Phone is required').min(5555555555).max(9999999999)
})

const Profile = () => {

    // const {token, currentUser, setCurrentUser } = useAppContext();
    console.log('currentUser:', currentUser);

    const updateProfileForm = async (values) => {
        console.log('values:', values);
        
        const res = await fetch('http://localhost:3000/api/users/update-user', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
                'mode': 'no-cors'
            },
            body: JSON.stringify(values)
        });
        const data = await res.json();
        console.log(data);
        setCurrentUser(data);
        if (res.status === 200) {
            enqueueSnackbar('Profile updated successfully', { variant: 'success' });
        }
        else {
            enqueueSnackbar('Profile update failed', { variant: 'error' });
        }
    }

    return (
        <>
            <section className='bg-background_1 py-8 '>
                <div className='max-w-screen-lg flex justify-center items-center flex-col mx-auto'>
                    <h1 className='text-4xl text-color_2'> User Profile</h1>
                    {
                        currentUser !== null ? (
                            <Formik initialValues={currentUser} validationSchema={profileSchema} onSubmit={updateProfileForm}>
                                {(registerForm) => {
                                    return (
                                        <form className='py-8' onSubmit={registerForm.handleSubmit}>
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
                                                        <Input required id="name" onChange={registerForm.handleChange} value={registerForm.values.name} type="text" />
                                                        <span className='text-red-500 text-sm '>{registerForm.touched.name && registerForm.errors.name}</span>
                                                    </div>
                                                    <div className="space-y-1 mb-2 text-left">
                                                        <Label htmlFor="email">Email</Label>
                                                        <Input required id="email" onChange={registerForm.handleChange} value={registerForm.values.email} type="email" />
                                                        <span className='text-red-500 text-sm '>{registerForm.touched.email && registerForm.errors.email}</span>
                                                    </div>
                                                    {/* <div className="space-y-1 mb-2 text-left">
                                    <Label htmlFor="password">Password</Label>
                                    <Input required id="password" type="password" />
                                </div> */}
                                                    <div className="space-y-1 mb-2 text-left">
                                                        <Label htmlFor='address'>Address</Label>
                                                        <Textarea id='address' onChange={registerForm.handleChange} value={registerForm.values.address} type='text' />
                                                        <span className='text-red-500 text-sm '>{registerForm.touched.address && registerForm.errors.address}</span>
                                                    </div>
                                                    <div className='space-y-1 mb-2 text-left'>
                                                        <Label htmlFor='phone'>Phone</Label>
                                                        <Input id='phone' type='number' onChange={registerForm.handleChange} value={registerForm.values.phone} min={5555555555} max={9999999999} />
                                                        <span className='text-red-500 text-sm '>{registerForm.touched.phone && registerForm.errors.phone}</span>
                                                    </div>
                                                </CardContent>
                                                <CardFooter>
                                                    <Button type='submit' className='bg-color_2 text-background_1'>Save Changes</Button>
                                                </CardFooter>
                                            </Card>
                                        </form>
                                    )
                                }}
                            </Formik>
                        ) : (
                            <div className='text-color_2'>Loading...</div>
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default Profile