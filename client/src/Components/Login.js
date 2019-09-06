import React, { Component } from 'react'
import{Logins} from '../Actions/action';
import{connect} from 'react-redux';
 
export class Login extends Component {

  constructor(props)
  {
    super(props)
    this.state={
      userName:'',
      passWord:'' 
       
    }
  }
  onchange=(e)=>{
    const{name,value}=e.target;
    this.setState({[name]:value});
  }
  onsubmit=(e)=>{
    e.preventDefault();
    this.props.Logins(this.state,this.props.history); 
     
  } 
    render() { 
        const values=this.props.value!==null?this.props.value:''; 
        return (

          <div className="collapse slow d-flex justify-content-center mt-5" id="demo2">
          <div className="card" style={{width:"350px"}}>
            <div className="card-body">
              <h1 className="card-title">Đăng Nhập</h1>
              <form onSubmit={this.onsubmit}>
                      <div className="form-group">
                          <label  >UserName</label>
                          <input type="text" className="form-control"   aria-describedby="userHelp" value={this.state.userName} name="userName" placeholder="username..." onChange={this.onchange}/>
                          <small style={{color:"red"}}>{values.userName} </small>
                      </div> 
                      <div className="form-group">
                          <label >PassWord</label>
                          <input type="passWord" value={this.state.passWord} name="passWord" className="form-control"   aria-describedby="passlHelp" placeholder="passWord..." onChange={this.onchange}/>
                          <small style={{color:"red"}}>{values.passWord} </small>
                      </div>  
                      <small style={{color:"red"}}>{values.data }</small><br/>
                      <button type="submit " className="btn btn-danger">Đăng Nhập</button>
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
export default connect(StateValue,{Logins})(Login);
