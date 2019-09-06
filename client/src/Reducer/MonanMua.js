import * as types from '../Types/types';
import _ from 'lodash';

let value=JSON.parse(localStorage.getItem('monan'));
let values=value!==null?value:[];
 // sử lý khi người dùng chọn mua hàng mons an
export const MonanMua=(state=values,action)=>{
    switch(action.type)
    {  
        case types.MUAMONAN:// tìm đến món ăn đã chọn
            state=values;
            let value=_.findIndex(state,(o)=>o.id===action.playload) //tìm vị trí
            state[value].xem+=1;
            localStorage.setItem('monan',JSON.stringify(state));
             return state[value];
        case types.LINK: // hoạt động nhấn nút link
            state=values;  
            if(action.playload.link)// link
            {
                let value1=_.findIndex(state,(o)=>o.id===action.playload.value);
                state[value1].link+=1; 
                localStorage.setItem("monan",JSON.stringify(state));
                return state[value1];
            }
            else{//no link
                let value1=_.findIndex(state,(o)=>o.id===action.playload.value);
                state[value1].link-=1; 
                localStorage.setItem("monan",JSON.stringify(state)); 
                return state[value1];
            }
         
        case types.HOSO:/* hành động bắt lỗi chuyển thông tin  người mua và sản phẩm của họ về nơi lưu tru( hóa đơn người đã mua hàng)*/

        alert(action.playload); 
        default: return state;
    }
}