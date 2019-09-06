const Router=require('express').Router();
const Users=require('../models/models_use');
const bcrypt=require('bcrypt');
const monan=require('../models/Monan');
const jwt=require('jsonwebtoken');
const ERRORS=require('../validator/Error');
const ERRORSL=require('../validator/Errors');
 process.env.SECRET_KEY='secret';
 const passport=require('passport');
Router.route('/dangky').post((req,res)=>{  
   const{isvalidator,error}=ERRORS(req.body) 
    if(!isvalidator)// kiểm tra xem có hợp lệ với yêu caauf input chưa
    {
        res.json({value:error?error:null});// phản hoài lỗi lên form
    } 
    Users.findOne({userName:req.body.userName,email:req.body.email})// kiêm tra mọi thứ có tồn tại hay chưa
    .then(use=>{
        if(!use)// nếu chưa tồn tại làm việc này
        {
            const user={// tạo đói tượng
                userName:req.body.userName,
                passWord:req.body.passWord,
                email:req.body.email
            }
            bcrypt.hash(req.body.passWord,10,(err,hash)=>{// bâm giá trị password
                user.passWord=hash// chuyển password thành mã đã bâm
                Users.create(user)// lưu
                .then(use=>res.json({value:{data:use.userName+"dang ki thanh cong!",bio:true}})) 
                
            }) 
        }else{ 
            res.json({value:{data:"use da ton tai !",bio:false}})
        }
    })
    .catch(err=>res.json(err));
})
Router.route('/login').post((req,res)=>{
    const{isvalidator,error}=ERRORSL(req.body) 
    if(!isvalidator)// bắt lỗi trong input
    {
        res.json({value:error?error:null});
    } 
    
    Users.findOne({userName:req.body.userName})// kiểm tra user đã đăng kí chưa
    .then(use=>{
        if(use)
        {
            if(bcrypt.compare(req.body.passWord,use.passWord))// so sánh pass từ form và database có trùng nhau không
            {
                console.log(req.body.passWord)
                const playload={// tạo đối tượng với _id để chuyển thành token
                    _id:use._id,
                     
                }
                const token=jwt.sign(playload,process.env.SECRET_KEY,{// mã hóa playload thành token
                    expiresIn:1440// thời gian hoạt động

                })
               return res.json({token,bio:true})// trung khớp gửi token lên client
            }
            else{
               return res.json({value:{data:"Mt khau khong dung",bio:false}})
            }
        }
        else{
           return res.json({value:{data:"user khong ton tai",bio:false}})
        }
    })
    .catch(err=>{
        return res.json(err);
    })

})
Router.get('/get',passport.authenticate('jwt',{session:false}),(req,res)=>{ // kiểm chứng giá trị được gửi theo giá trị hearder authorizatin
    monan.find({sp:req.user._id})// lấy ra tất vả produce ma user sở hưu
    .then(use=>{ 
        res.json({values:use,bio:true})
    })
    .catch(err=>{
        res.json({value:err,bio:false})
    })
     
    });
module.exports= Router;