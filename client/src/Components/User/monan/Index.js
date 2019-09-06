import React, { Component } from 'react'
import Monan from './Monan';
import{connect} from 'react-redux';
export class index extends Component {
    render() {
        const{values}=this.props;
        
        const show=()=>{
            return values.map(val=>{
                return <Monan value={val} key={val.id}/>
            })
        } 
        return (
            <div className="container-fulid" id="monan"> 
                <div className="row">
                    {show()}
                </div>
            </div>
        )
    }
}

const valueState=(state)=>({
    values:state.Monan
})

export default connect(valueState,null)(index)
