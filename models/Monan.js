const mongoose=require('mongoose');

const schame=mongoose.Schema;

const monan=new schame({
    name:{type:String},
    gia:{type:Number},
    soluong:{type:Number},
    bio:{type:Boolean},//link
    url:{type:String} ,
    userName:{type:String},
    email:{type:String},
    sp:{type:String},
    date:{type:Date}
})

module.exports=Monans=mongoose.model("monan",monan);