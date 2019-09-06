import {combineReducers} from 'redux';
//import những file reducer
import {Error} from './Error';
import {Monan} from './Monan';
import{MonanMua} from './MonanMua';
import Hoadon from './Hoadon';
const Reducer=combineReducers({
     Error,Monan,MonanMua:MonanMua?MonanMua:null,
     Hoadon
})

export default Reducer;