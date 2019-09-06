import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export class Personal extends Component {
    render() {
        return (
            <ul class="nav">
                <li class="nav-item">
                   <Link to="/"> <a class="nav-link  ">Danh Sách</a></Link> 
                </li>

                <li class="nav-item">
                   <Link to='/create'> <a class="nav-link">Thêm Personal</a></Link> 
                </li>
                <li class="nav-item">
                   <Link to="/update"> <a class="nav-link">Thây Đổi</a></Link> 
                </li>
                 
                </ul>
        )
    }
}

export default  Personal
