import React, { Component } from 'react'
import{Searchsp} from '../Actions/action'
import{connect} from 'react-redux';
export class Search extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            searchs:'',
        }
    }  
    onchange=(e)=>{
        this.setState({searchs:e.target.value}) 
        this.props.Searchsp(this.state.searchs);
    } 
    render() { 
        return (
            <form>
              <input class="form-control rounded-pill mr-sm-2" style={{width:"450px"}} type="search" placeholder="Search" aria-label="Search..." onChange={this.onchange} value={this.state
            .searchs} name="search"  /> 
             
            </form> 
        )
    }
}

export default connect(null,{Searchsp})(Search)
