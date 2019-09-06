const mongoose=require('mongoose');


const Schame=mongoose.Schema;

const users=new Schame({
    userName:{type:String},
    passWord:{type:String},
    email:{type:String}

})

module.exports=Users=mongoose.model("User",users);