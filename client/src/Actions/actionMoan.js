import * as types from '../Types/types';
import axios from 'axios';
import SetHeaderAutho from '../../src/HederAutho/SetHeaderAuth'
const monan=localStorage.getItem('hoso')?JSON.parse(localStorage.getItem('hoso')):[];
export const Show=()=>dispatch=>{
    dispatch({
        type:types.SHOWMONAN,
    })
}
export const Mua=(useState )=>dispatch=>{

    dispatch({
        type:types.MUAMONAN,
        playload:useState,
        
    })
}
export const Edit=()=>dispatch=>{ 
    dispatch({
        type:types.EDITMUAHANG,
         
    })
}
export const Link=(useState)=>dispatch=>{
    dispatch({
        type:types.LINK,
        playload:useState
    })
}
 
export const Hoso=(useState)=>dispatch=>{/* chuyên dữ diệu người mua và sản phẩm 
    vào hồ sơ, và bắt lỗi thông qua reducser.*/
    axios.post('http://localhost:9000/monan/insert',useState)// chuyeenr dữ liệu về mongodb
    .then(res=>{ 
        if(res.data.bio)/*kiểm tra trả dữ về mongodb đc chưa.*/
        {  
            monan.push(res.data.value); 
            localStorage.setItem("hoso",JSON.stringify(monan))/* chuyền vào localstore khi vào hóa đơn nó sẽ sưu ra hóa đơn vừa mua*/
            
        }
        else{// bắt lỗi ở reducer
            dispatch({
                type:types.HOSO,
                playload:res.data.value
            })
        }
    })
    .catch(err=>{
        dispatch({
            type:types.HOSO,
            playload:err
        })
       
    })
}
export const Xemhoadon=(useState)=>dispatch=>{ 
    dispatch({
        type:types.XEMHOADON,
        playload:useState
    })
}
export const Xemhoadonls=(useState)=>dispatch=>{
    console.log(useState);
    dispatch({
        type:types.XEMHOADONLS,
        playload:useState// chuyền id về reducer
    })
}
// xoa du lieu mon an trong ls
export const DeleteLS=(useState,history)=>dispatch=>{  
    SetHeaderAutho(localStorage.getItem("value"));  
    axios.post('http://localhost:9000/monan/delete/'+useState._id)
    .then(res=>{
        if(res.data.bio)
        {    
            localStorage.setItem("hosolichsu",JSON.stringify(res.data.value)); 
            alert(" Đã xóa thành công sản phẩm !")
            history.push('/hdmonan') 
        }else
        {
            dispatch({
                type:types.DELETELS,
                playload:res.data.value
            })
        } 
    }).catch(err=>{alert(" thời gian tồn tại user trong hệ thống hết hạn."+
    "Xin hãy đăng nhập lại!")})
}
