import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useFormik } from 'formik'
import React from 'react'

const ContactUs = () => {

    const contactForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return (
        <>
            <section className='bg-background_1'>
                <div className='bg-background_1 max-w-screen-sm h-screen flex justify-center items-center mx-auto'>
                    <form className='w-[400px]' onSubmit={contactForm.handleSubmit}>
                        <Card className='text-color_2'>
                            <CardHeader className='text-center'>
                                <CardTitle className='text-color_2 text-xl'>Contact Us</CardTitle>
                                <CardDescription>
                                    <p className='text-md text-color_1'>Please fill the form below to contact us to resolve any problems you are facing. We are on it 24*7 for our customers</p>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div>
                                    <Label htmlFor="name">Name</Label>
                                    <Input onChange={contactForm.handleChange} placeholder='John Doe' value={contactForm.values.name} type='text' id="name" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="email">Email</Label>
                                    <Input onChange={contactForm.handleChange} placeholder='example@gmail.com' value={contactForm.values.email} type='email' id="email" />
                                </div>
                                <div className="grid w-full gap-1.5 space-y-1">
                                    <Label htmlFor="message">Your message</Label>
                                    <Textarea placeholder="Type your message here." onChange={contactForm.handleChange} value={contactForm.values.message} id="message" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className='bg-color_1 rounded-sm hover:bg-color_2 text-background_1' type='submit'>Send Message</Button>
                            </CardFooter>
                        </Card>
                    </form>
                </div>
            </section>
        </>
    )
}

export default ContactUs