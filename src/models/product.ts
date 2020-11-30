import { model, Schema } from 'mongoose';

const productSchema = new Schema({
    name:{
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    price:{
        type: Number,
        required: true,
        min: 0
    },
    createdAt: {
        type: Date, 
        required: true,
        default: Date.now
    },
    deletedAt: {
        type: Date, 
        default: null
    },
    shopId: {
        type: Schema.Types.ObjectId,
        required: true
    }
});

export default model('Product', productSchema);