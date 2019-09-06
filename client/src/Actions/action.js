
import * as types from '../Types/types';
import axios from 'axios';
import SetHeaderAutho from '../HederAutho/SetHeaderAuth';
export const Logins=(userState,history)=>dispatch=>{
    axios.post("http://localhost:9000/example/login",userState)
    .then(res=>{
        if(res.data.bio)
        { 
            localStorage.setItem("value",res.data.token) 
            SetHeaderAutho(res.data.token);// reset lại header gửi server để kiểm tra có hợp lệ không 
             history.push('/');
             return axios.get("http://localhost:9000/example/get")// kiểm tra chủ nhân đùng hay không
             .then(res=>{
                if(res.data.bio)// nếu đúng
                {
                    // chuyển lịch sử này lên localtore (hosolichsu)
                    localStorage.setItem("hosolichsu",JSON.stringify(res.data.values))
                } 
             })
             .catch(err=>{
                dispatch({
                    type:types.HOSOLS,
                    playload:err.response.data.values

                })
             })
              
        }
        else{ 
                dispatch({
                    type:types.LOGINS,
                    playload:res.data
                }) 
        } 
    }).catch(err=>{
        console.log(err.response.data)
    }) 
}
export const Dangkys=(userState)=>dispatch=>{
    axios.post('http://localhost:9000/example/dangky',userState)
    .then(res=>{
          dispatch({
             type:types.DANGKYS,
             playload:res.data
         })
    })
    .catch(err=>{
        console.log(err.response.data)
    }) 
}
export const Loading=()=>dispatch=>{
    dispatch({
        type:types.LOADING,
        
    })
}
export const Searchsp=(value)=>dispatch=>{
    dispatch({
        type:types.SEARCH,
        playload:value
        
    })
}