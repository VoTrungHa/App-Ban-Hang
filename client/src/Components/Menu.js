import React, { Component } from 'react'
import{Link} from 'react-router-dom';
import{Show} from '../Actions/actionMoan';
import {connect} from 'react-redux';
export class Menu extends Component {

    Monan=()=>{
      this.props.Show();
    }
    render() {
        return (
          <div className="col-md-2" id="nav-menu">
          <nav className="navbar navbar-expand-lg d-flex align-items-start  navbar-light "  > 
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#demo" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="demo"> 
          <nav className=" sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column "  >
                <li className="nav-item">
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span  style={{color:" rgb(61, 19, 28)",fontSize:"19px", textDecoration:" underline"}}>Danh Mục</span>
                 
              </h6>
                  <Link to="/monan" onClick={this.Monan} >
                  <a className="nav-link active" href="#"  style={{color:"white"}}> 
                    Món Ăn Ngon <i class="fas fa-book"></i>
                  </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"  style={{color:"white"}}>
                    <span data-feather="file"></span>
                    Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"  style={{color:"white"}}>
                    <span data-feather="shopping-cart"></span>
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"  style={{color:"white"}}>
                    <span data-feather="users"></span>
                    Customers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"  style={{color:"white"}}>
                    <span data-feather="bar-chart-2"></span>
                    Reports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{color:"white"}}>
                    <span data-feather="layers"></span>
                    Integrations
                  </a>
                </li>
              </ul>

              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span  style={{color:" rgb(61, 19, 28)",fontSize:"19px", textDecoration:" underline"}}>Thông Tin Khách Hàng</span>
                 
              </h6>
              <ul className="nav flex-column mb-2">
                <li className="nav-item">
                  <Link to="/user">
                  <a className="nav-link" href="#" style={{color:"white"}}>
                    <span data-feather="file-text"></span>
                    Thông tin cá nhân
                  </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/hdmonan">
                  <a className="nav-link" href="#"  style={{color:"white"}}>
                    <span data-feather="file-text"></span>
                      Hóa Đơn Đã Mua Hàng <i class="fas fa-pencil-alt"></i>
                  </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"  style={{color:"white"}}>
                    <span data-feather="file-text"></span>
                    Social engagement
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{color:"white"}}>
                    <span data-feather="file-text"></span>
                    Year-end sale
                  </a>
                </li>
              </ul>
            </div>
    </nav> 
  </div>
</nav>
</div>
        )
    }
}

export default connect(null,{Show})(Menu)
