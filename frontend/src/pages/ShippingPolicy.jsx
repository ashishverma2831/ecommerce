import React from 'react'

const ShippingPolicy = () => {

    const shippingPolicy = {
        'Shipping Locations':[
            'We currently offer domestic and international shipping. Please note that certain restrictions may apply to international shipments, and shipping times may vary based on location.',
            'If we are unable to ship to your location, you will be notified during the checkout process.'
        ],
        'Shipping Costs':[
            'Shipping costs are calculated at checkout based on your location, order size, and shipping method selected.',
            'Free shipping may be available for orders that meet specific criteria (e.g., minimum order value or special promotions).',
            'Please note that international customers may be responsible for additional customs duties, taxes, or fees, which are not included in our shipping costs and are determined by your country’s customs policies.'
        ],
        'Order Processing Time':[
            'Orders are typically processed within 1-3 business days after payment has been confirmed.',
            'Custom or personalized orders may take additional time for production, which will be indicated at the time of purchase.',
            'Orders placed on weekends or holidays will be processed the next business day.'
        ],
        'Shipping Time':[
            'Domestic delivery typically takes 3-7 business days after your order has been processed.',
            'International Delivery times vary by destination and shipping method but generally take 7-21 business days after processing.'
        ],
        'Tracking Your Order':[
            'Once your order is shipped, you will receive a confirmation email with a tracking number and a link to track your package. Please allow up to 24 hours for tracking information to update.',
            'If you experience any issues with tracking or have concerns about your delivery, feel free to contact our customer support team.'
        ],
        'Lost or Delayed Packages':[
            "While we strive to ensure timely delivery, once a package is in the carrier's hands, delivery times are out of our control. If your order is delayed or lost, please contact us, and we will work with the carrier to resolve the issue.",
            'Thub is not responsible for packages lost due to incorrect shipping addresses provided at checkout.'
        ],
        'Undeliverable Packages':[
            'If a package is returned to us due to an incorrect address, failed delivery attempts, or refusal to pay customs fees (for international orders), we will contact you to arrange reshipment. Additional shipping fees may apply.'
        ],
        'Customs and Duties (International Orders)':[
            'International customers are responsible for any customs, duties, taxes, or fees required by their country. These charges are not included in our product prices or shipping fees and must be paid upon receipt of the package.',
            'Customs policies vary by country, so please contact your local customs office for more information.'
        ]
    }

  return (
    <>
        <section className='bg-background_1 py-6'>
                <div className='max-w-screen-lg mx-auto text-center text-color_2 p-6'>
                    <h1 className='text-4xl capitalize underline'>Shipping Policy</h1>
                    <div className='text-lg flex flex-col gap-6 text-left my-6'>
                        <p className='text-2xl mt-4'>At Thub, we aim to provide a smooth and efficient shipping experience for all our customers. Please read the following information to understand our shipping process, costs, and timelines.</p>
                        <ol className='list-number flex-col flex gap-4 p-4'>
                            {
                                Object.keys(shippingPolicy).map((shippingTitle)=>{
                                    return <li className='text-xl text-color_2' key={shippingTitle}>
                                        {shippingTitle}
                                        <ul>
                                            {
                                                shippingPolicy[shippingTitle].map((shipping) => {
                                                    return <li className='text-lg text-color_1' key={shipping}><span>- </span>{shipping}</li>
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

export default ShippingPolicy