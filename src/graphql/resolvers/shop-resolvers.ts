import Shop from '../../models/shop';

export default {
    Query: {
        async getShops() {
            try{
                const shops = await Shop.find();

                return shops;
            }catch(err){
                //LOG
                throw new Error(err);
            }
        },
        async getShop(parent, {id}, context, info){
            try{
                const shop = await Shop.findById(id);

                return shop;
            }catch(err){
                //LOG
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
                //LOG
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
                //LOG
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
                //LOG
                throw new Error(err);
            }
        }
    }
}