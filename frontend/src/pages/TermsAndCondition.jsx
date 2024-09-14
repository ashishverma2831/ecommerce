import React from 'react'
import { Link } from 'react-router-dom'

const TermsAndCondition = () => {

    const contact = {
        phone: 7991578618,
        email: 'ashishverma510207@gmail.com'
    }
    const termsAndConditions = {
        'General Use': [
            'By accessing Thub, you agree that you are at least 18 years of age or have the permission of a legal guardian to make purchases.',
            'These terms apply to all users of the site, including but not limited to browsers, customers, vendors, and content creators.'
        ],
        'Products and Services': [
            'We strive to ensure that all descriptions, images, and pricing of our products are accurate. However, Thub does not guarantee that product descriptions or any other content are error-free.',
            'Colors and designs displayed on the website may vary slightly due to monitor settings and photography limitations.',
            'All prices listed are subject to change without notice.'
        ],
        'Ordering and Payment': [
            'By placing an order on Thub, you agree to provide accurate and complete information, including billing and shipping details.',
            'We accept various payment methods as displayed on our site at the time of purchase. All payments must be made in full at the time of the order.',
            'We reserve the right to refuse or cancel any order at our discretion, particularly in cases of fraud, unauthorized transactions, or product unavailability.'
        ],
        'Shipping and Delivery': [
            'Orders will be processed and shipped according to the timelines specified at checkout. Delivery times may vary based on location and shipping method selected.',
            'Thub is not responsible for any delays caused by shipping carriers or factors outside our control (such as weather or customs).'
        ],
        'Returns and Refunds': [
            'For information regarding returns and refunds, please refer to our [Refund Policy].',
            'Customized or personalized products are non-refundable unless there is a manufacturing defect or error in production.'
        ],
        'Intellectual Property': [
            'All content on Thub, including but not limited to logos, images, text, and designs, are the property of Thub or our partners and are protected by intellectual property laws. Unauthorized use or reproduction is prohibited.'
        ],
        'Privacy Policy': [
            'We value your privacy and are committed to protecting your personal information. Please review our Privacy Policy for details on how we collect, use, and safeguard your data.'
        ],
        'Third-Party Links': [
            'Our website may contain links to third-party websites. These are provided for your convenience, and Thub is not responsible for the content, accuracy, or practices of third-party sites.'
        ],
        'Limitation of Liability': [
            'Thub is not liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our website or services.',
            'We are not responsible for any damages caused by improper use of our products.'
        ],
        'Changes to Terms': [
            'Thub reserves the right to update or modify these terms and conditions at any time. It is the responsibility of users to review the terms periodically for changes.',
            'Continued use of the website after any changes constitutes acceptance of the revised terms.'
        ],
        'Governing Law': [
            'These terms and conditions are governed by and construed in accordance with the laws of your jurisdiction, without regard to its conflict of law principles.'
        ],
        'Contact Information': [
            `If you have any questions or concerns about these terms, please contact us at ashishverma510207@gmail.com/ +91 7991578618 .`
        ]
    }

    return (
        <>
            <section className='bg-background_1 py-6'>
                <div className='max-w-screen-lg mx-auto text-center text-color_2 p-6'>
                    <h1 className='text-4xl capitalize underline'>Terms and Conditions</h1>
                    <div className='text-lg flex flex-col gap-6 text-left my-6'>
                        <p className='text-2xl mt-4'>Welcome to Thub! By using our website and purchasing from us, you agree to comply with the following terms and conditions. Please read them carefully before making any transactions on our site.</p>
                        <ol className='list-number flex-col flex gap-4 p-4'>
                            {
                                Object.keys(termsAndConditions).map((termTitle) => {
                                    if (termTitle === 'Returns and Refunds') {
                                        return <li className='text-xl text-color_2' key={termTitle}>
                                            {termTitle}
                                            <ul>
                                                <li className='text-lg text-color_1'><span> - </span>For information regarding returns and refunds, please refer to our <Link className='text-blue-800 underline' to={'/refund-policy'}>Refund Policy</Link>.</li>
                                                <li className='text-lg text-color_1'><span> - </span>Customized or personalized products are non-refundable unless there is a manufacturing defect or error in production.</li>
                                            </ul>
                                        </li>
                                    }else if (termTitle === 'Privacy Policy') {
                                        return <li className='text-xl text-color_2' key={termTitle}>
                                            {termTitle}
                                            <ul>
                                                <li className='text-lg text-color_1'><span> - </span> We value your privacy and are committed to protecting your personal information. Please review our <Link className='text-blue-800 underline' to={'/privacy-policy'}>Privacy Policy</Link> for details on how we collect, use, and safeguard your data.</li>
                                            </ul>
                                        </li>
                                    }
                                    else if (termTitle === 'Contact Information') {
                                        return <li className='text-xl text-color_2' key={termTitle}>
                                            {termTitle}
                                            <ul>
                                                <li className='text-lg text-color_1'><span> - </span>If you have any questions or concerns about these terms, please contact us at <Link className='text-blue-800 underline' to={'/contact-us'}>Contacts</Link></li>
                                            </ul>
                                        </li>
                                    }
                                    else return <li className='text-xl text-color_2' key={termTitle}>
                                        {termTitle}
                                        <ul>
                                            {
                                                termsAndConditions[termTitle].map((term) => {
                                                    return <li className='text-lg text-color_1' key={term}><span> - </span>{term}</li>
                                                })
                                            }
                                        </ul>
                                    </li>
                                })
                            }
                        </ol>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TermsAndCondition