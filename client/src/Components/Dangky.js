import React, { Component } from 'react'
import{connect} from 'react-redux';
import {Dangkys} from '../Actions/action'
import {Loading} from '../Actions/action';
import{Link} from 'react-router-dom';
export class Dangky extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      userName:"",
      passWord:"",
      rePassWord:"",
      email:""
    }
  }
  onchange=(e)=>{
    const{value,name}=e.target;
    this.setState({[name]:value})
  }
  onsubmit=(e)=>{
    e.preventDefault();
    this.props.Dangkys(this.state)
  }
    render() {
      const values=this.props.value?this.props.value:'' 
        return (
          <div className="collapse slow d-flex justify-content-center mt-3" id="demo3">
          <div className="card" style={{width:"350px"}}>
            <div className="card-body">
              <h1 className="card-title">Đăng Ký</h1>
          <form onSubmit={this.onsubmit}>
          <div className="form-group">
              <label >UserName</label>
              <input type="text" className="form-control" name="userName" value={this.state.userName} onChange={this.onchange}     placeholder="username..."/>
              <small style={{color:"red"}}>{values.userName}</small>
          </div> 
          <div className="form-group">
              <label >PassWord</label>
              <input type="passWord" className="form-control"  name="passWord" value={this.state.passWord} onChange={this.onchange}  aria-describedby="passlHelp1" placeholder="passWord..."/>
              <small   style={{color:"red"}}> {values.passWord} </small>
          </div>
          <div className="form-group">
              <label >RePassWord</label>
              <input type="passWord" className="form-control"   name="rePassWord" value={this.state.rePassWord} onChange={this.onchange} aria-describedby="repasslHelp1" placeholder="repassWord..."/>
              <small style={{color:"red"}}>{values.rePassWord} </small>
          </div> 
          <div className="form-group">
              <label >email</label>
              <input type="email" className="form-control"   name="email" value={this.state.email} onChange={this.onchange} aria-describedby="emailHelp1" placeholder="email..."/>
              <small style={{color:"red"}}> {values.email}</small>
          </div> 
          <span style={{color:"red"}}>{values.data} </span><br/>
          <button type="submit" className="btn bg-danger">Create Account</button><br/>
          <Link to="/login"><a style={{color:"red"}} onClick={()=>this.props.Loading()}>quay lai login </a></Link> 
          </form>
          </div>   
          </div>
            </div>
            
        )
    }
}
const StateValue=(state)=>({
  value:state.Error
})
export default connect(StateValue,{Dangkys,Loading})(Dangky)
