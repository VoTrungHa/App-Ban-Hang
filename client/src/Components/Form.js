import React, { Component } from 'react' 
import {Link,withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import {Loading} from '../Actions/action';
export class Form extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            bio:true
        }
    }

    button1=()=>{
       
        this.props.Loading()
    }
    button2=()=>{
     
        this.props.Loading()
    }

    render() {
        return (
            <ul className="nav d-flex">
            <li className="nav-item">
            <Link to="/login">
            <button type="button" className="btn btn-primary" data-toggle="collapse" data-target="#demo2" onClick={this.button1}>
             Đăng Nhập <i className="fas fa-sign-in-alt"></i>
            </button> 
            </Link> 
            </li>
            <li className="nav-item">
            <Link to="/dangky">
            <button type="button" className="btn btn-danger ml-2" data-toggle="collapse" data-target="#demo3" onClick={this.button2}>
             Đăng ky <i className="fas fa-cash-register"></i>
            </button> 
            </Link> 
            </li> 
          </ul>
        )
    }
}

export default connect(null,{Loading}) (withRouter(Form))
