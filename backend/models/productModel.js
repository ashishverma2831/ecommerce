const { Schema, model } = require("mongoose");

// tshirt schema
const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true,
        maxLength: [200, 'Product name cannot exceed 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please enter product price'],
        maxLength: [5, 'Product price cannot exceed 5 digits'],
    },
    description: {
        type: String,
        required: [true, 'Please enter product description'],
        maxLength: [2000, 'Product description cannot exceed 2000 characters'],
    },
    ratings: {
        type: Number,
        default: 0,
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, 'Please select category for this product'],
        enum: {
            values: [
                'V-neck',
                'Round-neck',
                'Polo',
                'Hoodies',
                'Sweatshirt',
                'Jacket',
            ],
            message: 'Please select correct category for product'
        }
    },
    stock: {
        type: Number,
        required: [true, 'Please enter product stock'],
        maxLength: [4, 'Product stock cannot exceed 5 digits'],
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        },
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{timestamps: true});

module.exports = model('Product', productSchema);