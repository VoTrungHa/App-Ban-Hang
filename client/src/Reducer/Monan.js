import * as types from '../Types/types';
import _ from 'lodash';
const value=JSON.parse(localStorage.getItem('monan'));
const values=value!==null?value:[]; 
//search san phẩm;

let search=(vl)=>{
    return values.filter(val=>{
        return val.name.toLowerCase().indexOf(vl.toLowerCase())!==-1;
    })
} 
// dungf để truyền món ăn trang hoạt động tỉnh đang lưu ơ localstore
export const Monan=(state=values,action)=>{
    
    switch(action.type)
    {
        case types.SHOWMONAN: 
;           return state;// show sản phẩm ra trang
        case types.EDITMUAHANG:
            return state
        case types.DELETELS:// xóa lịch sử hóa đơn.
            alert(action.playload)
        case types.SEARCH:// tìm kiếm sản phẩm 
            let s=search(action.playload); 
            return s?s:values;
        
        default: return state;
    }
}