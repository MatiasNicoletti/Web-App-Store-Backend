const mongoose = require('mongoose');
const slugify = require('slugify');

const validation = false;
const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: validation
        },
        description: {
            type: String,
            required: validation
        },
        price: {
            type: Number,
            required: validation
        },
        isInOffer: {
            type: Boolean,
            default: false
        },
        offerAmount: {
            type: Number,
            default: 0
        },
        stock: {
            initialStock: Number,
            currentStock: {
                type:Number,
                default: 0
            }
        },
        mainImage: {
            type: String
        },
        images: [String],
        measures: {
            width: Number,
            height: Number,
            depth: Number
        },
        publishedAt: {
            type: Date,
            default: Date.now()
        },
        category: {
            mainCategory: {
                type: String
            },
            subCategories: [String]
        },
        // color: {
        //     defaultColor: { 
        //         type: String,
        //         name: String 
        //     },
        //     colorVariants:[
        //         {
        //             type: String,
        //             name: String //to get the image product-red, -green, ...
        //         }
        //     ]
        // },
        slug: {
            type:String
        }
    }
);

productSchema.pre('save', function (next) {
    this.slug = slugify(this.name, { lower: true });
    this.stock.currentStock = this.stock.initialStock;

    next();
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;