
export const tShirts = [];

const sizes = ['S', 'M', 'L', 'XL'];
const colors = ['Red', 'Blue', 'Green', 'Black', 'White'];
// const images = [
//     'https://images.unsplash.com/photo-1589996649173-9d7e5b1dbd0d',
//     'https://images.unsplash.com/photo-1598513438210-3c2a3e6e6b0d',
//     'https://images.unsplash.com/photo-1601757130007-9b3f9f1d4042',
// ];
for (let i = 1; i <= 100; i++) {
    const tShirt = {
        id: i,
        title: `T-Shirt ${i}`,
        rating: Math.floor(Math.random() * 5) + 1,
        description: `This is a description for T-Shirt ${i}`,
        size: sizes[Math.floor(Math.random() * sizes.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        price: (Math.random() * 20 + 10).toFixed(2), // Random price between 10 and 30
        image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T210A2PA4301PT17X108Y77D10373966W13622H13622/views/1,width=550,height=550,appearanceId=2,backgroundColor=F2F2F2,modelId=6287,crop=list/preloader-mens-t-shirt.jpg',
    };
    tShirts.push(tShirt);
}

// console.log(tShirts);

export const typeOfTshirts = [
    {
        title:'Round Neck',
        id:'roundneck',
        image:'https://printo-s3.dietpixels.net/site/20231117_175412539277_599ebc_Round-neck.jpg?quality=70&format=webp&w=384'
    },
    {
        title:'Polo Neck',
        id:'poloneck',
        image:'https://printo-s3.dietpixels.net/site/20231117_180439005675_d7aa04_Polo.jpg?quality=70&format=webp&w=384'
    },
    {
        title:'V Neck',
        id:'vneck',
        image:'https://printo-s3.dietpixels.net/site/20231117_175423463304_f22572_V-neck.jpg?quality=70&format=webp&w=384'
    },
    {
        title:'Hoodies',
        id:'hoodies',
        image:'https://printo-s3.dietpixels.net/site/20231117_184046993287_61603e_Sweat-shirt.jpg?quality=70&format=webp&w=384'
    }
]

// export const newTshirts = [
//     {
//         id:101,
//         title:'T-Shirt 101',
//         rating:5,
//         description:'This is a description for T-Shirt 101',
//         size:'M',
//         color:'Red',
//         price:'15.00',
//         image:'https://image.spreadshirtmedia.com/image-server/v1/products/T210A2PA4301PT17X108Y77D10373966W13622H13622/views/1,width=550,height=550,appearanceId=2,backgroundColor=F2F2F2,modelId=6287,crop=list/preloader-mens-t-shirt.jpg'
//     },
//     {
//         id:102,
//         title:'T-Shirt 102',
//         rating:4,
//         description:'This is a description for T-Shirt 102',
//         size:'L',
//         color:'Blue',
//         price:'20.00',
//         image:'https://image.spreadshirtmedia.com/image-server/v1/products/T210A2PA4301PT17X108Y77D10373966W13622H13622/views/1,width=550,height=550,appearanceId=2,backgroundColor=F2F2F2,modelId=6287,crop=list/preloader-mens-t-shirt.jpg'
//     },
//     {
//         id:103,
//         title:'T-Shirt 103',
//         rating:3,
//         description:'This is a description for T-Shirt 103',
//         size:'S',
//         color:'Green',
//         price:'25.00',
//         image:'https://image.spreadshirtmedia.com/image-server/v1/products/T210A2PA4301PT17X108Y77D10373966W13622H13622/views/1,width=550,height=550,appearanceId=2,backgroundColor=F2F2F2,modelId=6287,crop=list/preloader-mens-t-shirt.jpg'
//     },
//     {
//         id:104,
//         title:'T-Shirt 104',
//         rating:2,
//         description:'This is a description for T-Shirt 104',
//         size:'XL',
//         color:'Black',
//         price:'30.00',
//         image:'https://image.spreadshirtmedia.com/image-server/v1/products/T210A2PA4301PT17X108Y77D10373966W13622H13622/views/1,width=550,height=550,appearanceId=2,backgroundColor=F2F2F2,modelId=6287,crop=list/preloader-mens-t-shirt.jpg'
//     },
//     {
//         id:105,
//         title:'T-Shirt 105',
//         rating:1,
//         description:'This is a description for T-Shirt 105',
//         size:'M',
//         color:'White',
//         price:'35.00',
//         image:'https://image.spreadshirtmedia.com/image-server/v1/products/T210A2PA4301PT17X108Y77D10373966W13622H13622/views/1,width=550,height=550,appearanceId=2,backgroundColor=F2F2F2,modelId=6287,crop=list/preloader-mens-t-shirt.jpg',
//     },
//     {
//         id:106,
//         title:'T-Shirt 106',
//         rating:5,
//         description:'This is a description for T-Shirt 106',
//         size:'M',
//         color:'Red',
//         price:'15.00',
//         image:'https://image.spreadshirtmedia.com/image-server/v1/products/T210A2PA4301PT17X108Y77D10373966W13622H13622/views/1,width=550,height=550,appearanceId=2,backgroundColor=F2F2F2,modelId=6287,crop=list/preloader-mens-t-shirt.jpg'
//     }
// ]

export const newTshirts = tShirts.slice(0, 8);

export const services = [
    {
        title:'Customize Tshirts',
        description:'Customize your tshirts with your own designs, logos, texts and more.',
        class:"fa-solid fa-shirt text-background_1 text-4xl text-center w-12 hover:scale-150 duration-500 hover:duration-500"
    },
    {
        title:'Fast Delivery',
        description:'We deliver your tshirts in 3-5 business days.',
        class:"fa-solid fa-truck text-background_1 text-4xl text-center w-12 hover:scale-150 duration-500 hover:duration-500"
    },
    {
        title:'Quality Products',
        description:'We use high quality products for your tshirts.',
        class:"fa-solid fa-square-check text-background_1 text-4xl text-center w-12 hover:scale-150 duration-500 hover:duration-500"
    },
    {
        title:'24/7 Support',
        description:'We provide 24/7 support for your queries.',
        class:"fa-solid fa-headset text-background_1 text-4xl text-center w-12 hover:scale-150 duration-500 hover:duration-500"
    }
]

export const howToDesign = [
    {
        title:'Choose your t-shirt',
        description:'Choose your t-shirt from our wide range of collections.',
        image:'https://cdn.shopify.com/app-store/listing_images/9fb2bc86b0afe492b0c868091ab83300/desktop_screenshot/COO2_IDy9fACEAE=.png?height=900&width=1600'
    },
    {
        title:'Choose your design',
        description:'Choose your design from our wide range of collections.',
        image:'https://cdn.shopify.com/app-store/listing_images/9fb2bc86b0afe492b0c868091ab83300/desktop_screenshot/COO2_IDy9fACEAE=.png?height=900&width=1600'
    },
    {
        title:'Customize your design',
        description:'Customize your design with your own texts, logos and more.',
        image:'https://cdn.shopify.com/app-store/listing_images/9fb2bc86b0afe492b0c868091ab83300/desktop_screenshot/COO2_IDy9fACEAE=.png?height=900&width=1600'
    },
    {
        title:'Place your order',
        description:'Place your order and get your customized t-shirt in 3-5 business days.',
        image:'https://cdn.shopify.com/app-store/listing_images/9fb2bc86b0afe492b0c868091ab83300/desktop_screenshot/COO2_IDy9fACEAE=.png?height=900&width=1600'
    }
]

export const bulkOrders = [
    {
        image:'https://printo-s3.dietpixels.net/site/20231118_001958747849_18071b_Polo.jpg?quality=70&format=webp&w=384',
        title:'Embroidered Polo Tshirts',
        desc:'Embroidered Polo Tshirts for your company, events and more as low as ₹498.',
    },
    {
        image:'https://printo-s3.dietpixels.net/site/20231222_205604712147_d09edd_1.jpg?quality=70&format=webp&w=384',
        title:'Cotton Classic Tshirts',
        desc:'Cotton Classic Tshirts for your company, events and more as low as ₹298.',
    },
    {
        image:'https://printo-s3.dietpixels.net/site/20231222_205600616850_a18ddc_2.jpg?quality=70&format=webp&w=384',
        title:'Cotton Round Neck Tshirts',
        desc:'Cotton Round Neck Tshirts for your company, events and more as low as ₹198.',
    },
    {
        image:'https://printo-s3.dietpixels.net/site/20231222_205555254451_f85786_3.jpg?quality=70&format=webp&w=384',
        title:'Cotton V Neck Tshirts',
        desc:'Cotton V Neck Tshirts for your company, events and more as low as ₹198.',
    }
]

export const topReviews = [
    {
        id:1,
        image: 'https://www.zomato.com/partner-with-us/static/media/PawanKumar.fb110f23.png',
        description: 'We are immensely satisfied with the marketing push Zomato has provided us. We are now exclusive with Zomato and look forward to more growth in our delivery business through online orders.',
        name: 'Pawan Kumar',
        owner: 'Chicago BR, Dehradun'
    },
    {
        id:2,
        image: 'https://www.zomato.com/partner-with-us/static/media/Tushar.6bc47b8a.png',
        description: 'Zomato delivery fleet saves considerable effort on our part resulting in more fulfilled orders for us. Also, it has now become much easier for customers to discover our brand on Zomato.',
        name: 'Tushar',
        owner: 'Concept Shawarma , Delhi NCR'
    },
    {
        id:3,
        image: 'https://www.zomato.com/partner-with-us/static/media/Jasmeet.7da6a5e1.png',
        description: 'Earlier, we delivered food orders to our known and repeat customers but now we have been able to create a completely new segment of repeat users - all because of the Zomato app.',
        name: 'Jasmeet Singh',
        owner: 'Pick and Move, Udaipur'
    }
]

export const typeOfTshirtCollection = {
    roundneck:[
        {
            id:1,
            title:'Round Neck T-Shirt 1',
            rating:5,
            description:'This is a description for Round Neck T-Shirt 1',
            size:'M',
            color:'Red',
            price:'15.00',
            image:'https://printo-s3.dietpixels.net/site/20231117_175412539277_599ebc_Round-neck.jpg?quality=70&format=webp&w=384'
        },
        {
            id:2,
            title:'Round Neck T-Shirt 2',
            rating:4,
            description:'This is a description for Round Neck T-Shirt 2',
            size:'L',
            color:'Blue',
            price:'20.00',
            image:'https://printo-s3.dietpixels.net/site/20231117_175412539277_599ebc_Round-neck.jpg?quality=70&format=webp&w=384'
        },
        {
            id:3,
            title:'Round Neck T-Shirt 3',
            rating:3,
            description:'This is a description for Round Neck T-Shirt 3',
            size:'S',
            color:'Green',
            price:'25.00',
            image:'https://printo-s3.dietpixels.net/site/20231117_175412539277_599ebc_Round-neck.jpg?quality=70&format=webp&w=384'
        },
        {
            id:4,
            title:'Round Neck T-Shirt 4',
            rating:2,
            description:'This is a description for Round Neck T-Shirt 4',
            size:'XL',
            color:'Black',
            price:'30.00',
            image:'https://printo-s3.dietpixels.net/site/20231117_175412539277_599ebc_Round-neck.jpg?quality=70&format=webp&w=384'
        },
        {
            id:5,
            title:'Round Neck T-Shirt 5',
            rating:1,
            description:'This is a description for Round Neck T-Shirt 5',
            size:'M',
            color:'White',
            price:'35.00',
            image:'https://printo-s3.dietpixels.net/site/20231117_175412539277_599ebc_Round-neck.jpg?quality=70&format=webp&w=384'
        }
    ],
    poloneck:[
        {
            id:6,
            title:'Polo Neck T-Shirt 1',
            rating:5,
            description:'This is a description for Polo Neck T-Shirt 1',
            size:'M',
            color:'Red',
            price:'15.00',
            image:'https://printo-s3.dietpixels.net/site/20231117_180439005675_d7aa04_Polo.jpg?quality=70&format=webp&w=384'
        },
        {
            id:7,
            title:'Polo Neck T-Shirt 2',
            rating:4,
            description:'This is a description for Polo Neck T-Shirt 2',
            size:'L',
            color:'Blue',
            price:'20.00',
            image:'https://printo-s3.dietpixels.net/site/20231117_180439005675_d7aa04_Polo.jpg?quality=70&format=webp&w=384'
        },
        {
            id:8,
            title:'Polo Neck T-Shirt 3',
            rating:3,
            description:'This is a description for Polo Neck T-Shirt 3',
            size:'S',
            color:'Green',
            price:'25.00',
            image:'https://printo-s3.dietpixels.net/site/20231117_180439005675_d7aa04_Polo.jpg?quality=70&format=webp&w=384'
        },
        {
            id:9,
            title:'Polo Neck T-Shirt 4',
            rating:2,
            description:'This is a description for Polo Neck T-Shirt 4',
            size:'XL',
            color:'Black',
            price:'30.00',
            image:'https://printo-s3.dietpixels.net/site/20231117_180439005675_d7aa04_Polo.jpg?quality=70&format=webp&w=384'
        },
        {
            id:10,
            title:'Polo Neck T-Shirt 5',
            rating:1,
            description:'This is a description for Polo Neck T-Shirt 5',
            size:'M',
            color:'White',
            price:'35.00',
            image:'https://printo-s3.dietpixels.net/site/20231117_180439005675_d7aa04_Polo.jpg?quality=70&format=webp&w=384'
        }
    ],
    vneck:[
        {
            id:11,
            title:'V Neck T-Shirt 1',
            rating:5,
            description:'This is a description for V Neck T-Shirt 1',
            size:'M',
            color:'Red',
            price:'15.00',
            image:'https://printo-s3.dietpixels.net/site/20231117_175423463304_f22572_V-neck.jpg?quality=70&format=webp&w=384'
        },
        {
            id:12,
            title:'V Neck T-Shirt 2',
            rating:4,
            description:'This is a description for V Neck T-Shirt 2',
            size:'L',
            color:'Blue',
            price:'20.00',
            image:'https://printo-s3.dietpixels.net/site/20231117_175423463304_f22572_V-neck.jpg?quality=70&format=webp&w=384'
        },
        {
            id:13,
            title:'V Neck T-Shirt 3',
            rating:3,
            description:'This is a description for V Neck T-Shirt 3',
            size:'S',
            color:'Green',
            price:'25.00',
            image:'https://printo-s3.dietpixels.net/site/20231117_175423463304_f22572_V-neck.jpg?quality=70&format=webp&w=384'
        },
        {
            id:14,
            title:'V Neck T-Shirt 4',
            rating:2,
            description:'This is a description for V Neck T-Shirt 4',
            size:'XL',
            color:'Black',
            price:'30.00',
            image:'https://printo-s3.dietpixels.net/site/20231117_175423463304_f22572_V-neck.jpg?quality=70&format=webp&w=384'
        },
        {
            id:15,
            title:'V Neck T-Shirt 5',
            rating:1,
            description:'This is a description for V Neck T-Shirt 5',
            size:'M',
            color:'White',
            price:'35.00',
            image:'https://printo-s3.dietpixels.net/site/20231117_175423463304_f22572_V-neck.jpg?quality=70&format=webp&w=384'
        }
    ],
    hoodies:[
        {
            id:16,
            title:'Hoodie 1',
            rating:5,
            description:'This is a description for Hoodie 1',
            size:'M',
            color:'Red',
            price:'15.00',
            image:'https://printo-s3.dietpixels.net/site/20231117_184046993287_61603e_Sweat-shirt.jpg?quality=70&format=webp&w=384'
        },
        {
            id:17,
            title:'Hoodie 2',
            rating:4,
            description:'This is a description for Hoodie 2',
            size:'L',
            color:'Blue',
            price:'20.00',
            image:'https://printo-s3.dietpixels.net/site/20231117_184046993287_61603e_Sweat-shirt.jpg?quality=70&format=webp&w=384'
        },
        {
            id:18,
            title:'Hoodie 3',
            rating:3,
            description:'This is a description for Hoodie 3',
            size:'S',
            color:'Green',
            price:'25.00',
            image:'https://printo-s3.dietpixels.net/site/20231117_184046993287_61603e_Sweat-shirt.jpg?quality=70&format=webp&w=384'
        },
        {
            id:19,
            title:'Hoodie 4',
            rating:2,
            description:'This is a description for Hoodie 4',
            size:'XL',
            color:'Black',
            price:'30.00',
            image:'https://printo-s3.dietpixels.net/site/20231117_184046993287_61603e_Sweat-shirt.jpg?quality=70&format=webp&w=384'
        },
        {
            id:20,
            title:'Hoodie 5',
            rating:1,
            description:'This is a description for Hoodie 5',
            size:'M',
            color:'White',
            price:'35.00',
            image:'https://printo-s3.dietpixels.net/site/20231117_184046993287_61603e_Sweat-shirt.jpg?quality=70&format=webp&w=384'
        }
    ]
}
// console.log(Object.keys(typeOfTshirtCollection));


export const tshirtFilters = {
    size:['S','M','L','XL'],
    color:['Red','Blue','Green','Black','White'],
    price:['200-500','500-1000','1000-1500','1500-2000','2500']
}

export const similarProducts = [
    {
        id:1,
        title:'Similar Product 1',
        rating:5,
        description:'This is a description for Similar Product 1',
        size:'M',
        color:'Red',
        price:'15.00',
        image:'https://printo-s3.dietpixels.net/site/20231117_175412539277_599ebc_Round-neck.jpg?quality=70&format=webp&w=384'
    },
    {
        id:2,
        title:'Similar Product 2',
        rating:4,
        description:'This is a description for Similar Product 2',
        size:'L',
        color:'Blue',
        price:'20.00',
        image:'https://printo-s3.dietpixels.net/site/20231117_175412539277_599ebc_Round-neck.jpg?quality=70&format=webp&w=384'
    },
    {
        id:3,
        title:'Similar Product 3',
        rating:3,
        description:'This is a description for Similar Product 3',
        size:'S',
        color:'Green',
        price:'25.00',
        image:'https://printo-s3.dietpixels.net/site/20231117_175412539277_599ebc_Round-neck.jpg?quality=70&format=webp&w=384'
    },
    {
        id:4,
        title:'Similar Product 4',
        rating:2,
        description:'This is a description for Similar Product 4',
        size:'XL',
        color:'Black',
        price:'30.00',
        image:'https://printo-s3.dietpixels.net/site/20231117_175412539277_599ebc_Round-neck.jpg?quality=70&format=webp&w=384'
    },
    {
        id:5,
        title:'Similar Product 5',
        rating:1,
        description:'This is a description for Similar Product 5',
        size:'M',
        color:'White',
        price:'35.00',
        image:'https://printo-s3.dietpixels.net/site/20231117_175412539277_599ebc_Round-neck.jpg?quality=70&format=webp&w=384'
    }
]
export const recommendedProducts = [
    {
        id:1,
        title:'Recommended Product 1',
        rating:5,
        description:'This is a description for Recommended Product 1',
        size:'M',
        color:'Red',
        price:'15.00',
        image:'https://printo-s3.dietpixels.net/site/20231117_175412539277_599ebc_Round-neck.jpg?quality=70&format=webp&w=384'
    },
    {
        id:2,
        title:'Recommended Product 2',
        rating:4,
        description:'This is a description for Recommended Product 2',
        size:'L',
        color:'Blue',
        price:'20.00',
        image:'https://printo-s3.dietpixels.net/site/20231117_175412539277_599ebc_Round-neck.jpg?quality=70&format=webp&w=384'
    },
    {
        id:3,
        title:'Recommended Product 3',
        rating:3,
        description:'This is a description for Recommended Product 3',
        size:'S',
        color:'Green',
        price:'25.00',
        image:'https://printo-s3.dietpixels.net/site/20231117_175412539277_599ebc_Round-neck.jpg?quality=70&format=webp&w=384'
    },
    {
        id:4,
        title:'Recommended Product 4',
        rating:2,
        description:'This is a description for Recommended Product 4',
        size:'XL',
        color:'Black',
        price:'30.00',
        image:'https://printo-s3.dietpixels.net/site/20231117_175412539277_599ebc_Round-neck.jpg?quality=70&format=webp&w=384'
    },
    {
        id:5,
        title:'Recommended Product 5',
        rating:1,
        description:'This is a description for Recommended Product 5',
        size:'M',
        color:'White',
        price:'35.00',
        image:'https://printo-s3.dietpixels.net/site/20231117_175412539277_599ebc_Round-neck.jpg?quality=70&format=webp&w=384'
    }
]

export const recentlViewedProducts = [
    {
        id:1,
        title:'Recent Product 1',
        rating:5,
        description:'This is a description for Recent Product 1',
        size:'M',
        color:'Red',
        price:'15.00',
        image:'https://printo-s3.dietpixels.net/site/20231117_175412539277_599ebc_Round-neck.jpg?quality=70&format=webp&w=384'
    },
    {
        id:2,
        title:'Recent Product 2',
        rating:4,
        description:'This is a description for Recent Product 2',
        size:'L',
        color:'Blue',
        price:'20.00',
        image:'https://printo-s3.dietpixels.net/site/20231117_175412539277_599ebc_Round-neck.jpg?quality=70&format=webp&w=384'
    },
    {
        id:3,
        title:'Recent Product 3',
        rating:3,
        description:'This is a description for Recent Product 3',
        size:'S',
        color:'Green',
        price:'25.00',
        image:'https://printo-s3.dietpixels.net/site/20231117_175412539277_599ebc_Round-neck.jpg?quality=70&format=webp&w=384'
    },
    {
        id:4,
        title:'Recent Product 4',
        rating:2,
        description:'This is a description for Recent Product 4',
        size:'XL',
        color:'Black',
        price:'30.00',
        image:'https://printo-s3.dietpixels.net/site/20231117_175412539277_599ebc_Round-neck.jpg?quality=70&format=webp&w=384'
    },
    {
        id:5,
        title:'Recent Product 5',
        rating:1,
        description:'This is a description for Recent Product 5',
        size:'M',
        color:'White',
        price:'35.00',
        image:'https://printo-s3.dietpixels.net/site/20231117_175412539277_599ebc_Round-neck.jpg?quality=70&format=webp&w=384'
    }
]





// filters
export const filterSizes = [
    {
        value: "S",
        label: "Small",
    },
    {
        value: "M",
        label: "Medium",
    },
    {
        value: "L",
        label: "Large",
    },
    {
        value: "XL",
        label: "X-Large",
    }
]
export const filterColors = [
    {
        value: "red",
        label: "Red",
    },
    {
        value: "green",
        label: "Green",
    },
    {
        value: "blue",
        label: "Blue",
    },
    {
        value: "black",
        label: "Black",
    },
    {
        value: "white",
        label: "White",
    }
]
export const filterPrices = [
    {
        value: "500",
        label: "200-500",
    },
    {
        value: "1000",
        label: "500-1000",
    },
    {
        value: "1500",
        label: "1000-1500",
    },
    {
        value: "2000",
        label: "1500-2000",
    },
    {
        value: "2500",
        label: "2500",
    }
]
