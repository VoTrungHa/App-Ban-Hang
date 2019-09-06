import React, { Component } from 'react'
import {Xemhoadon} from '../../../Actions/actionMoan';
import{connect} from 'react-redux';
 
export class NewHoaDon extends Component {

    xemhoadon=(value)=>{  
        this.props.Xemhoadon(value);// gửi id lên redux để tim lây re sanr phẩm được chọn
    }
     
    render() {
        const{value}=this.props;
        return ( 
            <tr >
                <th scope="row"><input type="checkbox"/></th>
                <td><img src={value.url} alt={value.name} style={{width:"30px",height:"30px"}}/></td>
                <td>{value._id.length>15?value._id.substring(0,15) +"...":value._id}</td>
                <td>{value.name}</td> 
                <td>{value.gia}</td>
                <td>{value.date.length>20?value.date.substring(0,10)+"...":value.data}</td>
                <td>{value.soluong}</td> 
                <td>
                <div id="action">
                    <a onClick={()=>this.xemhoadon(value._id)} id="action-view">View <i class="far fa-eye"></i></a>
                </div>
                </td> 
            </tr>
        )
    }
}

export default connect(null,{Xemhoadon }) (NewHoaDon)
