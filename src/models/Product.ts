import { model, Schema } from 'mongoose';

const productSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    createdAt: {
        type: Date, 
        required: true
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