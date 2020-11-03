const mongoose=require("mongoose")
const orgnization=new mongoose.Schema({

});
const service=new mongoose.Schema({

});
const user=new mongoose.Schema({
   name:{type: String}
});
const register=new mongoose.Schema({

});
const orgnization_1=mongoose.model('or',orgnization);
const service_1=mongoose.model('ser',service);
const user_1 =mongoose.model('user',user);
const register_1=mongoose.model('reg',register);
module.exports={
    orgnization_1,
     service_1,
        user_1,
        register_1
     }