import React, { Component } from 'react'
import UserName from '../UserName';
import jwt_decode from 'jwt-decode';
export class User extends Component {
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
    }
     
         render() {
                  return (
             <div id="body-monan">
            <div id="produce-bg">
                  <div className="container-fluid">
                        <div id="pro-header" class="pt-4">
                               <UserName user={this.state.User} />
                               <i class="fas fa-cog" data-toggle="collapse" href="#user-body" id="setting"></i>
                         </div> 
                         <div id="user-body" class="collapse ">
                              <h1>Cài đặt tài khoản chung</h1>
                              <hr/>
                              <table class="table table-hover text-center "> 
                                <tbody>
                                <tr>
                                    <td>Tên</td>
                                    <td>Doe</td>
                                    <td><a  data-toggle="collapse" href="#input-text">Chỉnh sửa</a></td>
                                </tr>
                                <tr >
                                    <td>Liên hệ</td>
                                    <td>email</td>
                                    <td><a  data-toggle="collapse" href="#input-text">Chỉnh sửa</a></td>
                                </tr>
                                <tr>
                                    <td>passWord</td>
                                    <td>.....</td>
                                    <td><a  data-toggle="collapse" href="#input-text">Chỉnh sửa</a></td>
                                </tr>
                                </tbody>
                            </table>
                        </div> 
                        <div class="collapse" id="input-text" >
                            <input type="text" />
                            <button>thay đổi</button>    
                        </div>          
                  </div>
             </div>
            </div>
            
                  )
         }
}

export default User
