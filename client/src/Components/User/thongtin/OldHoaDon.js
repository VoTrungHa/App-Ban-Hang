import React, { Component } from 'react'
import {Xemhoadonls} from '../../../Actions/actionMoan';
import{DeleteLS} from '../../../Actions/actionMoan';
import{connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
export class OldHoaDon extends Component {
    xemHoaDon=(value)=>{
        this.props.Xemhoadonls(value);
    }
    delete=(value)=>{
        this.props.DeleteLS(({_id:value}),this.props.history);
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
                <a onClick={()=>this.xemHoaDon(value._id)} id="action-view">View <i class="far fa-eye"></i></a>
                <a onClick={()=>this.delete(value._id)} id="action-delete">Delete <i class="far fa-trash-alt"></i></a> 
                </div>
            </td> 
            </tr>
        )
    }
}

export default connect(null,{Xemhoadonls,DeleteLS})(withRouter(OldHoaDon))
