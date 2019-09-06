import React from 'react';
import Create from './Components/User/Create';
import Nav from './Components/Nav';
import Login from './Components/Login'
import Dangky from './Components/Dangky';
import Menu from './Components/Menu';
import User from '../src/Components/User/thongtin/canhan/User';
import Index from './Components/User/monan/Index';
 import HDmonan from './Components/User/thongtin/HDmonan';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
function App() {
  return (
      <Router> 
        <Nav/> 
        <div className="row" id="body">
          <Menu/> 
          <div className="col-md-10 m-0 p-0">
          <Route path="/" exact component={Create}/>
          <Route path="/monan" exact component={Index}/>
          <Route path="/user" exact component={User}/>
          <Route path="/hdmonan" exact component={HDmonan}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/dangky" exact component={Dangky}/>
          </div>
        </div> 
      </Router>
  );
}

export default App;
