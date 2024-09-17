import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useFormik } from 'formik'
import React from 'react'

const ForgetPassword = () => {

    const forgetPasswordForm = useFormik({
        initialValues: {
            email: ''
        },
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return (
        <>
            <section className='bg-background_1'>
                <div className='bg-background_1 max-w-screen-sm h-screen flex justify-center items-center mx-auto'>
                    <form className='w-[400px]' onSubmit={forgetPasswordForm.handleSubmit}>
                        <Card className='text-color_2'>
                            <CardHeader className='text-center'>
                                <CardTitle className='text-color_2 text-xl'>Forget Password</CardTitle>
                                {/* <CardDescription>
                                    <p className='text-md text-color_1'>  </p>
                                </CardDescription> */}
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="email">Email</Label>
                                    <Input onChange={forgetPasswordForm.handleChange} placeholder='example@gmail.com' value={forgetPasswordForm.values.email} type='email' id="email" />
                                    <span className='text-xs text-red-500'>{forgetPasswordForm.errors.email && forgetPasswordForm.touched.email}</span>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className='bg-color_1 rounded-sm hover:bg-color_2 text-background_1' type='submit'>Submit</Button>
                            </CardFooter>
                        </Card>
                    </form>
                </div>
            </section>
        </>
    )
}

export default ForgetPassword