import React, { Component } from 'react'
import jwt_decode from 'jwt-decode';
import XemHoaDon from './XemHoaDon';
import UserName from './UserName';
import NewHoaDon from './NewHoaDon';
import OldHoaDon from './OldHoaDon';

 
export class HDmonan extends Component { 
    constructor(props)
    {
        super(props);
        this.state={
             
            User:{}
        }
    }
    componentWillMount()
    {
         
            const token=localStorage.getItem("value")// lấy dữ liệu token  
            if(token)
            {
                let decode=jwt_decode(token); // giải mã token 
                this.setState({User:decode});  
            }  
            const hoso=JSON.parse(localStorage.getItem("hoso"));
            if(hoso)
            {
                let hs=hoso?hoso:[];// nếu không có hồ sơ lịch sử thì cho mảng rổng
                this.setState({Hoso:hs})
            } 
            
    }
     
    render() { 
        
        //lịch sử
        const hosols=JSON.parse(localStorage.getItem("hosolichsu"));
        const hsls=hosols?hosols:[] 
        console.log(hsls);
        // new
        const hoso=JSON.parse(localStorage.getItem("hoso"));
        const hs=hoso?hoso:[] 

        const showLs=()=>{
            return hsls.map(val=>{
                return <OldHoaDon key={val._id} value={val}/>
            })
        }
        const shownew=()=>{
            return hs.map(val=>{
                return <NewHoaDon key={val._id} value={val}/>
            })
        }
        return (
            <div id="body-monan">
            <div id="produce-bg">
            <div className="container-fluid">
                <div id="pro-header" class="pt-4">
                   <UserName user={this.state.User}/>
                </div> 
                <div id="pro-body-1"> 
                        <div id="body-1">
                             <XemHoaDon/>
                        </div> 
                        
                </div>

                <div id="pro-body-1" >
                <h3>Sản Phẩm Hôm Nay </h3>
                <div id="pro-table">
                  
                <table class="table  table-hover"  > 
                    <thead>
                        <tr>
                        <th><input type="checkbox"/></th>
                        <th scope="col">Photos</th>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Giá thành</th>
                        <th scope="col">Ngày mua</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Hoạt động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shownew()}
                    </tbody>
                   
                    </table> </div>
                    <h3>Lịch Sử Mua Trước Đó</h3>
                    <div id="pro-table">
                   
                <table class="table  table-hover"  > 
                    <thead>
                        <tr>
                        <th><input type="checkbox"/></th>
                        <th scope="col">Photos</th>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Giá thành</th>
                        <th scope="col">Ngày mua</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Hoạt động</th>
                        </tr>
                    </thead>
                    <tbody>
                          {showLs()}
                    </tbody> 
                    </table> </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}

export default HDmonan
