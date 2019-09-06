const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');
const passport=require('passport');

const route=require('./rouite/index');
const routerMonan=require('./rouite/monan'); 
const app=express();  
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const url="mongodb://localhost:27017/quanly";
mongoose.connect(url,{useNewUrlParser:true,useCreateIndex:true})
.then(()=>console.log("ket noi mongodb thanh cong"))
.catch((err)=>{console.log("ket nois mongodb that bai !"+err)}) 

app.use('/example',route);
app.use("/monan",routerMonan); 
app.use(passport.initialize());
require('./congfi/passport')(passport);
app.listen(9000,()=>{console.log("chay voi port 9000")});