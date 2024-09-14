import React from 'react'

const PrivacyPolicy = () => {

    const privacyPolicy = {
        'Information We Collect':{
            desc:'We collect various types of information to provide you with a seamless shopping experience, including:',
            data:[{
                title:'Personal Information',
                description:'When you make a purchase, create an account, or subscribe to our newsletter, we may collect your name, email address, shipping/billing address, phone number, and payment details.'
            },{
                title:'Non-Personal Information',
                description:'We collect data about your device, browser, IP address, and browsing activity on our website to improve functionality and performance.'
            },
            {
                title:'Cookies',
                description:' We use cookies to enhance your browsing experience, store preferences, and track site activity. You can manage cookie settings through your browser.'
            }
        ]
        },
        'How We Use Your Information':{
            desc:'We use your personal information to:',
            data:[
                {
                    title:'',
                    description:'Process and fulfill orders, including payment processing, shipping, and delivery.',
                },
                {
                    title:'',
                    description:'Provide customer support and respond to inquiries.'
                },
                {
                    title:'',
                    description:'Send you order updates, marketing communications (if subscribed), and promotional offers.'
                },
                {
                    title:'',
                    description:'Improve our website, services, and product offerings.'
                },
                {
                    title:'',
                    description:'Detect and prevent fraudulent activities or security breaches.'
                }
            ]
        },
        'How We Share Your Information':{
            desc:'Thub respects your privacy, and we do not sell or rent your personal information to third parties. However, we may share your information in the following instances:',
            data:[{
                title:'Service Providers',
                description:'We work with third-party vendors (e.g., payment processors, shipping carriers) who assist us in delivering our services. These parties only have access to the information necessary to perform their functions and are required to maintain the confidentiality of your data.'
            },{
                title:'Legal Compliance',
                description:'We may disclose your information if required by law or if we believe such action is necessary to comply with legal processes, protect the rights of Thub, or ensure the safety of our users.'
            }]
        },
        'Security of Your Information':{
            desc:'We implement industry-standard security measures, including encryption and secure connections, to protect your personal information from unauthorized access, alteration, or disclosure. However, no data transmission over the internet is 100% secure, and while we strive to protect your information, we cannot guarantee its absolute security.'
            ,data:[]
        },
        'Your Rights':{
            desc:'You have the right to:',
            data:[
                {
                    title:'Access',
                    description:'the personal information we hold about you.'
                },
                {
                    title:'Update or Correct',
                    description:'any inaccuracies in your personal details.'
                },
                {
                    title:'Opt-out',
                    description:'of marketing communications by following the unsubscribe instructions in our emails.'
                },
                {
                    title:'Delete',
                    description:'your account or request that we delete your personal data, subject to certain legal exceptions.'
                }
            ]
        },
        'Third-Party Links':{
            desc:'Our website may contain links to third-party sites. Thub is not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of any third-party sites you visit.'
            ,data:[]
        },
        'Children’s Privacy':{
            desc:'Thub does not knowingly collect personal information from children under the age of 13. If you believe we have collected such information, please contact us immediately, and we will take steps to delete it.'
            ,data:[]
        },
        'Changes to This Policy':{
            desc:'We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page, and your continued use of the website after such changes constitutes your acceptance of the updated policy.'
            ,data:[]
        }
    }

    return (
        <>
            <section className='bg-background_1 py-6'>
                <div className='max-w-screen-lg mx-auto text-center text-color_2 p-6'>
                    <h1 className='text-4xl capitalize underline'>Privacy Policy</h1>
                    <div className='text-lg flex flex-col gap-6 text-left my-6'>
                        <p className='text-2xl mt-4'>At Thub, we are committed to protecting your privacy and ensuring that your personal information is handled securely and responsibly. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or make a purchase. By using our services, you agree to the terms outlined in this policy.</p>
                        <ol className='list-number flex-col flex gap-4 p-4'>
                            {
                                Object.keys(privacyPolicy).map((privacyTitle) => {
                                    return <li key={privacyTitle} className='text-xl text-color_2'>
                                        <p className='font-semibold'>{privacyTitle}</p>
                                        <p className='text-[16px]'>{privacyPolicy[privacyTitle].desc}</p>
                                        <ul className='flex flex-col gap-2'>
                                            {
                                                privacyPolicy[privacyTitle].data.map((privacy,index) => {
                                                    return <li key={index} className='text-[16px] text-color_1'><span className='text-lg font-semibold'>- {privacy.title?privacy.title+':':''}</span> {privacy.description}</li>
                                                })
                                            }
                                        </ul>
                                    </li>
                                })
                            }
                        </ol>
                        <div>
                            <p className='font-semibold'>Contact Us</p>
                            <p className='text-[16px]'>If you have any questions or concerns regarding our Privacy Policy or how your data is handled, please contact us at:</p>
                            <div className='my-4'>
                                <p><span className='font-semibold'>Email:</span> ashishverma510207@gmail.com</p>
                                <p><span className='font-semibold'>Phone:</span> +91 7991578618</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PrivacyPolicy