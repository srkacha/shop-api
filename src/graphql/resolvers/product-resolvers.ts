import Product from '../../models/product';
import logger from '../../util/logger';

export default {
    Query: {
        async getProducts(parent, {shopId}, context, info){
            try{
                const products = await Product.find({shopId});

                return products;
            }catch(err){
                logger.log('error', 'Error retrieving products by shopId.');
                throw new Error(err);
            }
        },
        async getProductsByPage(parent, {shopId, page, pageSize}, context, info){
            try{
                const skip = page * pageSize;
                const limit = pageSize;
                const products = await Product.find({shopId}, {}, {skip, limit});

                return products;
            }catch(err){
                logger.log('error', 'Error retrieving products by page.');
                throw new Error(err);
            }
        },
        async filterProductsByPrice(parent, {shopId, from, to}, context, info){
            try{
                let limitQuery = {};

                //generating the limit query for price filtering
                if(from !== undefined) limitQuery["$gte"] = from;
                if(to !== undefined) limitQuery["$lt"] = to;

                const products = await Product.find({shopId, "price":limitQuery});
                
                return products;
            }catch(err){
                logger.log('error', 'Error retrieving products filtered by price.');
                throw new Error(err);
            }
        }
    },
    Mutation: {
        async createProduct(parent, {name, price, shopId}, context, info){
            try{
                const product = await new Product({name, price, shopId});

                return product.save();
            }catch(err){
                logger.log('error', 'Error creating product.');
                throw new Error(err);
            }
        },
        async deleteProduct(parent, {id}, context, info){
            try{
                const filter = {_id: id};
                const update = {deletedAt: Date.now()};

                return Product.findOneAndUpdate(filter, update);
            }catch(err){
                logger.log('error', 'Error deleting product.');
                throw new Error(err);
            }
        },
        async updateProduct(parent, {id, name, price}, context, info){
            try{
                let fieldsToUpdate = {};

                //updating only fields that are provided by the request
                if(name !== undefined) fieldsToUpdate["name"] = name;
                if(price !== undefined) fieldsToUpdate["price"] = price;

                return Product.findByIdAndUpdate(id, {$set: fieldsToUpdate}, {new: true});
            }catch(err){
                logger.log('error', 'Error updating product');
                throw new Error(err);
            }
        }
    }
}