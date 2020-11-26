import { DateTime } from 'graphql-scalars/mocks';
import { model, Schema} from 'mongoose';

const shopSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    createdAt: {
        type: Date, 
        required: true
    },
    deletedAt: {
        type: Date, 
        default: null
    }
});

export default model('Shop', shopSchema);