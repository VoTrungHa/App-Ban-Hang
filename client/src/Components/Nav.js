import React, { Component } from 'react';
import Search from './Search';
 import Form from './Form';
 import {Link,withRouter} from 'react-router-dom';
 
 
export class Nav extends Component {
    LogOut=()=>{
      localStorage.removeItem("value");
      localStorage.removeItem("hosolichsu");
      localStorage.removeItem("hoso");
      this.props.history.push('/');
    }

   
    render() {
     const DangXuat=(
        <button type="button" title="dang xuat" style={{width:" 30px",marginTop:"5px", }} className="rounded-circle" onClick={this.LogOut} ><i class="fas fa-user-alt"></i></button>
     ) 
        return (
          <div className="p-2 " id="header-nav">
              <div className="container-fluid">
                <div className="row ">
                <div className="col-md-3 col-sm-12 " id="web">
                  
                    <h5 onClick={()=>this.props.history.push("/")}>Websites<span>.com</span></h5>
                   
                </div>
                <div className="col-md-6  col-sm-12 ">
                  <Search/>
                </div>
                <div className="col-md-3  col-sm-12 "> 
                  {localStorage.value?DangXuat:<Form/>} 
                </div>
                </div>
              </div>
          </div>

          
 
        )
    }
}

export default  withRouter(Nav)
