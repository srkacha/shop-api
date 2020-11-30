import Shop from '../../models/shop';
import logger from '../../util/logger';

export default {
    Query: {
        async getShops() {
            try{
                const shops = await Shop.find();

                return shops;
            }catch(err){
                logger.log('error', 'Error retrieving shops.');
                throw new Error(err);
            }
        },
        async getShop(parent, {id}, context, info){
            try{
                const shop = await Shop.findById(id);

                return shop;
            }catch(err){
                logger.log('error', 'Error retrieving shop by ID.');
                throw new Error(err);
            }
        }
    },
    Mutation: {
        async createShop(parent, {name}, context, info){
            try{
                const shop = await new Shop({name});

                return shop.save();
            }catch(err){
                logger.log('error', 'Error creating shop.');
                throw new Error(err);
            }
        },
        async deleteShop(parent, {id}, context, info){
            try{
                const filter = {_id: id};
                const deletedAt = Date.now();
                const update = {deletedAt};
                
                return Shop.findOneAndUpdate(filter, update);
            }catch(err){
                logger.log('error', 'Error deleting shop.');
                throw new Error(err);
            }
        },
        async updateShop(parent, {id, name}, context, info){
            try{
                let fieldsToUpdate = {};

                //updating only the fields provided by the mutation
                if(name) fieldsToUpdate["name"] = name;

                return Shop.findByIdAndUpdate(id, {$set: fieldsToUpdate}, {new: true});
            }catch(err){
                logger.log('error', 'Error updating shop');
                throw new Error(err);
            }
        }
    }
}