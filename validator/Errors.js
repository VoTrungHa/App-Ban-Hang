const validator=require('validator');

module.exports=ERRORSL=(data)=>{ 
    let error={}; 
     
    if(validator.isEmpty(data.passWord))
    {
        error.passWord="passWord is required"
    }
    if(!validator.isLength(data.passWord,{min:6,max:30}))
    {
        error.passWord="passWord must between 6 or 30 charater"
    }
    if(validator.isEmpty(data.userName))
    {
        error.userName="userName is required"
    }
    if(!validator.isLength(data.userName,{min:6,max:30}))
    {
        error.userName="useName must between 6 or 30 charater"
    } 
     
    return{
        error,
        isvalidator:Object.keys(error).length===0
    }
}