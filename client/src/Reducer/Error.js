import *as types from '../Types/types';
let initState=null;

export const Error=(state=initState,action)=>{
    switch(action.type)
    { 
        case types.LOGINS:  // bắt lỗi thiếu input
        return action.playload.value?action.playload.value:""
        case types.DANGKYS:// bắt lỗi thiếu input
        return action.playload.value?action.playload.value:"";
        case types.LOADING:// tắt from login và đăng kí. xóa bỏ lỗi hiển thị trên from
              return null ;
        case types.HOSOLS:
            alert(action.playload)
        
            
        default: return state;
    }
}