import React from 'react'

const Faq = () => {

    const faqData = [
        {
            question: "How do I place an order?",
            answer: "Browse our t-shirt collection, select your desired size, color, and design, and click 'Add to Cart.' Once you're ready to checkout, simply follow the instructions to complete your order. You will receive a confirmation email once your order is placed."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and other payment methods as listed at checkout. All transactions are processed securely."
        },
        {
            question: "How do I know what size to choose?",
            answer: "We have a detailed size guide on each product page to help you find the perfect fit. If you're unsure, feel free to contact us for assistance."
        },
        {
            question: "Can I cancel or modify my order after placing it?",
            answer: "Orders can only be canceled or modified within 24 hours of placing the order. After this period, the order is processed and cannot be changed. Please contact us as soon as possible if you need to make adjustments."
        },
        {
            question: "How long will it take to receive my order?",
            answer: "Orders are typically processed within 1-3 business days. Delivery times vary based on your location:\n- Domestic shipping: 3-7 business days.\n- International shipping: 7-21 business days.\nYou will receive a tracking number once your order is shipped."
        },
        {
            question: "How can I track my order?",
            answer: "Once your order is shipped, you will receive a tracking number via email. Use the tracking link provided to follow the delivery status of your package."
        },
        {
            question: "What is your return policy?",
            answer: "We offer a 30-day return window for unused, unwashed t-shirts in their original condition with tags. For detailed information, please refer to our Refund Policy."
        },
        {
            question: "Do you offer exchanges?",
            answer: "Unfortunately, we do not offer direct exchanges at this time. If you'd like to exchange an item, please return it for a refund and place a new order for the correct item."
        },
        {
            question: "Do you ship internationally?",
            answer: "Yes, we offer international shipping. Please note that customs fees, duties, or taxes may apply, and these are the responsibility of the customer."
        },
        {
            question: "What should I do if I receive a damaged or defective item?",
            answer: "If you receive a damaged or defective item, please contact us immediately at [email] with your order number and photos of the issue. We will arrange a replacement or refund as soon as possible."
        },
        {
            question: "Can I customize a t-shirt?",
            answer: "Yes, we offer custom t-shirt printing options. Please visit our Custom Orders page for more details on how to create your own design."
        },
        {
            question: "How do I contact customer service?",
            answer: "You can reach us at ashishverma510207@gmail.com/ +91 7991578618 for any inquiries or assistance. Our customer service team is available Monday to Friday from 9 AM to 6 PM."
        }
    ];

    return (
        <>
            <section className='bg-background_1 py-6'>
                <div className='max-w-screen-lg mx-auto text-center text-color_2 p-6'>
                    <h1 className='text-4xl capitalize underline'>Frequently Asked Questions (FAQ)</h1>
                    <div className='text-lg flex flex-col gap-6 text-left my-6'>
                        <ol className='list-number flex-col flex gap-8 p-4'>
                            {
                                faqData.map((faq, index) => {
                                    return (
                                        <li className='text-xl' key={index}>{faq.question}
                                            <ul className='my-2'>
                                                <li className='text-lg'>- {faq.answer}</li>
                                            </ul>
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faq