import { model, Schema} from 'mongoose';

const shopSchema = new Schema({
    name: {
        type: String, 
        required: true,
        minlength: 1,
        maxlength: 255
    },
    createdAt: {
        type: Date, 
        required: true,
        default: Date.now
    },
    deletedAt: {
        type: Date, 
        default: null
    }
});

export default model('Shop', shopSchema);