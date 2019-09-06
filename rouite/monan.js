const Router=require('express').Router();
const monan=require('../models/Monan'); // mo module món ăn
const passport=require('passport');// dừng để kiểm chứng giá trị từ header authorization gửi về
const Users=require('../models/models_use');// module useer
Router.route('/insert').post((req,res)=>{
    const date=new Date();
     let year=date.getFullYear();
     let moth=date.getMonth();
     let day=date.getDate(); 
     let lets=`${day<10?"0"+day:day}/${moth<10?"0"+moth:moth}/${year<10?"0"+year:year}`; // kiểm tra nếu bé hơn 10 thì them 0 vao trước
    const monanObject= new monan({// tạo đối tượng
        name:req.body.name,
        gia:req.body.gia,
        soluong:req.body.soluong,
        bio:req.body.bio,
        url:req.body.url,
        sp:req.body._id,
        userName:req.body.userName,
        email:req.body.email,
        date:Date(lets) 
    }) 
    monanObject.save()// lưu dữ liệu
    .then(monan=>{
        res.json({value:monan,bio:true})// lấy đôi tượng phản hoài lại. vào localtorge key(hoso)
    })
    .catch(err=>{
        res.json({value:err,bio:false}); 
    }) 
})
Router.route('/delete/:id').post(passport.authenticate('jwt',{session:false}),(req,res)=>{
     
    Users.findById({_id:req.user._id})// kiểm tra lấy ra usser hiện tại.
    .then(use=>{
        if(use)// nếu tôn tại thì làm việc sau
        { 
            monan.findOneAndDelete({_id:req.params.id})// tìm kiếm vaf xóa đi sản phẩm cí _id này
            .then(()=>{
                  monan.find()//sưu ra tất cả sản phẩn còn lại
                  .then(use=>{
                       res.json({value:use,bio:true})// pahnr hoài
                        
                  })
            })
        }
        else{
            res.json({value:"nguoi dung khong ton tai!",bio:false})
        }
    })
    .catch(err=>{
        res.status(402).json(err);
    }) 
})
   



module.exports =Router;