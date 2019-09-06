import *as types from '../Types/types';
import _ from 'lodash'; 
const Hoadon=(state=null,action)=>{
    switch(action.type)
    {
        case types.XEMHOADON:
            {
                const hoso=JSON.parse(localStorage.getItem("hoso")); 
                const hs=hoso!==null?hoso:[];// nếu không có hồ sơ lịch sử thì cho mảng rổng
                state=hs; 
                let index=_.findIndex(state,(o)=>o._id===action.playload)//tìm vị trí của id
               return state[index]
            }
            case types.XEMHOADONLS:
            {
                var hosols=JSON.parse(localStorage.getItem("hosolichsu"));
                var hsls=hosols?hosols:[];// nếu không có hồ sơ lịch sử thì cho mảng rổng 
                state=hsls;
                
                let index=_.findIndex(state,(o)=>o._id===action.playload)//tìm vị trí của id
                
               return state[index]
            }
            
        default: return state;
    }
}
export default Hoadon;