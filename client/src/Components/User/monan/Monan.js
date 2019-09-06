import React, { Component } from 'react'
 import{Mua} from '../../../Actions/actionMoan';
 import {connect} from 'react-redux';
 import{Edit} from '../../../Actions/actionMoan';
 import{Link} from '../../../Actions/actionMoan';
 import{Hoso} from '../../../Actions/actionMoan'; 
 import jwt_decode from 'jwt-decode';
 import{withRouter} from 'react-router-dom';
export class Monan extends Component {
 
    constructor(props)
    {
        super(props);
        this.state={
            values:[],
            link:true,
            soluong:1,
        }
    }
    componentWillMount()
    {
        //this.getDate(); 
    }
    clickLink=(value)=>{
        this.setState({link:!this.state.link});
        const useState={
            link:this.state.link,
            value
        }
        this.props.Link(useState);
    }
    MuaNgay=()=>{// event chuyển dữ liệu về mongodb
        const{valueXem}=this.props;// dữ liệu món ăn được chọn
        if(localStorage.value)// kiểm tra có nhập tài khoản chưa
        {
        const token= localStorage.getItem("value");// thông tin nhân vật
        const decode=jwt_decode(token); 
        const useState={// đối tượng sản phẩm và thông tinh nhân vật
            id:valueXem.id,
            name:valueXem.name,
            gia:valueXem.gia*this.state.soluong,
            soluong:this.state.soluong,
            bio:valueXem.bio,
            url:valueXem.url,
            userName:decode.userName,
            _id:decode._id,
            email:decode.email
        } 
        
        this.props.Hoso(useState);}// dư liệu chuyển đến hành động và về sserver. và được phản hồi lại localstore value(hố sơ)
        else{
             alert("bạn cần phải đăng nhập tài khoán") 
        }
        

    }
    onChange=(e)=>{

        this.setState({soluong:e.target.value})
    }
    getDate=()=>{ 
        const data=[
            {id:1,
             name:"Trứng cút chiên",
             gia:12000,
             link:0,
             xem:0,
             mua:0,
             bio:true, 
             url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbbtCBlKQr3uDg7sNPShHsISIKatUbthrqXolmAuEZVHNzGSPbhA"
            },
            {id:2,
                name:"Hải Sản Hấp",
                gia:28000,
                link:0,
                xem:0,
                mua:0, 
                bio:false, 
                url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTLV7kEPcPYdmc5jlUgNxr59XuC_Ii86ZenEKNq6SCuQZLve9qTw"
               },
               {id:3,
                name:"Bún Đậu Khuông",
                gia:18000,
                link:0,
                link:0,
                bio:false, 
             xem:0,
             mua:0, 
                url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd-3VuXN4Zoh0qcL1Y7GguKvs783H_kZb1sEWG4pu3Fl60Gyrr"
               },
               {id:4,
                name:"Ốc Bưu Mắn Gừng",
                gia:22000,
                link:0,
                link:0,
                bio:false, 
             xem:0,
             mua:0, 
                url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJLhQFBA_kBKow-C77_9iaDpHKd3cVX_ReCVbaHWDxYnGbv30X"
               },
               {id:5,
                name:"Bún Kho Thịt Thưng",
                gia:16000,
                link:0,
                link:0,
                bio:false, 
             xem:0,
             mua:0, 
                url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMlh576QasmwLyishzHnBjdM-VFgEkV6jEpJDh-I2lVCz2CX2Kcw"
               },
               {id:6,
                name:"Cua Hấp ",
                gia:20000,
                link:0,
                link:0,
                bio:false, 
             xem:0,
             mua:0, 
                url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHCJEvtYoNlLfkUu_p0qc3oy3ED2Nm0S9Ea8A3r-FKD3fg8H3anw"
               },
               {id:7,
                name:"Cá Hoài Hấp",
                gia:80000,
                link:0,
                bio:false, 
                link:0,
             xem:0,
             mua:0, 
                url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyisM-7Sj3i4xXWH672auLKGl-6joreGB_YHu4oabST2hHXi4zKw"
               },{id:8,
                name:"Lẩu Chân Gà Ta",
                gia:120000,
                link:0,
                link:0,
                bio:true, 
             xem:0,
             mua:0, 
                url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN6dEOq5zI_Th5HpnVaoSsy1B9KXjkXJLqku8LE9qUWopl3pZM0Q"
               },
               {id:9,
                name:"Bánh Chân Vịt",
                gia:6000,
                link:0,
                link:0,
                bio:false, 
             xem:0,
             mua:0, 
                url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBrJ6dN422bdHCViBq-FkMxtjMOo1yNtUkAgqPzwjlvnrbQdmM0g"
               },
               {id:10,
                name:"Cá Rô Nướng",
                gia:19000,
                link:0,
                link:0,
                bio:true, 
             xem:0,
             mua:0, 
                url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Nd3Ov6VQ5EsQK7MSEOMNSnDLSYvAZ2KFW2cMdzehC2zmThzO"
               },
               {id:11,
                name:"Thịt Thưng",
                gia:45000,
                link:0,
                link:0,
                bio:false, 
             xem:0,
             mua:0, 
                url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJCkmffgTZ7KW5O2RxXeANZi5ZSWoxXHXvlHmrcUmG3PTzyQuYRQ"
               },
               {id:12,
                name:"Gà nướng",
                gia:119000,
                link:0, 
                link:0,
                bio:true, 
             xem:0,
             mua:0, 
                url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4qk9g6BTxVivglL7RVN8vmQxXg4Ua2QnKRaEpXOL4i0XPYfENzA"
               } 
        ]

        localStorage.setItem("monan",JSON.stringify(data));
    }
     
    onMuaHang=(value)=>{ 
         this.props.Mua(value);
          
    }
    render() { 
        const{value}=this.props;
        const{valueXem}=this.props; 
        return (
            <div className="col-md-3 col-sm-6" id="body-monan">
                <div className="card mb-2"id="card" >
                    <img src={value.url} className="card-img-top" alt={value.name} style={{width:"100%",height:"150px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{value.name.length>12?value.name.substring(0,12)+"...":value.name} {value.bio?<span class="badge" id="new">New</span>:""}</h5>
                        
                         <p>Giá:<span>{value.gia}</span></p>
                         <button type="button" data-toggle="modal" data-target="#demoxem"  onClick={()=>this.onMuaHang(value.id)}>Mua Hàng</button> 
                    </div>
                </div> 

                <div class="modal fade" id="demoxem">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header" id="titleMonan">
                            <h5 class="modal-title">Website<span>.com</span></h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                        <img src={valueXem.url} alt={valueXem.name} style={{width:"100%",height:"210px"}}/>
                        <div id="xem-content">
                            <h2>{valueXem.name}</h2>
                            <strong>Mã sp:<span>{`MP${valueXem.id}`}</span></strong><br/>
                            <span style={{textDecoration:"line-through",fontSize:"24px", color:"grey"}}>35000đ</span><br/>
                            <strong>Giá Thành:<span>{`${valueXem.gia} đ`}</span></strong><br/>
                            <hr/>
                            <label style={{fontSize:"20px", fontWeight:"400" }}>Số Lượng: </label>
                            <input type="Number" name="soluong" value={this.state.soluong} onChange={this.onChange} style={{width:"50px",padding:"2px",height:"24px"}}/><br />
                            <button type="button" id="lg" onClick={this.MuaNgay} data-dismiss="modal">Mua Ngay <i class="fas fa-shopping-basket"></i></button><br/>
                            <strong>Gọi đặt hàng ngay:<span>0366636052</span></strong>
                            <br/>
                            <hr/>
                            <span>Đã mua: {valueXem.mua}</span><br/>
                            <span>Lượt xem: {valueXem.xem}</span><br/>
                            <span>Lượt thích: {valueXem.link}</span>
                            <hr/>
                            <button type="button" id="sm" onClick={()=>this.clickLink(valueXem.id)}>{this.state.link?"Link":"No Link"} <i className="far fa-thumbs-up"></i></button>
                            <button type="button" id="sm">Share <i className="fas fa-share"></i></button>
                            <hr/>
                            <h5>Khánh Hòa</h5>
                            <strong id="dc">Địa chỉ:<span>Thôn Phước Đa 3-Ninh Hòa-Khánh Hòa</span></strong>
                            <hr/>
                        </div>
                        </div>
                        <div class="text-center">
                             <span>Cảm Ơn Quý Khách Đã Ủng Hộ</span>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}
const valueState=(state)=>({
    valueXem:state.MonanMua
})
export default  connect(valueState,{Mua,Edit,Link,Hoso })(withRouter(Monan))
