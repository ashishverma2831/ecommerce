import React from 'react'

const RefundPolicy = () => {

    const refundPolicy = {
        'Eligibility for Refunds': [
            'Items must be returned within 30 days of the delivery date.',
            'The t-shirt must be unused, unwashed, and in its original condition with all tags and packaging intact.',
            'Refunds are not applicable on sale or clearance items unless they are faulty or damaged upon receipt.'
        ],
        'Non-Refundable Items': [
            'Customized or personalized t-shirts are non-refundable unless there is a defect or quality issue.',
            'Shipping costs are non-refundable, except in cases where the product received is faulty or incorrect.'
        ],
        'How to Request a Refund': [
            'To initiate a refund, please contact our customer service team at [email] with your order number and reason for the return.',
            'Once your return is approved, you will receive instructions on how to send the item(s) back to us.',
            'Please ensure that items are packaged securely to prevent any damage during return shipping.'
        ],
        'Refund Process': [
            'After we receive and inspect your returned item, you will be notified via email regarding the approval or rejection of your refund.',
            'If approved, your refund will be processed, and a credit will automatically be applied to your original payment method within 7-10 business days.'
        ],
        'Exchanges': [
            'We currently do not offer direct exchanges. If you wish to exchange an item, please request a refund for the original purchase and place a new order for the replacement.'
        ],
        'Damaged or Defective Items': [
            'If you receive a damaged or defective item, please notify us immediately. We will arrange for a replacement or full refund at no additional cost.'
        ]
    }


    return (
        <>
            <section className='bg-background_1 py-6'>
                <div className='max-w-screen-lg mx-auto text-center text-color_2 p-6'>
                    <h1 className='text-4xl capitalize'>Refund Policy</h1>
                    <div className='text-lg flex flex-col gap-6 text-left my-6'>
                        <p>At Thub, we are committed to ensuring that you are completely satisfied with your purchase. If for any reason you're not happy with your order, we offer a hassle-free refund process, subject to the following conditions:</p>
                        <ol className='list-number'>
                            {
                                Object.keys(refundPolicy).map((refundTitle)=>{
                                    return <li>
                                        {refundTitle}
                                        <ul>
                                            {
                                                refundPolicy[refundTitle].map((refund) => {
                                                    return <li key={refund}><span>- </span>{refund}</li>
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

export default RefundPolicy