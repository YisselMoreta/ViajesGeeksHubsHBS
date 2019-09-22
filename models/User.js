const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

const userSchema=new mongoose.Schema({
    usuario:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true    
    },
    password:{
        type:String,
        required:true
    }

});


userSchema.pre('save',function (next){
    const user=this;
    if(user.isModified('password')){
        bcrypt.hash(user.password,10)
            .then(hash=>{
                user.password=hash;
                return next();
            }).catch(err=>next(err))
    } else next();
})

const userModel=mongoose.model('user',userSchema);

module.exports=userModel;