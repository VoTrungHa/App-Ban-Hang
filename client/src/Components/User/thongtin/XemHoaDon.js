import React, { Component } from 'react'
import{connect} from 'react-redux';
import{DeleteLS} from '../../../Actions/actionMoan';
import{withRouter} from 'react-router-dom';
export class XemHoaDon extends Component {
     
    delete=(value)=>{//xóa dữ liệu
         
        this.props.DeleteLS(value,this.props.history);
        
    }
    render() {
      const{values}=this.props;
      const value=values?values:'';
        return (
            <div class="row">
                <div class="col-md-2 col-ms-12">
                                <img src={value.url} alt={value.name} style={{width:"150px",borderRadius:"5px" ,height:"150px"}}/>
                            </div>
                            <div class="col-md-5 col-ms-12">
                                <form class="form-group " > 
                                <label>id:</label><input type="text" class="form-control" value={value._id}  />  
                                <label>Name:</label><input type="text" value={value.name} class="form-control"   />
                                <label>Giá thành:</label><input type="text" class="form-control" value={value.gia}   />  
                                </form>
                            </div>
                            <div class="col-md-5 col-ms-12">
                                <form class="form-group " > 
                                <label>Ngày Mua:</label><input type="text" class="form-control" value={value.date}  />  
                                <label>Số lượng:</label><input type="Number" class="form-control"  value={value.soluong} /> 
                                </form>
                            </div>
                            
                            <div id="pro-btn">
                                {
                                    value? <div><button type="button" id="btn-edit" onClick={()=>this.delete(value)} >delete <i class="fas fa-trash-alt"></i></button>
                                    <button type="button" id="btn-search">Search <i class="fas fa-search"></i></button>
                                    </div>:""
                                }
                               
                            </div>
            </div>
        )
    }
}
const valueState=(state)=>({
    values:state.Hoadon
})

export default connect(valueState,{DeleteLS})(withRouter(XemHoaDon))
