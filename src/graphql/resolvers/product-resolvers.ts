import Product from '../../models/product';

export default {
    Query: {
        async getProducts(parent, {shopId}, context, info){
            try{
                const products = await Product.find({shopId});
                return products;
            }catch(err){
                //LOG
                throw new Error(err);
            }
        }
    },
    Mutation: {
        async createProduct(parent, {name, price, shopId}, context, info){
            try{
                const product = await new Product({name, price, shopId});
                return product;
            }catch(err){
                //LOG
                throw new Error(err);
            }
        },
        async deleteProduct(parent, {id}, context, info){
            try{
                const filter = {id};
                const update = {deletedAt: Date.now()};
                return Product.findOneAndUpdate(filter, update);
            }catch(err){
                //LOG
                throw new Error(err);
            }
        },
        async updateProduct(parent, {id, name, price}, context, info){
            try{
                let fieldsToUpdate = {name, price};
                return Product.findByIdAndUpdate(id, {$set: fieldsToUpdate}, {new: true});
            }catch(err){
                //LOG
                throw new Error(err);
            }
        }
    }
}